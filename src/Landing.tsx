import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Container, SearchInput, SearchButton } from './styledComponents/Elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Table from "./Table"
import * as H from "history";
import { url } from "./url";

interface Props extends RouteComponentProps {
  history: H.History
}

const GlobalStyle = createGlobalStyle`
  table {
  width: 80%;
  border: 1px solid black;
  border-collapse: collapse;
  margin:80px auto;
  }
  thead {
    
  }
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th,
  td,
  tr {
    padding: 7px;
  }
  th {
    text-align: left;
  }
  tr:nth-of-type(even) { 
	background: #eee; 
	}
`;

const Landing: React.FC<Props> = (props: Props) => {
  const [data, setData] = useState<any>({});

  const handleSort = (e: any) => {
    console.log(data.sort((a: any, b: any) => b.id - a.id))
    data.sort((a: any, b: any) => b.id - a.id)
  }

  const useFetch = (url: any) => {
    useEffect(() => {
      let mounted = true;
      const abortController = new AbortController();
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
  
  return (
    <> 
      <Container>
        <SearchInput type="search"/>
        <SearchButton><FontAwesomeIcon icon={faSearch}/></SearchButton>
      <GlobalStyle/>
      <Table shipments={data} handleSort={handleSort} />
      </Container>
    </>
  );
};

export default Landing;