import React from "react";
import style from "./PageNews.module.css";
import Link from "next/link";

// COMPONENT IMPORT
import Title from "../title/Title";
import Image from "next/image";
import Description from "../description/Description";
import Date from "../date/Date";
import BrowseAll from "../browseall/BrowseAll";
import Readmore from "../readmore/Readmore";
import Paginate from "../paginate/Paginate";
import SkeletonLoading from "../skeleton/SkeletonLoading"

const loading = true
{
  /* className={
              sidebar === true ? style.sidebarOpen : style.sidebarClose
            } */
}

const PageNews = ({ datas, header, link }) => {

  return (
    <div className={style.mainContainer}>
      <div className={style.headerDiv}>
        <h2 className={style.header}>{header}</h2>
      </div>
      <div className={style.container}>
        {loading && (
          <SkeletonLoading/>
        )}
        {datas &&
          datas.map((data) => (
            <Link href={`${link}/${data.title}`} key={data.id}>
              <div className={style.contentDiv}>
                <div className={style.imageDiv}>
                  <Image
                    layout="fill"
                    className={style.image}
                    src={data.image}
                    alt=""
                  />
                </div>
                <div className={style.titleDiv}>
                  <h2 className={style.title}>{data.title}</h2>
                  <div className={style.description}>
                    <p className={style.text}>
                      {data.description.slice(0, 100)} ...
                      
                    </p>
                  </div>
                  <Date date={data.date} />
                </div>
              </div>
            </Link>
          ))}
      </div>
      <Paginate resPerPage={8} count={12} />
    </div>
  );
};

export default PageNews;
