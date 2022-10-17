import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import style from "./SearchBox.module.css"

function SearchBox() {
    const openHandler = () => {
        const search = document.querySelector("#input")
        search.style.width = "180px"
    }
  return (
    <div className={style.searchBox}>
        
        <input type="text" placeholder="Search Here ... "  className={style.searchInput} id="input"/>
        <a href="#" className={style.searchBtn}>
        <SearchIcon onClick={openHandler}/>

        </a>
    </div>
  )
}

export default SearchBox