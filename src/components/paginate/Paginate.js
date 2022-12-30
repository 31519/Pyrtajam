import React, { useState, useEffect } from "react";


import Pagination from "react-js-pagination";
import { useRouter } from "next/router";


const Paginate = ({  count, resPerPage }) => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [pages, setPages] =useState("")
  const [cat, setCat] = useState("");

  const { q, c, page } = router.query;
  
  // console.log("screen", page);
  // console.log("keyword", keyword);
  // console.log("routrer.query", router.query);
  let queryParams;
  if (typeof window != "undefined") {
    queryParams = new URLSearchParams(window.location.search);
  }

  const handlePageClick = async(currentPage) => {
    if (queryParams.has("page")) {
      queryParams.set("page", currentPage);
    } else {
      queryParams.append("page", currentPage);
    }
    console.log("currentpage", currentPage)


    if(c){
      setCat(c)
    }
    console.log("cat",c)
    console.log("page", page)
    if(q){
      setKeyword(q)
    }
    console.log("keyword", q)

    var path;
    if(router.pathname==="/news"){
      path = `/news?q=${keyword}&c=${cat}&page=${currentPage}`
    } else(
      path = `/search?q=${keyword}`
    )
    await router.push(path)
  };

  return (
    <>
      {resPerPage < count && (
        <div className="paginationDiv">
          <Pagination
            activePage={page}
            itemsCountPerPage={resPerPage}
            totalItemsCount={count}
            onChange={handlePageClick}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      )}
    </>
  );
};

export default Paginate;
