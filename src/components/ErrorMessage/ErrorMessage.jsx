import css from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }) {
  return <p className={css["error-message"]}>{message}</p>;
}
