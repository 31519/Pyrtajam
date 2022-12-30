import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import style from "../../../styles/news.module.css";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
// COMPONENTS IMPORT
import PageNews from "../../components/pagenews/PageNews";
import SideviewOne from "../../components/sideviewone/SideviewOne";
import Mostview from "../../components/mostview/Mostview";
import Sidebar from "../../components/sidebar/Sidebar";
import SliderFramework from "../../components/sliderframework/SliderFramework";
import Footer from "../../components/footer/Footer";
import MetaScreen from "../../components/metatags/MetaScreen";

import { GET_FEEDS, GET_JOBS } from "../../../graphql/queries";

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

const Jobs = () => {
  const router = useRouter();
  const [characters, setCharacters] = useState([]);
  const { category, keyword, page } = router.query;

  const [feeds, setFeeds] = useState([]);
  const [jobs, setJobs] = useState([]);
  // if(category) {
  //   setCat(category)
  // } else {
  //   setCat("")
  // }
  // console.log("category", category);
  // console.log("keyword", keyword);

  // Feeds
  const {
    loading: feedsLoading,
    error: feedsError,
    data: feedsData,
    refetch: feedsRefetch,
  } = useQuery(GET_FEEDS, {
    variables: {
      title: "",
    },
  });

  // Jobs
  const {
    loading: jobsLoading,
    error: jobsError,
    data: jobsData,
    refetch: jobsRefetch,
  } = useQuery(GET_JOBS, {
    variables: {
      title: "",
    },
  });

  useEffect(() => {
    if (feedsData) {
      setFeeds(feedsData.feeds.nodes);
    }
    feedsRefetch();
  }, [feedsData, category, keyword, router, feedsRefetch]);

  // Jobs useEffect
  useEffect(() => {
    if (jobsData) {
      setJobs(jobsData.jobs.nodes);
    }
    jobsRefetch();
  }, [category, keyword, router, jobsRefetch, jobsData]);

  return (
    <>
      <MetaScreen
        pageTitle="Pyrtajam -- Recent Jobs"
        description="Best one platform for news, Jobs, educations, notifications in India "
        previewImage="/Pyrtajam.png"
        siteName="www.pyrtajam.com"
        currentURL="/jobs"
        twitterHandle="Pyrtajam"
      />
      <Sidebar />
      <Mostview />

      {/* # 2ND HEADER */}
      <Grid container className={style.secondContainer}>
        <Grid items lg={8} md={12} sm={12} xs={12} className={style.secondGrid}>
          <PageNews
            datas={jobs}
            loading={jobsLoading}
            error={jobsError}
            header="Resent Jobs"
            link="jobs"
          />
        </Grid>
        <Grid items lg={4} md={12} sm={12} xs={12} className={style.secondGrid}>
          <SideviewOne datas={feeds} header="Recent News" link="news"/>
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
};

export default Jobs;
