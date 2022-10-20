import React from "react";
import style from "./SkeletonLoading.module.css";
const datas = [1, 2, 3, 4, 5, 6];

function SkeletonLoading() {
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

export default SkeletonLoading;
