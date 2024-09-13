import React from 'react'
import styles from './SearchBox.module.css'

import {IoSearch } from 'react-icons/io5'
const SearchBox = ({search , setSearch , searchHandler}) => {
  return (
    <div className={styles.search}>
        <input type='text' placeholder='search' value={search} onChange={(e) =>setSearch(e.target.value.toLowerCase())}/>
        <button onClick={searchHandler}><IoSearch /></button>
    </div>
  )
}

export default SearchBox