import Image from "next/image";
import style from "./SmallImage.module.css";

import React from "react";

function SmallImage({ image }) {
  return (
    <div className={style.imageDiv}>
      <Image layout="fill" className={style.image} src={image} alt="" />
    </div>
  );
}

export default SmallImage;
