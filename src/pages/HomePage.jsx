import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../api/tmbd";
import MovieList from "../components/MovieList/MovieList";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Loader from "../components/Loader/Loader";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
    async function getMovies() {
      setError("");
      setIsLoading(true);
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        const errorMessage = error.toString();
        setError(errorMessage);
      }

      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending movie</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
      {error && <ErrorMessage message={error} />}
      <Loader visible={isLoading} />
    </>
  );
}
