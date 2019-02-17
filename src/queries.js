import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    query {
        getApiMovies(limit: 50, rating: 7.5) {
            id
            title
            genres
            rating
        }
    }
`;