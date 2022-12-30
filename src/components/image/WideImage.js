import Image from "next/image";
import style from "./WideImage.module.css";

import React from "react";

function WideImage({ image }) {
  return (
    <div className={style.imageDiv}>
      {image && (
        <Image layout="fill" className={style.image} src={image} alt="" />
      )}
    </div>
  );
}

export default WideImage;
