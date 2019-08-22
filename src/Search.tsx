import React, { useState, useEffect, useRef, useContext } from "react";
import { SearchInput, SearchButton } from './styledComponents/Elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from "./AppProvider";
import { url } from "./url";
interface searchProps {
 data: object
// setSearchedData: Function
}

const Search: React.FC<any> = (props: searchProps) => {
  // let searchValue: any = useRef("")
  const { state, dispatch } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("")

  const handleSearchInputChanges = (e: any) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }
  const callSearchFunction = (e: any) => {
    e.preventDefault();
    handleSearch(searchValue);
    resetInputField();
  }

  // const callSearchFunction = (e: any, searchValue: any) => {
  //   const value = searchValue.current.value.toUpperCase()
  //   const result = Object.values(props.data).filter(element => {
  //     let similar = element.id.split('').slice(0, (element.id.length - 1)).join('')
  //     if(element.id == value) return element
  //     else if(similar == value) return element
  //   })
  //   props.setSearchedData(result)
  // }
  const handleSearch = (searchValue: string) => {
    const value = searchValue.toUpperCase()
    const result = state.data.filter((element: any) => {
      let matchValue = element.id.includes(value)
      return matchValue ? element : null;
      // let similar = element.id.split('').slice(0, (element.id.length - 1)).join('')
      // if(element.id == value) return element
      // else if(similar == value) return element
    })
    
    dispatch({type: "SEARCH_DATA", data: result})
  }
return (
    <>
    <SearchInput type="search" value={searchValue} onChange={handleSearchInputChanges}/>
    <SearchButton onClick={callSearchFunction} >
        <FontAwesomeIcon icon={faSearch} />
      </SearchButton>
    </>
  )
}

export default Search;