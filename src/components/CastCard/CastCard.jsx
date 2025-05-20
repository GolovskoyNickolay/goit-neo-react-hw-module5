import Poster from "../Poster/Poster";
import css from "./CastCard.module.css";

export default function CastCard({ cast }) {
  return (
    <div className={css.card}>
      <div className={css.poster}>
        <Poster poster_path={cast.profile_path} title={cast.original_name} />
      </div>
      <h3 className={css.title}>{cast.name}</h3>
      <p className={css["card-subtitle"]}>Character: {cast.character}</p>
    </div>
  );
}
