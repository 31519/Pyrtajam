import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

// properties
export const GET_PROPERTIES = gql`
  query GetProperty($title: String, $price: String) {
    properties(
      where: {
        title: $title
        metaQuery: {
          relation: AND
          metaArray: {
            key: "price"
            compare: GREATER_THAN_OR_EQUAL_TO
            value: $price
            type: NUMERIC
          }
        }
      }
    ) {
      pageInfo {
        offsetPagination {
          total
        }
      }
      nodes {
        databaseId
        date
        id
        title
        uri
        content
        featuredImage {
          node {
            sourceUrl
            title
          }
        }
        propertyFields {
          price
          haspet
          hasparking
          choice
        }
      }
    }
  }
`;

// Feeds
export const GET_FEEDS = gql`
  query GetFeeds($title: String, $category:String) {
    posts(where: {categoryName: $category, search: $title }){ 
      pageInfo {
        offsetPagination {
          total
        }
      }
      nodes {
        date
        id
        title
        uri
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
    }
  
`;

// jobs

export const GET_JOBS = gql`
  query GetJobs {
    jobs {
      pageInfo {
        offsetPagination {
          total
        }
      }
      nodes {
        date
        id
        title
        uri
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        Fields {
          category
          featured
          flag
          excert
        }
      }
    }
  }
`;

// education

export const GET_EDUCATIONS = gql`
  query GetEducations {
    educations {
      pageInfo {
        offsetPagination {
          total
        }
      }
      nodes {
        date
        id
        title
        uri
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        Fields {
          category
          featured
          flag
          excert
        }
      }
    }
  }
`;

// QUERIES WITH FEATURED

// Feeds
export const GET_FEATURED_FEEDS = gql`
  query GetFeeds {
    feeds(
      where: {
        metaQuery: {
          relation: AND
          metaArray: {
            value: "1"
            type: BINARY
            compare: EQUAL_TO
            key: "featured"
          }
        }
      }
    ) {
      nodes {
        date
        id
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        Fields {
          category
          featured
        }
      }
    }
  }
`;

// jobs

export const GET_FEATURED_JOBS = gql`
  query GetJobs {
    jobs(
      where: {
        metaQuery: {
          relation: AND
          metaArray: {
            value: "1"
            type: BINARY
            compare: EQUAL_TO
            key: "featured"
          }
        }
      }
    ) {
      nodes {
        date
        id
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        Fields {
          category
          featured
        }
      }
    }
  }
`;

// education

export const GET_FEATURED_EDUCATIONS = gql`
  query GetEducations {
    educations(
      where: {
        metaQuery: {
          relation: AND
          metaArray: {
            value: "1"
            type: BINARY
            compare: EQUAL_TO
            key: "featured"
          }
        }
      }
    ) {
      nodes {
        date
        id
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        Fields {
          category
          featured
        }
      }
    }
  }
`;
// END OF QUERIES WITH FEATURED

// START OF SINGLE QUERY
export const GET_FEED = gql`
  query GetFeed($id: ID!) {
    post(id: $id) {
      id
      slug
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

// Jobs
export const GET_JOB = gql`
  query GetFeed($id: ID!) {
    job(id: $id) {
      id
      slug
      title
      content
      date
      Fields {
        category
        featured
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;
// END OF SINGLE QUERY

// GET SEARCH DATa
// Feeds
export const GET_FEEDS_SEARCH = gql`
  query GetFeedSearch($title: String) {
    posts(where: { offsetPagination: { size: 5 }, search: $title }) {
      nodes {
        date
        id
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

// jobs

export const GET_JOBS_SEARCH = gql`
  query GetJobSearch($title: String) {
    posts(where: { offsetPagination: { size: 5 }, search: $title }) {
      pageInfo {
        offsetPagination {
          total
        }
      }
      nodes {
        date
        id
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        Fields {
          category
          featured
          flag
          excert
        }
      }
    }
  }
`;

// education

export const GET_EDUCATIONS_SEARCH = gql`
  query GetEducationSearch($title: String) {
    educations(where: { offsetPagination: { size: 5 }, search: $title }) {
      pageInfo {
        offsetPagination {
          total
        }
      }
      nodes {
        date
        id
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        Fields {
          category
          featured
          flag
          excert
        }
      }
    }
  }
`;
