import React, {useState, useEffect} from "react";
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

import {
  GET_FEED,
  GET_FEEDS,
  GET_EDUCATIONS,
} from "../../../graphql/queries";



const NewsDetail = () => {
  const router = useRouter()
  // console.log("router",router.query.slug)
  const {slug} = router.query
  const [feed, setFeed] = useState([]);
  const [educations, setEducations] = useState([]);
  const [jobs, setJobs] = useState([]);


  // Feeds
  const {
    loading: feedLoading,
    error: feedError,
    data: feedData,
    refetch: feedRefetch,
  } = useQuery(GET_FEED, {
    variables: {
      id: `${slug}`,
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
      category:"Jobs"
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
      category:"News"
    },
  });



  // Feeds useEffect
  useEffect(() => {
    if (feedData) {
      setFeed(feedData.post);
    }
    console.log("feeds", feedData);
  }, [router,slug, feedData]);

  // Jobs useEffect
  useEffect(() => {
    if (jobsData) {
      setJobs(jobsData.posts.nodes);
    }
    // console.log("jobs", jobs);
  }, [router, jobsData]);

  // Education useEffect
  useEffect(() => {
    if (educationsData) {
      setEducations(educationsData.posts.nodes);
    }
    // console.log("educations", educations);
  }, [router, educationsData]);



  return (
    <>
      <MetaScreen
        pageTitle="Pyrtajam -- Detail News"
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
          <Detail datas={feed} loading={feedLoading} header="New Detail" />
        </Grid>
        <Grid items lg={4} md={12} sm={12} xs={12} className={style.secondGrid}>
          <SideviewOne datas={jobs && jobs.slice(0, 6)} header="Jobs" link="news" />
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

export default NewsDetail;
