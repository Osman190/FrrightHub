import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Container, GlobalStyle } from './styledComponents/Elements'
import Table from "./Table"
import Search from "./Search"
import * as H from "history";
import { url } from "./url";

interface Props extends RouteComponentProps {
  history: H.History
}



const Landing: React.FC<Props> = (props: Props) => {
  const [data, setData] = useState<any>({});
  const [sort, getSort] = useState<any>(true)
  

  const handleSort = (e: any, matrix: string) => {
    let newData = data.sort((a: any, b:any) => {
      if (sort) {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    })
    console.log(newData)
    setData(newData)
    getSort(!sort)
  }

  useEffect(() => {
    (async () => {
      const res = await fetch(url, { method: "GET" });
      const data = await res.json();
      setData(data);
    })();
  }, []);

  return (
    <> 
      <Container>
        <Search data={data}/>        
        <GlobalStyle/>
        <Table shipments={data} handleSort={handleSort} />
      </Container>
    </>
  );
};

export default Landing;