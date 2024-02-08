import { gql } from "../__generated__";

const GET_CHARACTERS = gql(`
query getCharacters {
  characters {
    results {
      gender
      id
      image
      name
      species
      status
    }
  }
} 
`);

const GET_CHARACTER_DETAILS = gql(`
    query characterDetails($id: ID!){
    character(id: $id){
        id
        name
        status
        species
        type
        gender
        origin{
            id
            name
            type
            dimension
            created
        }
        location{
            id
            name
            type
            dimension
            created
        }
        image
        episode{
            id
            name
            air_date
            episode
            created
        }
    }
}
`);

const GET_EPISODES = gql(`
query getEpisodes {
  episodes {
    results {
      name
      air_date
      characters {
        id
        name
      }
    }
  }
}
`);

export { GET_CHARACTERS, GET_CHARACTER_DETAILS, GET_EPISODES };
