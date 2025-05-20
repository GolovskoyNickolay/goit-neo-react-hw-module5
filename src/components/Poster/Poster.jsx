import css from "./Poster.module.css";
import imageNoImage from "../../assets/noImage.svg";

// const imageNoImage =
//   "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg";

export default function Poster({ poster_path, title }) {
  const src = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : imageNoImage;
  return (
    <img
      src={src}
      alt={title}
      width="500"
      className={css.image}
      loading="lazy"
    />
  );
}
