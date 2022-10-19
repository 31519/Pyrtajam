import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import style from "./SearchBox.module.css";
import { useRouter } from "next/router";

function SearchBox() {
  const router = useRouter();
  const [cat, setCat] = useState("")
  const {category, page}  = router.query
  const [openSearch, setOpenSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  // const category = "rick"

  const searchHandler = async (e) => {
    e.preventDefault();

    if (category === undefined) {
        setCat("")
    } else {
      setCat(category)
    }

    var path
    if (keyword) {
      if(router.pathname === "/"){
        path = "/news"
      } else {
        path = ""
      }
      let searchQuery = `${router.pathname}${path}/?category=${category}&keyword=${keyword}&page=${page=1}`;
      router.push(searchQuery);
      console.log("keyword", router.pathname)
    } else {

      router.push(`${router.pathname}`);
    }
  };
  // const openHandler = (e) => {
  //   if (openSearch === false) {
  //     const search = document.querySelector("#input");
  //     search.style.width = "200px";
  //     setOpenSearch(true);
  //     console.log("search", openSearch)
  //   } else {
  //     if (keyword) {
  //       let searchQuery = `${router.pathname}/?keyword=${keyword}`;
  //       router.push(searchQuery);
  //     } else {
  //       router.push(`${router.pathname}`);
  //     }
  //     console.log("keyworud", keyword)
  //   }
  //   }
  // };
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
        <button className={style.searchBtn} type="submit">
          <SearchIcon  />
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
