import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import style from "../../../styles/detail.module.css";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
// COMPONENTS IMPORT

// COMPONENTS IMPORT
import Mostview from "../../components/mostview/Mostview";
import Sidebar from "../../components/sidebar/Sidebar";
import SliderFramework from "../../components/sliderframework/SliderFramework";
import Footer from "../../components/footer/Footer";
import PageNews from "../../components/pagenews/PageNews";
import SideviewOne from "../../components/sideviewone/SideviewOne";
import Detail from "../../components/detailpage/Detail";
import MetaScreen from "../../components/metatags/MetaScreen";

import { GET_FEEDS, GET_JOB, GET_EDUCATIONS } from "../../../graphql/queries";

const JobsDetail = () => {
  const router = useRouter()
  const { slug } = router.query;
  const [feeds, setFeeds] = useState([]);
  const [educations, setEducations] = useState([]);
  const [job, setJob] = useState([]);

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
    loading: jobLoading,
    error: jobError,
    data: jobData,
  } = useQuery(GET_JOB, {
    variables: {
      id: `${slug}`,
    },
  });

  // educations
  const {
    loading: educationsLoading,
    error: educationsError,
    data: educationsData,
  } = useQuery(GET_EDUCATIONS, {
    variables: {
      title: "",
    },
  });

  // Feeds useEffect
  useEffect(() => {
    if (feedsData) {
      setFeeds(feedsData.feeds.nodes);
    }
    // console.log("feeds", feed);
  }, [router, feedsData]);

  // Jobs useEffect
  useEffect(() => {
    if (jobData) {
      setJob(jobData.job);
    }
    // console.log("jobs", jobs);
  }, [router, slug, jobData]);

  // Education useEffect
  useEffect(() => {
    if (educationsData) {
      setEducations(educationsData.educations.nodes);
    }
    // console.log("educations", educations);
  }, [router, educationsData]);

  return (
    <>
      <MetaScreen
        pageTitle="Pyrtajam -- Detail Jobs"
        description="Best one platform for news, Jobs, educations, notifications in India "
        previewImage="/Pyrtajam.png"
        siteName="www.pyrtajam.com"
        currentURL="/aboutus"
        twitterHandle="Pyrtajam"
      />
      <Sidebar />
      <Mostview  />

      {/* # 2ND HEADER */}
      <Grid container className={style.secondContainer}>
        <Grid items lg={8} md={12} sm={12} xs={12} className={style.secondGrid}>
          <Detail datas={job} loading={jobLoading} header="Jobs Detail" />
        </Grid>
        <Grid items lg={4} md={12} sm={12} xs={12} className={style.secondGrid}>
          <SideviewOne
            datas={feeds && feeds.slice(0, 4)}
            header="Recent News"
            link="news"
          />
        </Grid>
      </Grid>
      {/* END OF 2ND HEADER */}
      <SliderFramework />

      {/* END OF 3RD HEADER */}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default JobsDetail;
