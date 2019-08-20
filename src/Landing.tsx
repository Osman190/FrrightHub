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
  // const [data, setData] = useState<any>({});
  // const [sort, setSort] = useState<any>(true)
  
  const handleSortId = () => {
    let data = state.data.reverse()
    dispatch({type: "REVERSED_DATA", data: data})
  }
  
  useEffect(() => {
    (async () => {
      const res = await fetch(url, { method: "GET" });
      const data = await res.json();
      dispatch({ type: "FETCH_DATA", data: Object.values(data) });
      // let page1: any = {}
      // let page2: any = {}
      // let splitData: any = []
      // Object.values(data).map((item, i) => {
      //   if (i < 20) page1[i] = item
      //   else if (i >= 20) page2[i] = item
      // })
      // splitData.push(page1, page2)
      // setData(data);
    })();
  }, []);

  return (
    <> 
      <Container>
        <GlobalStyle />
        <Search data={state.data} setSearchedData={setSearchedData} />   
        <Table shipments={state.data} handleSortId={handleSortId} />
      </Container>
    </>
  );
};

export default Landing;