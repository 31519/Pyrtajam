import React from "react";
import style from "./MainviewOne.module.css";
import Link from "next/link";

// COMPONENT IMPORT
import Title from "../title/Title";
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

const MainviewOne = ({ datas, header }) => {
  return (
    <>
      <div className={style.headerDiv}>
        <h2 className={style.header}>{header}</h2>
      </div>
      <div className={style.container}>
        {datas &&
          datas.map((data) => (
            <Link href="/" key={data.id}>
              <div
                className={data.id === 1 ? style.contentDiv1 : style.contentDiv}
              >
                <div
                  className={data.id === 1 ? style.titleDiv1 : style.titleDiv}
                >
                  <Title title={data.title} />
                  <div className={style.description}>
                    <Description
                      description={data.description.slice(0, 150)}
                      more="..."
                    />
                  </div>
                  <Date date={data.date} />
                </div>
                <div
                  className={data.id === 1 ? style.imageDiv1 : style.imageDiv}
                >
                  {data.id === 1 ? (
                    <WideImage image={data.image} />
                  ) : (
                    <SmallImage image={data.image} />
                  )}
                </div>
              </div>
            </Link>
            // </div>
          ))}
        <BrowseAll link="/" />
      </div>
    </>
  );
};

export default MainviewOne;
