import React, { useState, useEffect } from "react";
import style from "./Sidebar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import MediaIcon from '../mediaicon/MediaIcon'

const sidebarLink = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Article",
    link: "/",
  },
  {
    title: "News",
    link: "/news",
  },
  {
    title: "Jobs",
    link: "/",
  },
  {
    title: "Advertisement",
    link: "/",
  },
  {
    title: "About Us",
    link: "/aboutus",
  },
  {
    title: "Privacy Policy",
    link: "/privacy",
  },
];

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [dateState, setDateState] = useState(new Date())

  const openSidebarHandler = () => {
    setSidebar(!sidebar);
  };

  useEffect (() => {
    setInterval(()=> setDateState(new Date()), 30000)
  }, [])

  return (
    <header>
      <div className={style.container}>
        <div className={style.dateDiv}>
          <p className={style.dateText}>{''}
          {dateState.toLocaleDateString('en-GB', {
            day: "numeric",
            month:"short",
            year:"numeric"
          })}
          
          </p>
          <p className={style.dateText}>{''}
          {dateState.toLocaleString('en-US', {
            hour: "numeric",
            minute:"numeric",
            hour12:"true"
          })}
          
          </p>
        </div>
        <div className={style.listDiv}>
          <ul className={style.ulDiv}>
            <li className={style.list}>
              <Link href="/">
                <a className={style.link}>Home</a>
              </Link>
            </li>
            <li className={style.list}>
              <Link href="/">
                <a className={style.link}>Article</a>
              </Link>
            </li>
            <li className={style.list}>
              <Link href="/">
                <a className={style.link}>News</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.iconDiv}>
          <div className={style.searchDiv}>
            {sidebar === false ? (
              <Link href="/">
                <SearchIcon />
              </Link>
            ) : (
              ""
            )}
          </div>
          <div className={style.hamburgerDiv} onClick={openSidebarHandler}>
            {sidebar === false ? <MenuIcon /> : ""}
          </div>
        </div>
        {/* Side bar */}


        <div
          className={
            sidebar === true ? style.sidebarContainer : style.sidebarClose
          }
        >
          {/* Only the list in the sidebar view */}
          <div className={style.sidebarDiv}>
            <MediaIcon/>
            <ul className={style.sidebarUl}>
              {sidebarLink.map((sidebar) => (
                <li key={sidebar.title} className={style.sidebarlist}>
                  <Link href={sidebar.link}>
                    <a className={style.sidebarlink}>{sidebar.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* End of sidebar list */}
          <div className={style.closeDiv} onClick={openSidebarHandler}>
            <CloseIcon />
          </div>
        </div>
      </div>
      <div className={style.hight}></div>
    </header>
  );
};

export default Sidebar;