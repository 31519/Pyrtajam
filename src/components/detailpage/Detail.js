import React from "react";
import style from "./Detail.module.css";
import Link from "next/link";
import Image from "next/image";
// COMPONENT IMPORT

import Date from "../date/Date";

{
  /* className={
              sidebar === true ? style.sidebarOpen : style.sidebarClose
            } */
}

const Detail = ({ datas, header }) => {
  return (
    <div className={style.mainContainer}>
      <div className={style.headerDiv}>
        <h2 className={style.header}>{header}</h2>
      </div>
      <div className={style.container}>
        {datas && (
          <div className={style.contentDiv}>
            <div className={style.imageDiv}>
              {datas.featuredImage?.node?.sourceUrl && (
                <Image
                  layout="fill"
                  className={style.image}
                  src={datas.featuredImage.node.sourceUrl}
                  alt=""
                />
              )}
            </div>
            <Date date={datas.date} />
            <div className={style.titleDiv}>
              <h2 className={style.title}>{datas.title}</h2>
              <div className={style.description}>
                <p className={style.text}>{datas.content}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
