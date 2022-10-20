import React, { useState, useEffect } from "react";
import style from "./Sidebar.module.css";

import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import MediaIcon from "../mediaicon/MediaIcon";
import SearchBox from "../searchbox/SearchBox";
import Image from "next/image";

const sidebarLink = [
  {
    title: "News",
    link: "/news/?category=Rick&keyword=",
  },
  {
    title: "Jobs",
    link: "/jobs/?category=Jobs&keyword=",
  },
  {
    title: "Sport",
    link: "/news/?category=Sport&keyword=",
  },
  {
    title: "Politics",
    link: "/news/?category=Politics&keyword=",
  },
  {
    title: "Education",
    link: "/news/?category=Educations&keyword=",
  },
  {
    title: "Notification",
    link: "/jobs/?category=Notification&keyword=",
  },
  
  {
    title: "Admit card",
    link: "/jobs/?category=Admit card&keyword=",
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

  const [dateState, setDateState] = useState(new Date());

  const openSidebarHandler = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <header>
      <div className={style.container}>
        <div className={style.dateDiv}>
          <div className={style.imageDiv}>
            <Link href="/" className={style.link}>
            <Image
              src="/Pyrtajam.png"
              alt="pyrtajam"
              layout="fill"
              className={style.image}
            />
            </Link>
          </div>
          {/* <p className={style.dateText}>
              {""}
              {dateState.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p> */}
          {/* <p className={style.dateText}>
              {""}
              {dateState.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: "true",
              })}
            </p> */}
        </div>
        <div className={style.listDiv}>
          <ul className={style.ulDiv}>
            <li className={style.list}>
              <Link href="/">
                <a className={style.link}>Home</a>
              </Link>
            </li>
            <li className={style.list}>
              <Link href="/jobs/?category=Jobs&keyword=">
                <a className={style.link}>Jobs</a>
              </Link>
            </li>
            <li className={style.list}>
              <Link href="/news/?category=&keyword=">
                <a className={style.link}>News</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.iconDiv}>
          <div className={style.searchDiv}>
            {sidebar === false ? (
              <div>
                <SearchBox />
              </div>
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
            <MediaIcon />
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
