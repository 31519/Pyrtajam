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

const MainviewOne = ({ datas, header, link }) => {
  return (
    <div className={style.mainviewoneContainer}>
      <div className={style.headerDiv}>
        <h2 className={style.header}>{header}</h2>
      </div>
      <div className={style.container}>
        {datas &&
          datas.map((data, index) => (
            <Link href={`/${link}/${data.id}`} key={data.id}>
              <div
                className={index === 0 ? style.contentDiv1 : style.contentDiv}
              >
                <div
                  className={index === 0 ? style.titleDiv1 : style.titleDiv}
                >
                  <Title title={data.title} />
                  {/* <div className={style.description}>
                    <Description
                      description={data.content.slice(0, 150)}
                      more="..."
                    />
                  </div> */}
                  <Date date={data.date} />
                </div>
                <div
                  className={index === 0 ? style.imageDiv1 : style.imageDiv}
                >
                  {index === 0 ? (
                    <WideImage image={data.featuredImage?.node.sourceUrl} />
                  ) : (
                    <SmallImage image={data.featuredImage?.node.sourceUrl} />
                  )}
                </div>
              </div>
            </Link>
            
          ))}
          {/* {datas[0].title} */}
        <BrowseAll link="/" />
      </div>
    </div>
  );
};

export default MainviewOne;
