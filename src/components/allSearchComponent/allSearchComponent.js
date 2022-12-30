import React from "react";
import style from "./allSearchComponent.module.css";
import Link from "next/link";

// COMPONENT IMPORT
import Image from "next/image";
import Date from "../date/Date";
import Readmore from "../readmore/Readmore";
import SkeletonLoading from "../skeleton/SkeletonLoading";


{
  /* className={
              sidebar === true ? style.sidebarOpen : style.sidebarClose
            } */
}

const AllSearchComponent = ({ datas,  link, loading , error }) => {
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        {loading && <SkeletonLoading />}
        {datas &&
          datas.map((data) => (
            <Link href={`${link}/${data.id}`} key={data.id}>
              <div className={style.contentDiv}>
                <div className={style.imageDiv}>
                  {data.featuredImage?.node?.sourceUrl && (
                    <Image
                      layout="fill"
                      className={style.image}
                      src={data.featuredImage?.node?.sourceUrl}
                      alt=""
                    />
                  )}
                </div>
                <div className={style.titleDiv}>
                  <h2 className={style.title}>{data.title}</h2>

                  <Date date={data.date} />
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default AllSearchComponent;
