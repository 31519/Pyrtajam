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

// import { GET_CHARACTERS, GET_ARTICLE } from "../../graphql/queries";
import {
  GET_PROPERTIES,
  GET_FEEDS,
  GET_JOBS,
  GET_EDUCATIONS,
} from "../../graphql/queries";

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
  const [properties, setProperties] = useState([]);
  const [feeds, setFeeds] = useState([]);
  const [educations, setEducations] = useState([]);
  const [jobs, setJobs] = useState([]);

  // Properties
  const {
    loading: PropertyLoading,
    error: PropertyError,
    data: PropertyData,
  } = useQuery(GET_PROPERTIES, {
    variables: {
      price: "",
      title: "",
    },
  });

  // Feeds
  const {
    loading: feedsLoading,
    error: feedsError,
    data: feedsData,
  } = useQuery(GET_FEEDS, {
    variables: {
      title: "",
      category: "News"
    },
  });

  // Jobs
  const {
    loading: jobsLoading,
    error: jobsError,
    data: jobsData,
  } = useQuery(GET_FEEDS, {
    variables: {
      title: "",
      category: "Jobs"
    },
  });

  // educations
  const {
    loading: educationsLoading,
    error: educationsError,
    data: educationsData,
  } = useQuery(GET_FEEDS, {
    variables: {
      title: "",
      category: "Educations"
    },
  });

  console.log("feedssss", feedsData);

  const router = useRouter();
  const [characters, setCharacters] = useState([]);

  // Property useEffect
  useEffect(() => {
    if (PropertyData) {
      setProperties(PropertyData.properties.nodes);
    }
    console.log("data", properties);
  }, [PropertyData, router]);

  // Feeds useEffect
  useEffect(() => {
    if (feedsData) {
      setFeeds(feedsData.posts.nodes);
    }
    console.log("feeds", feeds);
  }, [router, feedsData]);

  // Jobs useEffect
  useEffect(() => {
    if (jobsData) {
      setJobs(jobsData.posts.nodes);
    }
    console.log("jobs", jobs);
  }, [router, jobsData]);

  // Education useEffect
  useEffect(() => {
    if (educationsData) {
      setEducations(educationsData.posts.nodes);
    }
    console.log("educations", educations);
  }, [router, educationsData]);

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

      <Mostview
        datas={properties}
        loading={PropertyLoading}
        error={PropertyError}
        link="news"
      />
      <StaticCategory />
      {/* # 1ST HEADER */}
      <Grid container className={style.mainContainer}>
        <Grid className={style.grid} items lg={6} md={12} sm={12} xs={12}>
          <MainviewOne datas={feeds && feeds.slice(0,4)} header="News" link="news" />
        </Grid>
        <Grid className={style.grid} items lg={3} md={12} sm={12} xs={12}>
          <SideviewOne datas={feeds && feeds.slice(0, 6)} header="News"  link="news" />
        </Grid>
        <Grid className={style.grid} items lg={3} md={12} sm={12} xs={12}>
          <SideviewTwo datas={jobs && jobs.slice(0, 6)} header="Entertianment" link="news" />
        </Grid>
      </Grid>
      {/* END OF 1ST HEADER */}

      {/* # 2ND HEADER */}
      <Grid container className={style.secondContainer}>
        <Grid items lg={8} md={12} sm={12} xs={12} className={style.secondGrid}>
          <MainviewTwo datas={jobs && jobs.slice(0, 4)} header="Jobs Update" link="news"/>
        </Grid>
        <Grid items lg={4} md={12} sm={12} xs={12} className={style.secondGrid}>
          <SideviewTwo datas={educations && educations.slice(0, 4)} header="Educations" link="news" />
        </Grid>
      </Grid>
      {/* END OF 2ND HEADER */}

      {/* # 3RD HEADER (slider) */}

      <SliderFramework />


      {/* END OF 3RD HEADER */}

      {/* Footer */}
      <Footer />
    </>
  );
}
