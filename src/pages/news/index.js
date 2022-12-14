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

const News = () => {
  const router = useRouter();
  const [pa, setPa] = useState("");

  const [feeds, setFeeds] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [categories, setCategories] = useState("");
  const [totalPost, setTotalPost] = useState("");

  const { q: query, category: cat, page } = router.query;

  console.log("query", cat);
  // setPa(page);
  // pa = parseInt(pa);

  // Feeds
  const {
    loading: feedsLoading,
    error: feedsError,
    data: feedsData,
    refetch: feedsRefetch,
  } = useQuery(GET_FEEDS, {
    variables: {
      title: `${keyword}`,
      category: `${cat}`,
    },
  });

  // Jobs
  const {
    loading: jobsLoading,
    error: jobsError,
    data: jobsData,
    refetch: jobsRefetch,
  } = useQuery(GET_FEEDS, {
    variables: {
      title: "",
      category:"Jobs"
    },
  });

  console.log("jog", feedsData);

  useEffect(() => {
    if (feedsData) {
      setFeeds(feedsData.posts.nodes);
      setTotalPost(feedsData.posts.pageInfo.offsetPagination.total);
    }
    // feedsRefetch();
  }, [feedsData, page, categories, keyword, router, query, feedsRefetch]);

  // Jobs useEffect
  useEffect(() => {
    if (jobsData) {
      setJobs(jobsData.posts.nodes);
    }
    jobsRefetch();
  }, [keyword, router, jobsRefetch, jobsData]);

  // KEYWORD PAGINATION
  useEffect(() => {
    if (query) {
      setKeyword(query);
    } else {
      setKeyword("");
    }
    setCategories(cat);
    // setPa(page);
    // pa = parseInt(pa);
    // feedsRefetch()
    console.log("query", query);
  }, [query, router, cat]);

  return (
    <>
      <MetaScreen
        pageTitle="Pyrtajam -- Recent News"
        description="Best one platform for news, Jobs, educations, notifications in India "
        previewImage="/Pyrtajam.png"
        siteName="www.pyrtajam.com"
        currentURL="/aboutus"
        twitterHandle="Pyrtajam"
      />
      <Sidebar />
      <Mostview />

      {/* # 2ND HEADER */}
      <Grid container className={style.secondContainer}>
        <Grid items lg={8} md={12} sm={12} xs={12} className={style.secondGrid}>
          <PageNews
            datas={feeds}
            total={totalPost}
            loading={feedsLoading}
            error={feedsError}
            header="Recent Updates"
            link="news"
          />
        </Grid>
        <Grid items lg={4} md={12} sm={12} xs={12} className={style.secondGrid}>
          <SideviewOne datas={jobs} header="Recent Jobs" link="news" />
        </Grid>
      </Grid>
      {/* END OF 2ND HEADER */}
      {/* # 3RD HEADER (slider) */}

      <SliderFramework  />

      {/* END OF 3RD HEADER */}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default News;
