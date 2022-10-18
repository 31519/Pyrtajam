import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import style from "./SearchBox.module.css";
import { useRouter } from "next/router";

function SearchBox() {
  const router = useRouter();
  const [openSearch, setOpenSearch] = useState(false);
  const [keyword, setKeyword] = useState("");

  const searchHandler = async (e) => {
    e.preventDefault();
    if (keyword) {
      let searchQuery = `${router.pathname}/?keyword=${keyword}`;
      router.push(searchQuery);
    } else {
      router.push(`${router.pathname}`);
    }
  };
  const openHandler = (e) => {
    if (openSearch === false) {
      const search = document.querySelector("#input");
      search.style.width = "200px";
      setOpenSearch(true);
      console.log("search", openSearch)
    } else {
    //   if (keyword) {
    //     let searchQuery = `${router.pathname}/?keyword=${keyword}`;
    //     router.push(searchQuery);
    //   } else {
    //     router.push(`${router.pathname}`);
    //   }
    //   console.log("keyworud", keyword)
    // }
    searchHandler(e)
    }
  };
  return (
    <form className={style.form} onSubmit={searchHandler}>
      <div className={style.searchBox}>
        <input
          type="text"
          placeholder="Search Here ... "
          className={style.searchInput}
          onChange={(e) => setKeyword(e.target.value)}
          id="input"
        />
        <a href="#" className={style.searchBtn} type="submit">
          <SearchIcon onClick={openHandler} />
        </a>
      </div>
    </form>
  );
}

export default SearchBox;
