import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import style from "./SearchBox.module.css";
import { useRouter } from "next/router";

function SearchBox() {
  const router = useRouter();
  const [cat, setCat] = useState("");
  const { category, page } = router.query;
  const [openSearch, setOpenSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [pages, setPages] =useState("")
  console.log("category", category)

  let queryParams;
  if (typeof window != "undefined") {
    queryParams = new URLSearchParams(document.location.search.substring(1));
  }

  const searchHandler = async (e) => {
    e.preventDefault();

    if(!category){
      setCat("")
    }
    if(!page) {
      setPages(1)
    }

    var path;
    // if(router.pathname==="/news"){
    //   path = `/news?q=${keyword}&c=${cat}&page=${pages}`
    // } else(
    //   path = `/search?q=${keyword}`
    // )

    // if (queryParams.has("category")) {
    //   if (keyword) {
    //     if (
    //       router.pathname === "/" ||
    //       router.pathname === "privacy" ||
    //       router.pathname === "aboutus" ||
    //       router.pathname === "termsandconditions" ||
    //       router.pathname === "404"
    //     ) {
    //       path = "/news";
    //     } else {
    //       path = "";
    //     }
    //     let searchQuery = `${
    //       router.pathname
    //     }${path}/?category=${category}&keyword=${keyword}&page=${(page = 1)}`;
    //     router.push(searchQuery);
    //   } else {
    //     router.push(`${router.pathname}`);
    //   }
    //   console.log("category", category);
    //   setCat(category);
    // } else {
    //   if (keyword) {
    //     if (
    //       router.pathname === "/" ||
    //       router.pathname === "/privacy" ||
    //       router.pathname === "/aboutus" ||
    //       router.pathname === "/termsandconditions" ||
    //       router.pathname === "/404"
    //       ) {
    //       path = "/news";
    //     } else {
    //       path = router.pathname;
    //     }
    //     let searchQuery = `${path}/?category=&keyword=${keyword}&page=${(page = 1)}`;
    //     router.push(searchQuery);
    //   } else {
    //     router.push(`${router.pathname}`);
    //   }
      
    // }

    await router.push(`/news?q=${keyword}&category=${cat}&page=${pages}`)
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
          <SearchIcon />
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
