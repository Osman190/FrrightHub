import React, { useState, useEffect } from "react";
import { SearchInput, SearchButton } from './styledComponents/Elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { url } from "./url";
interface searchProps {
 data: object
}

const Search: React.FC<any> = (props: searchProps) => {
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

  const handleSearch = (value: string) => {
    let finalValue = Object.values(props.data).filter((shipment: any) =>
      shipment.id.toLowerCase().includes(value)
    );
    console.log("86", finalValue)
    //  setData(finalValue)
  }

return (
    <>
      <SearchInput type="search" value={searchValue} onChange={handleSearchInputChanges} />
      <SearchButton onClick={callSearchFunction} value=""  >
        <FontAwesomeIcon icon={faSearch} />
      </SearchButton>
    </>
  )
}

export default Search;