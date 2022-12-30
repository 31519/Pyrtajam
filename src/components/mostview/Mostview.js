import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./Mostview.module.css";
import { useQuery } from "@apollo/client";

import MostViewSkeleton from "../skeleton/MostViewSkeleton";

import {
  GET_FEEDS,

  GET_FEATURED_FEEDS,
  GET_FEATURED_JOBS,
  GET_FEATURED_EDUCATIONS,
} from "../../../graphql/queries";

const Mostview = () => {
  const [feeds, setFeeds] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [educations, setEducations] = useState([]);
  const [allData, setAllData] = useState([]);

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
  }, [feedsData, feedsRefetch]);

  // Jobs useEffect
  useEffect(() => {
    if (jobsData) {
      setJobs(jobsData.posts.nodes);
    }
    jobsRefetch();
  }, []);

  // Educations useEffect
  useEffect(() => {
    if (educationsData) {
      setEducations(educationsData.posts.nodes);
    }
    educationsRefetch();
  }, []);

  useEffect(() => {
    setAllData([...jobs, ...feeds]);
    console.log("all ", allData);
  }, []);

  return (
    <>
      <div className={style.container}>
        {jobsLoading && <MostViewSkeleton />}
        {jobsLoading && <MostViewSkeleton />}
        {jobs &&
          jobs.map((data) => (
            <>
              <Link href={`/news/${data.id}`}>
                <div key={data.id} className={style.contentDiv}>
                  <div className={style.imageDiv}>
                    {data.featuredImage?.node?.sourceUrl && (
                      <Image
                        layout="fill"
                        className={style.image}
                        src={data.featuredImage.node.sourceUrl}
                        alt=""
                      />
                    )}
                  </div>
                  <div className={style.textDiv}>
                    <h2 className={style.textTitle}>
                      {/* {data.title.slice(0, 49)}... */}
                      {data.title.slice(0, 20)}...
                    </h2>
                  </div>
                </div>
              </Link>
            </>
          ))}
        {feeds &&
          feeds.map((data) => (
            <>
              <Link href={`/news/${data.id}`}>
                <div key={data.id} className={style.contentDiv}>
                  <div className={style.imageDiv}>
                    {data.featuredImage?.node?.sourceUrl && (
                      <Image
                        layout="fill"
                        className={style.image}
                        src={data.featuredImage.node.sourceUrl}
                        alt=""
                      />
                    )}
                  </div>
                  <div className={style.textDiv}>
                    <h2 className={style.textTitle}>
                      {/* {data.title.slice(0, 49)}... */}
                      {data.title.slice(0, 20)}...
                    </h2>
                  </div>
                </div>
              </Link>
            </>
          ))}
        {educations &&
          educations.map((data) => (
            <>
              <Link href={`/news/${data.id}`}>
                <div key={data.id} className={style.contentDiv}>
                  <div className={style.imageDiv}>
                    {data.featuredImage?.node?.sourceUrl && (
                      <Image
                        layout="fill"
                        className={style.image}
                        src={data.featuredImage.node.sourceUrl}
                        alt=""
                      />
                    )}
                  </div>
                  <div className={style.textDiv}>
                    <h2 className={style.textTitle}>
                      {/* {data.title.slice(0, 49)}... */}
                      {data.title.slice(0, 20)}...
                    </h2>
                  </div>
                </div>
              </Link>
            </>
          ))}
      </div>
    </>
  );
};

export default Mostview;
