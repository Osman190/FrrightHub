import React, { useState, useEffect} from "react";
import { url } from "./url";

interface Props {
 match: {
  params: {
    id: String
  }
 }
}


const SingleShipment: React.FC<any> = (props: Props) => {
  const [data, setData] = useState<any>({});
  console.log(props);
  console.log(data);
  const useFetch = (url: any) => {
    useEffect(() => {
      (async () => {
        const res = await fetch(url, { method: "GET" });
        const data = await res.json();
         setData(data);
      })();
    }, [url]);
    return data;
  };
  useFetch(url)

  const singleShipment = Object.values(data).filter(
    (product: any) => props.match.params.id === product.id
  )[0];
  console.log(singleShipment);
  return  (
      <h1>Hahaha</h1>
    );
};
export default SingleShipment;