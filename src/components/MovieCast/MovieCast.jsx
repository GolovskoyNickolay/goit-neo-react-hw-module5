import { useParams } from "react-router-dom";
import { getCast } from "../../api/tmbd";
import { useEffect, useState } from "react";
import CastCard from "../CastCard/CastCard";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovie();

    async function getMovie() {
      const data = await getCast(id);
      setCast(data);
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) return <p>Loading Reviews</p>;
  if (cast.length === 0) return <>There is not any review</>;

  return (
    <ul className={css.list}>
      {cast.map((review) => (
        <li key={review.id}>
          <CastCard cast={review} />
        </li>
      ))}
    </ul>
  );
}
