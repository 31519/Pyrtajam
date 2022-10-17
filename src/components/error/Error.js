import React from "react";
import {useRouter} from "next/router"
import Image from "next/image";
import style from "./Error.module.css";
import Link from "next/link";

function Error() {
  const router = useRouter()
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <Image layout="fill" alt="404" className={style.image} src="/404.jpg" />
      </div>
      <div className={style.buttonDiv}>
        <Link href="/">
          <button className={style.button}>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
