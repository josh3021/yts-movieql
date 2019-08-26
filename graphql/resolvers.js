import {
  getMovies,
  getMovie,
  movieSuggestions
} from "./db";

const resolvers = {
  Query: {
    movies: (_, {
      limit,
      minRating
    }) => getMovies({
      limit,
      minRating
    }),
    movie: (_, {
      id
    }) => getMovie({
      id
    }),
    movieSuggestions: (_, {
      id
    }) => movieSuggestions({
      id
    }),
  }
}

export default resolvers;