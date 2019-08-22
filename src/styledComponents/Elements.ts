import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const AppContainer = styled.div`
  height: 100%;
  display: flex;
  transition: opacity 0.5s ease;
  flex-flow: column;
  opacity: 1
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input<any>`
	margin-top: 20px;
	
	
`
export const SearchButton = styled.button`
	margin-top: 5px;
`

export const WarpSort = styled.span`
	display: flex;
	flex-direction: column;
	float: right;
  height: 10px;
	width: 12px;
`

export const GlobalStyle = createGlobalStyle`
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