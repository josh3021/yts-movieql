import fetch from "node-fetch";

const API_URL = "https://yts.lt/api/v2/list_movies.json?";
const DETAIL_API_URL = "https://yts.lt/api/v2/movie_details.json";
const SUGGESTIONS_API_URL = "https://yts.lt/api/v2/movie_suggestions.json";

export const getMovies = ({
    limit,
    minRating
  }) => fetch(structURL({
    limit,
    minRating
  }))
  .then(data => data.json())
  .then(json => json.data.movies)

export const getMovie = ({
    id
  }) => fetch(`${DETAIL_API_URL}?movie_id=${id}`)
  .then(data => data.json())
  .then(json => json.data.movie)

export const movieSuggestions = ({
    id
  }) => fetch(`${SUGGESTIONS_API_URL}?movie_id=${id}`)
  .then(data => data.json())
  .then(json => json.data.movies)

const structURL = ({
  limit,
  minRating
}) => {
  let NEW_API_URL = API_URL;
  if (limit > 0) NEW_API_URL += `limit=${limit}`;
  if (minRating > 0) NEW_API_URL += `&minimum_rating=${minRating}`;

  return NEW_API_URL;
};