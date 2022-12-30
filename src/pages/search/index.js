import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import style from "../../../styles/news.module.css";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
// COMPONENTS IMPORT
import AllSearchComponent from "../../components/allSearchComponent/allSearchComponent";
import SideviewOne from "../../components/sideviewone/SideviewOne";
import Mostview from "../../components/mostview/Mostview";
import Sidebar from "../../components/sidebar/Sidebar";
import SliderFramework from "../../components/sliderframework/SliderFramework";
import Footer from "../../components/footer/Footer";
import MetaScreen from "../../components/metatags/MetaScreen";

import {
  GET_EDUCATIONS_SEARCH,
  GET_JOBS_SEARCH,
  GET_FEEDS_SEARCH,
} from "../../../graphql/queries";

const SearchPage = () => {
  const router = useRouter();
  const [feeds, setFeeds] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState("");

  const { q: query } = router.query;

  // Feeds
  const {
    loading: feedsLoading,
    error: feedsError,
    data: feedsData,
    refetch: feedsRefetch,
  } = useQuery(GET_FEEDS_SEARCH, {
    variables: {
      title: `${keyword}`,
    },
  });

  // Jobs
  const {
    loading: jobsLoading,
    error: jobsError,
    data: jobsData,
    refetch: jobsRefetch,
  } = useQuery(GET_JOBS_SEARCH, {
    variables: {
      title: `${keyword}`,
    },
  });

  useEffect(() => {
    if (feedsData) {
      setFeeds(feedsData.feeds.nodes);
    }
    feedsRefetch();
  }, [feedsData, query, router, feedsRefetch]);

  // Jobs useEffect
  useEffect(() => {
    if (jobsData) {
      setJobs(jobsData.jobs.nodes);
    }
    jobsRefetch();
  }, [router, query, jobsRefetch, jobsData]);

  // KEYWORD
  useEffect(() => {
    if (query) {
      setKeyword(query);
    } else {
      setKeyword("");
    }
  }, [query, router]);

  return (
    <div>
      <MetaScreen
        pageTitle="Pyrtajam -- Recent Search"
        description="Best one platform for news, Jobs, educations, notifications in India "
        previewImage="/Pyrtajam.png"
        siteName="www.pyrtajam.com"
        currentURL="/search"
        twitterHandle="Pyrtajam"
      />
      <Sidebar />
      <Mostview />

      {/* # 2ND HEADER */}
      <Grid container className={style.secondContainer}>
        <Grid items lg={8} md={12} sm={12} xs={12} className={style.secondGrid}>
          <AllSearchComponent
            datas={feeds}
            loading={feedsLoading}
            error={feedsError}
            header="Recent News"
            link="news"
          />
          <AllSearchComponent
            datas={jobs}
            loading={jobsLoading}
            error={jobsError}
            header="Recent News"
            link="jobs"
          />
        </Grid>
        <Grid items lg={4} md={12} sm={12} xs={12} className={style.secondGrid}>
          <SideviewOne datas={jobs} header="Recent Jobs" link="jobs" />
        </Grid>
      </Grid>
      {/* END OF 2ND HEADER */}

      <SliderFramework />

      {/* END OF 3RD HEADER */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SearchPage;
