import Poster from "../Poster/Poster";
import css from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  return (
    <div className={css.card}>
      <div className={css.poster}>
        <Poster poster_path={movie.poster_path} title={movie.title} />
      </div>
      <p>{movie.title}</p>
      <p className={css["card-subtitle"]}>{movie.release_date}</p>
    </div>
  );
}
