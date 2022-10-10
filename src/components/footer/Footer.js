import React from "react";
import style from "./Footer.module.css";
import MediaIcon from "../mediaicon/MediaIcon";
import Link from "next/link";

function Footer() {
  return (
    <footer className={style.container}>
      {/* 1st div */}
      <div className={style.firstDiv}>
        <div>PYRTAJAM</div>
        <div>
          <MediaIcon />
        </div>
      </div>
      {/* 2nd div */}
      <div className={style.secondDiv}>
        {/* 1st */}
        <div className={style.secondContent1}>
          <div className={style.secondHeader}>
            <h2 className={style.secondHeaderText}>News</h2>
          </div>
          <div className={style.secondListDiv}>
            <ul className={style.secondUl}>
              <Link className={style.link} href="/">
                <li className={style.secondList}>Entertainment</li>
              </Link>
              <Link className={style.link} href="/">
                <li className={style.secondList}>Sport</li>
              </Link>
              <Link className={style.link} href="/">
                <li className={style.secondList}>Event</li>
              </Link>
              <Link className={style.link} href="/">
                <li className={style.secondList}>Education</li>
              </Link>
              <Link className={style.link} href="/">
                <li className={style.secondList}>Politics</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* 2nd */}
        <div className={style.secondContent2}>
          <div className={style.secondHeader}>
            <h2 className={style.secondHeaderText}>Link</h2>
          </div>
          <div className={style.secondListDiv}>
            <ul className={style.secondUl}>
              <Link className={style.link} href="/news">
                <li className={style.secondList}>News</li>
              </Link>
              <Link className={style.link} href="/">
                <li className={style.secondList}>Sport</li>
              </Link>
              <Link className={style.link} href="/">
                <li className={style.secondList}>Event</li>
              </Link>
              <Link className={style.link} href="/">
                <li className={style.secondList}>Education</li>
              </Link>
              <Link className={style.link} href="/">
                <li className={style.secondList}>Politics</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* 3rd */}
        <div className={style.secondContent3}>
          <div className={style.secondHeader}>
            <h2 className={style.secondHeaderText}>About</h2>
          </div>
          <div className={style.secondListDiv}>
            <ul className={style.secondUl}>
              <Link className={style.link} href="/aboutus">
                <li className={style.secondList}>About Us</li>
              </Link>
              <Link className={style.link} href="/privacy">
                <li className={style.secondList}>Privacy Policy</li>
              </Link>
              <Link className={style.link} href="/">
                <li className={style.secondList}>Event</li>
              </Link>
              <Link className={style.link} href="/">
                <li className={style.secondList}>Education</li>
              </Link>
              <Link className={style.link} href="/">
                <li className={style.secondList}>Politics</li>
              </Link>
            </ul>
          </div>
          {/* end */}
        </div>
        <div className={style.brand}>this is the brand</div>
      </div>
      {/* 3rd div */}
      <div className={style.thirdDiv}>
        <div className={style.thirdContent1}>
          <p className={style.thirdContent1Text}>@copyright Pyrtajam</p>
        </div>
        <div className={style.thirdContent2}>
          <div className={style.thirdDiv2Div}>
            <p className={style.thirdDiv2Text}>DCMA</p>
          </div>
          <div className={style.thirdDiv2Div}>
            <p className={style.thirdDiv2Text}>REGOGNISE</p>
          </div>
          <div className={style.thirdDiv2Div}>
            <p className={style.thirdDiv2Text}>REJECTED</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
