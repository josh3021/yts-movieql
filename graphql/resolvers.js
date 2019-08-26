import {
  getMovies
} from "./db";

const resolvers = {
  Query: {
    movies: (_, {
      limit,
      minRating
    }) => getMovies({
      limit,
      minRating
    })
  }
}

export default resolvers;