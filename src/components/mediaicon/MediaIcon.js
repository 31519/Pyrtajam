import React from "react";
import style from "./MediaIcon.module.css";
import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
// const whatapp = "/icon/whatsapp-1.svg";
// const telegram = "/icon/telegram.svg";
// const facebook = "/icon/facebook.svg";
// const youtube = "/icon/youtube.svg"
// const instagram = "/icon/instagram.svg"

const icons = [
  {
    image: "/icon/whatsapp-1.svg",
    link: "/",
  },
  {
    image: "/icon/instagram.svg",
    link: "/",
  },
  {
    image: "/icon/facebook.svg",
    link: "/",
  },
  {
    image: "/icon/youtube.svg",
    link: "/",
  },
  {
    image: "/icon/telegram.svg",
    link: "/",
  },
];

const MediaIcon = () => {
  return (
    <div className={style.container}>
      {icons &&
        icons.map((icon) => (
          <Link key={icon.link} className={style.link} href={icon.link}>
            <div key={icon.link} className={style.icon1}>
              <Image
                layout="fill"
                className={style.image}
                src={icon.image}
                alt=""
              />
            </div>
          </Link>
        ))}
    </div>
  );
};

export default MediaIcon;
