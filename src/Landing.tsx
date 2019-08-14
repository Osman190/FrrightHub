import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Container } from './styledComponents/Elements'
import * as H from "history";
import { url } from "./url";


interface Props extends RouteComponentProps {
  history: H.History
}

const LandingShipments: React.FC<Props> = (props: Props) => {
  const [data, setData] = useState<any>({});

  const useFetch = (url: any) => {
    let mounted = true;
    const abortController = new AbortController();
    useEffect(() => {
      (async () => {
        const res = await fetch(url, {
          signal: abortController.signal,
        });
        const data = await res.json();
        if (mounted) setData(data);
      })();
      const cleanup = () => {
        mounted = !mounted;
        abortController.abort();
      };
      return cleanup;
    }, [url]);
    return data;
  };
  useFetch(url)
  console.log(data)
  return (
    <Container>
      <div>hello</div>
    </Container>
  );
};

export default LandingShipments;