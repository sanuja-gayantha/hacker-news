import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {query, handleSearch}  = useGlobalContext();


  return <form className="search-form" onSubmit={(e) => e.preventDefault()}>
    <h2>Search hacker news</h2> 
    <input type="text" className="form-input" value={query} onChange={(e) => handleSearch(e.target.value)}></input>
  </form>
}

export default SearchForm