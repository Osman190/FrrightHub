import React, { useState, useEffect, useMemo } from "react";
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
    padding: 10px;
    
  }
  th {
    text-align: left;
  }
  tr:nth-of-type(even) { 
	background: #eee; 
  }
  td:last-child {
      padding-left: 3%;
      width: 8%;
  }
  td:last-child :hover{
    padding-left: 4% 
  }
`;

const Landing: React.FC<Props> = (props: Props) => {
  const [data, setData] = useState<any>({});
  const [sort, getSort] = useState<any>(true)
  const [searchValue, setSearchValue] = useState("")

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
const handleSearch = (e: any) => {
  console.log(e.target)
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
        <SearchInput type="search" />
        <SearchButton onClick={e => handleSearch(e)}>
          <FontAwesomeIcon icon={faSearch}/>
        </SearchButton>
      <GlobalStyle/>
      <Table shipments={data} handleSort={handleSort} />
      </Container>
    </>
  );
};

export default Landing;