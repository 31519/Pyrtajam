import { useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import style from "../../styles/Home.module.css";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
// COMPONENTS IMPORT
import Mostview from "../components/mostview/Mostview";
import MetaScreen from "../components/metatags/MetaScreen";
import Sidebar from "../components/sidebar/Sidebar";
import MainviewOne from "../components/mainview/MainviewOne";
import MainviewTwo from "../components/mainviewtwo/MainviewTwo";
import SideviewOne from "../components/sideviewone/SideviewOne";
import SideviewTwo from "../components/sideviewtwo/SideviewTwo";
import SliderFramework from "../components/sliderframework/SliderFramework";
import Footer from "../components/footer/Footer";
import StaticCategory from "../components/staticCategory/StaticCategory";

// GRAPHQL IMPORT

import { GET_CHARACTERS } from "../../graphql/queries";

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
    title:
      "this is the first data for this test app  as long as we are here this is the first data for this test app  as long as we are h",
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

export default function Home() {

  const {
    loading: charactersLoading,
    error: charactersError,
    data: charactersData,
  } = useQuery(GET_CHARACTERS, {
    variables: {
      "name": "Rick",
      "status":"Alive"
    }
  });
  const router = useRouter();
  const [characters, setCharacters] = useState([])


  useEffect(() => {
      if (charactersData) {
        setCharacters(charactersData.characters.results)
      }
  }, [charactersData]);




  return (
    <>
      <MetaScreen
        pageTitle="Pyrtajam -- Home Page"
        description="Best one platform for news, Jobs, educations, notifications in India "
        previewImage="/Pyrtajam.png"
        siteName="www.pyrtajam.com"
        currentURL={router.asPath}
        twitterHandle="Pyrtajam"
      />
      <Sidebar />

      <Mostview datas={characters} loading={charactersLoading} error={charactersError} link="news" />
      <StaticCategory />
      {/* # 1ST HEADER */}
      {/* <Grid container className={style.mainContainer}>
        <Grid className={style.grid} items lg={6} md={12} sm={12} xs={12}>
          <MainviewOne datas={data} header="New Update" />
        </Grid>
        <Grid className={style.grid} items lg={3} md={12} sm={12} xs={12}>
          <SideviewOne datas={data.slice(0, 3)} header="Jobs" />
        </Grid>
        <Grid className={style.grid} items lg={3} md={12} sm={12} xs={12}>
          <SideviewTwo datas={data.slice(0, 6)} header="Entertianment" />
        </Grid>
      </Grid> */}
      {/* END OF 1ST HEADER */}

      {/* # 2ND HEADER */}
      {/* <Grid container className={style.secondContainer}>
        <Grid items lg={8} md={12} sm={12} xs={12} className={style.secondGrid}>
          <MainviewTwo datas={data.slice(0, 4)} header="Jobs Update" />
        </Grid>
        <Grid items lg={4} md={12} sm={12} xs={12} className={style.secondGrid}>
          <SideviewTwo datas={data.slice(0, 4)} header="Entertianment" />
        </Grid>
      </Grid> */}
      {/* END OF 2ND HEADER */}

      {/* # 3RD HEADER (slider) */}

      <SliderFramework />

      {/* END OF 3RD HEADER */}

      {/* Footer */}
      <Footer />
    </>
  );
}
