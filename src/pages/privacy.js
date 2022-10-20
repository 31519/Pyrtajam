import React from "react";
import style from "../../styles/Privacy.module.css";
import { Grid } from "@mui/material";

// COMPONENTS IMPORT
import Mostview from "../components/mostview/Mostview";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";
import SliderFramework from "../components/sliderframework/SliderFramework";
import MetaScreen from "../components/metatags/MetaScreen";


const Privacy = () => {
  return (
    <>
      <MetaScreen
        pageTitle="Pyrtajam -- Privacy Policy"
        description="Best one platform for news, Jobs, educations, notifications in India "
        previewImage="/Pyrtajam.png"
        siteName="www.pyrtajam.com"
        currentURL="/aboutus"
        twitterHandle="Pyrtajam"
      />
      <Sidebar />
      <div></div>

      <SliderFramework />
      <Footer />
    </>
  );
};

export default Privacy;
