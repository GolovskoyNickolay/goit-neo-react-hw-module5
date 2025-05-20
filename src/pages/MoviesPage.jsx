import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { getMoviesByQuery } from "../api/tmbd";
import MovieList from "../components/MovieList/MovieList";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Loader from "../components/Loader/Loader";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => {
    return searchParams.get("query") || "";
  });

  useEffect(() => {
    if (!query) return;

    getMovies();
    async function getMovies() {
      setError("");
      setIsLoading(true);
      setMovies([]);

      try {
        const response = await getMoviesByQuery(query);
        setMovies(response);

        if (response.length === 0) throw new Error("No movies was found");
      } catch (error) {
        const errorMessage = error.toString();
        setError(errorMessage);
      }

      setIsLoading(false);
    }
  }, [query]);

  const onSubmit = (query) => {
    searchParams.set("query", query);
    setSearchParams(searchParams);
    setQuery(query);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} initialValue={query} />
      {error && <ErrorMessage message={error} />}
      {movies.length !== 0 && <MovieList movies={movies} />}
      <Loader visible={isLoading} />
    </>
  );
}
