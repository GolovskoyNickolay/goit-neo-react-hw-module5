import Poster from "../Poster/Poster";
import css from "./ReviewCard.module.css";

export default function ReviewCard({ review }) {
  return (
    <div className={css.card}>
      <div>
        <div className={css.avatar}>
          <Poster poster_path={review.author_details.avatar_path} />
        </div>
        <div className={css["right-column"]}>
          <h3 className={css.title}>{review.author}</h3>
          <p className={css.date}>Posted: {review.created_at}</p>
        </div>
      </div>
      <p className={css.content}>{review.content}</p>
    </div>
  );
}
