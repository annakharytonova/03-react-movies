import axios from "axios";

import type { Movie } from "../types/movie";

interface MoviesParam {
  results: Movie[];
}

async function fetchMovies(query: string): Promise<Movie[]> {
  const url = "https://api.themoviedb.org/3/search/movie";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
    params: {
      query: query,
    },
  };
  const response = await axios.get<MoviesParam>(url, options);
  return response.data.results;
}

export default fetchMovies;
