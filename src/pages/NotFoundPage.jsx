import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h1>Page was not found</h1>
      <Link to="/">Go home</Link>
    </>
  );
}
