import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={location}
            className={css.link}
          >
            <MovieCard movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
