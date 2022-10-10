import React from "react";
import style from "./SideviewOne.module.css";
import Link from "next/link";

// COMPONENT IMPORT
import TitleSmall from "../titlesmall/TitleSmall";
import WideImage from "../image/WideImage";
import SmallImage from "../image/SmallImage";
import Description from "../description/Description";
import Date from "../date/Date";
import BrowseAll from "../browseall/BrowseAll";
import Readmore from "../readmore/Readmore";

{
  /* className={
              sidebar === true ? style.sidebarOpen : style.sidebarClose
            } */
}

const SideviewOne = ({ datas, header }) => {
  return (
    <div className={style.container}>
      <div className={style.headerDiv}>
        <h2 className={style.header}>{header}</h2>
      </div>
      <div >
        {datas &&
          datas.map((data) => (
            <Link href="/" key={data.id}>
              <div
                className={data.id === 1 ? style.contentDiv1 : style.contentDiv}
              >
                <div
                  className={data.id === 1 ? style.imageDiv1 : style.imageDiv}
                >
                  {data.id === 1 && <WideImage image={data.image} />}
                </div>
                <div
                  className={data.id === 1 ? style.titleDiv1 : style.titleDiv}
                >
                  <TitleSmall title={data.title} />
                  <div className={style.description}>
                    <Description
                      description={data.description.slice(0, 150)}
                      more="..."
                    />
                  </div>
                  <Date date={data.date} />
                </div>
              </div>
            </Link>
            // </div>
          ))}
        <BrowseAll link="/" />
      </div>
    </div>
  );
};

export default SideviewOne;
