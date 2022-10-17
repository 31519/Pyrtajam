import React from 'react'
import { Grid } from "@mui/material";
import style from "../../../../styles/detail.module.css"
// COMPONENTS IMPORT

// COMPONENTS IMPORT
import Mostview from "../../../components/mostview/Mostview";
import Sidebar from "../../../components/sidebar/Sidebar";
import SliderFramework from "../../../components/sliderframework/SliderFramework";
import Footer from "../../../components/footer/Footer";
import PageNews from "../../../components/pagenews/PageNews";
import SideviewOne from "../../../components/sideviewone/SideviewOne";
import Detail from "../../../components/detailpage/Detail";

const data = [
    {
      id: 1,
      title: "this is the first data for this test app  as long as we are here",
      description:
        "this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are herethis is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here v this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here ",
      image: "/jobPlaceholder.jpg",
      date: "Jun 4, 2021",
    },
    {
      id: 2,
      title: "this is the first data for this test app  as long as we are here",
      description:
        "this is the description for this test data or apps as long as we are here",
      image: "/advertise.jpg",
      date: "Jun 4, 2021",
    },
    {
      id: 3,
      title: "this is the first data for this test app  as long as we are here this is the first data for this test app  as long as we are h",
      description:
        "this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are herethis is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here v this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here ",
      image: "/jobPlaceholder.jpg",
      date: "Jun 4, 2021",
    },
    {
      id: 4,
      title: "this is the first data for this test app  as long as we are here",
      description:
        "this is the description for this test data or apps as long as we are here",
      image: "/advertise.jpg",
      date: "Jun 4, 2021",
    },
    {
      id: 5,
      title: "this is the first data for this test app  as long as we are here",
      description:
        "this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are herethis is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here v this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here ",
      image: "/jobPlaceholder.jpg",
      date: "Jun 4, 2021",
    },
    {
      id: 6,
      title: "this is the first data for this test app  as long as we are here",
      description:
        "this is the description for this test data or apps as long as we are here",
      image: "/jobPlaceholder.jpg",
      date: "Jun 4, 2021",
    },
    {
      id: 7,
      title: "this is the first data for this test app  as long as we are here",
      description:
        "this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are herethis is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here v this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here this is the description for this test data or apps as long as we are here ",
      image: "/jobPlaceholder.jpg",
      date: "Jun 4, 2021",
    },
    {
      id: 8,
      title: "this is the first data for this test app  as long as we are here",
      description:
        "this is the description for this test data or apps as long as we are here",
      image: "/advertise.jpg",
      date: "Jun 4, 2021",
    },
    {
      id: 9,
      title: "this is the first data for this test app  as long as we are here",
      description:
        "this is the description for this test data or apps as long as we are here",
      image: "/jobPlaceholder.jpg",
      date: "Jun 4, 2021",
    },
    {
      id: 10,
      title: "this is the first data for this test app  as long as we are here",
      description:
        "this is the description for this test data or apps as long as we are here",
      image: "/advertise.jpg",
      date: "Jun 4, 2021",
    },
    {
      id: 11,
      title: "this is the first data for this test app  as long as we are here",
      description:
        "this is the description for this test data or apps as long as we are here",
      image: "/jobPlaceholder.jpg",
      date: "Jun 4, 2021",
    },
    {
      id: 12,
      title: "this is the first data for this test app  as long as we are here",
      description:
        "this is the description for this test data or apps as long as we are here",
      image: "/advertise.jpg",
      date: "Jun 4, 2021",
    },
  ];


const NewsDetail = () => {
    return (
        <>
      <Sidebar />
      <Mostview datas={data} link="news" />

      {/* # 2ND HEADER */}
      <Grid container className={style.secondContainer} >
        <Grid items lg={8} md={12} sm={12} xs={12} className={style.secondGrid} >
          <Detail datas={data[0]} header="Jobs Update" />
        </Grid>
        <Grid items lg={4} md={12} sm={12} xs={12} className={style.secondGrid} >
          <SideviewOne datas={data.slice(0, 4)} header="Entertianment" />
        </Grid>
      </Grid>
      {/* END OF 2ND HEADER */}
      <SliderFramework/>

      {/* END OF 3RD HEADER */}

      {/* Footer */}
      <Footer />
        </>
    )
}

export default NewsDetail