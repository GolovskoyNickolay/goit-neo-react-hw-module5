import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import css from "./BackLink.module.css";

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={css["btn-back"]}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};
