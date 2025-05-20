import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjFiZDEzZjk3YTUxMGM3YWEwYzk5NzViOWRkOWZmOSIsIm5iZiI6MTc0MTU1NTI2MC4xMDgsInN1YiI6IjY3Y2UwNjNjNzVjOWYxYmQxMmUyZTgxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SB_M0a2SJrIdwjhBJrlQpKm56ljqFKuVehUTmxSdXsY",
  },
  // params: {
  //   language: "uk-UK",
  // },
});

export async function getTrendingMovies() {
  const response = await instance.get("trending/movie/day");
  return response.data;
}

export async function getMovieDetails(id) {
  const response = await instance.get(`movie/${id}`);
  return response.data;
}

export async function getReviews(id) {
  const response = await instance.get(`movie/${id}/reviews`);
  return response.data.results;
}

export async function getCast(id) {
  const response = await instance.get(`movie/${id}/credits`);
  return response.data.cast;
}

export async function getMoviesByQuery(query) {
  const response = await instance.get(`search/movie`, { params: { query } });
  return response.data.results;
}
