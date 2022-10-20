import React from "react";
import style from "./MostViewSkeleton.module.css";
const datas = [1, 2, 3, 4, 5, 6];

function MostViewSkeleton() {
  return (
    <>
      {datas.map((data, index) => (
        <div key={index} className={style.container}>
          <div className={style.image}></div>
          <div className={style.detail}>
            <span className={style.name}></span>
            <span className={style.name}></span>
            <span className={style.name}></span>
            <span className={style.name}></span>
          </div>
        </div>
      ))}
    </>
  );
}

export default MostViewSkeleton;
