import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./Mostview.module.css";

const Mostview = ({ datas, link }) => {
  return (
    <>
      <div className={style.container}>
        {datas &&
          datas.map((data) => (
            <>
              <Link href={`/${link}/${data.title}/${data.id}`}>
                <div key={data.id} className={style.contentDiv}>
                  <div className={style.textDiv}>
                    <h2 className={style.textTitle}>
                      {data.title.slice(0, 49)}...
                    </h2>
                  </div>
                  <div className={style.imageDiv}>
                    <Image
                      layout="fill"
                      className={style.image}
                      src={data.image}
                      alt=""
                    />
                  </div>
                </div>
              </Link>
            </>
          ))}
      </div>
    </>
  );
};

export default Mostview;
