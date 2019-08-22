import React, { useState, useEffect, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Container, GlobalStyle } from './styledComponents/Elements'
import { AppContext } from "./AppProvider";
import Table from "./Table"
import Search from "./Search"
import * as H from "history";
import { url } from "./url";

interface Props extends RouteComponentProps {
  history: H.History
  
}

const Landing: React.FC<Props> = (props: Props) => {
  const { state, dispatch } = useContext(AppContext);
  const [searchedData, setSearchedData] = useState<any>(state.data);
  const [localData, setData] = useState<any>([]);
  // const [sort, setSort] = useState<any>(true)
  
  const handleSortId = (e: any) => {
    e.preventDefault()
      dispatch({ type: "REST_DATA", data: localData })
    let data = state.data.sort((a: any, b: any) => {
      return Number(a.id.replace(/\D/g, '')) - Number(b.id.replace(/\D/g, '')) ? -1
            : Number(b.id.replace(/\D/g, '')) - Number(a.id.replace(/\D/g, '')) ? 1
            : 0;
    });
      dispatch({ type: "REVERSED_DATA", data: data })
  }

  const handleSortName = (e: any) => {
    e.preventDefault()
    let data = state.data.sort((a: any, b: any) => {
      return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
    });
    dispatch({ type: "REVERSED_DATA", data:  data  })
  }
  
  useEffect(() => {
    (async () => {
      const res = await fetch(url, { method: "GET" });
      const data = await res.json();
      setData(Object.values(data))
      dispatch({ type: "FETCH_DATA", data: Object.values(data) });
    })();
  }, []);

  return (
    <> 
      <Container>
        <GlobalStyle />
        <Search data={state.data} setSearchedData={setSearchedData} />   
        <Table
          shipments={state.data}
          handleSortId={handleSortId}
          handleSortName={handleSortName} />
      </Container>
    </>
  );
};

export default Landing;