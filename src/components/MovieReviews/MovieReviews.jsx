import { useParams } from "react-router-dom";
import { getReviews } from "../../api/tmbd";
import { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovie();

    async function getMovie() {
      const data = await getReviews(id);

      setReviews(data);
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) return <p>Loading Reviews</p>;
  if (reviews.length === 0) return <>There is not any review</>;

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id} className={css.item}>
          <ReviewCard review={review} />
        </li>
      ))}
    </ul>
  );
}
