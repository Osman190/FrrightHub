import styled from "styled-components";
import { freightHubTheme } from "./Theme";

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