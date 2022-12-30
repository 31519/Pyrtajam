import React, { useEffect, useState } from "react";
import SliderComponent from "../slidercomponent/SliderComponent";
import style from "./SliderFramework.module.css";
import { useRouter } from "next/router";


import { useQuery } from "@apollo/client";

import {
  GET_FEEDS,
} from "../../../graphql/queries";

function SliderFramework() {
  const router = useRouter();

  const [feeds, setFeeds] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [educations, setEducations] = useState([]);

  // Feeds
  const {
    loading: feedsLoading,
    error: feedsError,
    data: feedsData,
    refetch: feedsRefetch,
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
    refetch: jobsRefetch,
  } = useQuery(GET_FEEDS, {
    variables: {
      title: "",
      category: "Jobs"
    },
  });

  // Educatons
  const {
    loading: educationsLoading,
    error: educationsError,
    data: educationsData,
    refetch: educationsRefetch,
  } = useQuery(GET_FEEDS, {
    variables: {
      title: "",
      category: "Educations"
    },
  });

  useEffect(() => {
    if (feedsData) {
      setFeeds(feedsData.posts.nodes);
    }
    feedsRefetch();
  }, [feedsRefetch, router]);

  // Jobs useEffect
  useEffect(() => {
    if (jobsData) {
      setJobs(jobsData.posts.nodes);
    }
    jobsRefetch();
  }, [jobsRefetch, router]);

  // Educations useEffect
  useEffect(() => {
    if (educationsData) {
      setEducations(educationsData.posts.nodes);
    }
    educationsRefetch();
  }, [educationsRefetch,router ]);

  return (
    <div className={style.sliderContainer}>
      <div className={style.sliderContent}>
        <SliderComponent datas={jobs && jobs.slice(0, 6)} header="Jobs" link="news" />
      </div>
      <div className={style.sliderContent}>
        <SliderComponent datas={feeds && feeds.slice(0, 6)} header="News" link="news" />
      </div>
      <div className={style.sliderContent}>
        <SliderComponent datas={educations && educations.slice(0, 6)} header="Educations" link="news" />
      </div>

    </div>
  );
}

export default SliderFramework;
