import React from "react";
import style from "./StaticCategory.module.css";
import Link from "next/link";

const category = [
  {
    title: "News",
    link: "/news/?category=Rick&keyword=",
  },
  {
    title: "Jobs",
    link: "/news/?category=Jobs&keyword=",
  },
  {
    title: "Sport",
    link: "/news/?category=Sports&keyword=",
  },
  {
    title: "Politics",
    link: "/news/?category=Politics&keyword=",
  },
  {
    title: "Education",
    link: "/news/?category=Educations&keyword=",
  },
  {
    title: "Notification",
    link: "/News/?category=Notification&keyword=",
  },
  
  {
    title: "Admit card",
    link: "/News/?category=Admit card&keyword=",
  },
];

function StaticCategory() {
  return (
    <div className={style.container}>
      {category.map((cat) => (
        <div  key={cat.title}  className={style.contentMap}>
        <Link key={cat.title} href={cat.link}>
          <div className={style.content}>
              <p className={style.text}>{cat.title}</p>
          </div>
        </Link>
        </div>
      ))}
    </div>
  );
}

export default StaticCategory;
