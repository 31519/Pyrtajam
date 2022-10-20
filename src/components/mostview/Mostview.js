import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./Mostview.module.css";

import MostViewSkeleton from "../skeleton/MostViewSkeleton"


const Mostview = ({ datas, link, loading, error }) => {
  return (
    <>
      <div className={style.container}>
        {loading && (
          <MostViewSkeleton/>
        )}
        {error && (
          <MostViewSkeleton/>
        )}
        {datas &&
          datas.map((data) => (
            <>
              {/* <Link href={`/${link}/${data.title}/${data.id}`}> */}
                <div key={data.id} className={style.contentDiv}>

                  <div className={style.imageDiv}>
                    <Image
                      layout="fill"
                      className={style.image}
                      src={data.image}
                      alt=""
                    />
                  </div>
                  <div className={style.textDiv}>
                    <h2 className={style.textTitle}>
                      {/* {data.title.slice(0, 49)}... */}
                      {data.name}
                    </h2>
                  </div>
                </div>
              {/* </Link> */}
            </>
          ))}
      </div>
    </>
  );
};

export default Mostview;
