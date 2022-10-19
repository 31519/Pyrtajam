import {gql} from "@apollo/client"
import { useQuery } from "@apollo/client";

export const GET_CHARACTERS = gql `
query GetCharacters ($name: String!, $status:String!) {
  characters(filter:{name:$name, status:$status} ) {
    info {
      count
    }
    results {
      name,
      image
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}
`

// export const useCharacters = () => {
//   const {loading, error, data} = useQuery(GET_CHARACTERS)

//   return {
//     loading,
//     error,
//     data
//   }
// }

const GET_CHARACTER = gql `
query  {
  character(id: "1") {
    name
  }
}
`
export const useCharacter = () => {
  const {loading, error, data} = useQuery(GET_CHARACTER)
  return {
    loading,
    error,
    data
  }
}

export const GET_POST = gql `
query {
  getPosts {
    title
  }
}

`