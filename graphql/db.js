import fetch from "node-fetch";

const API_URL = "https://yts.lt/api/v2/list_movies.json?";

export const getMovies = ({
    limit,
    minRating
  }) => fetch(structURL({
    limit,
    minRating
  }))
  .then(data => data.json())
  .then(json => json.data.movies)

const structURL = ({
  limit,
  minRating
}) => {
  let NEW_API_URL = API_URL;
  console.log(`limit: ${limit}, minRating: ${minRating}`)
  if (limit > 0) NEW_API_URL += `limit=${limit}`;
  if (minRating > 0) NEW_API_URL += `&minimum_rating=${minRating}`;

  console.log(NEW_API_URL)
  return NEW_API_URL;
};