import css from "./Loader.module.css";
import { RingLoader } from "react-spinners";

export default function Loader({ visible }) {
  return (
    // <>{visible && <p>Loading</p>}</>
    <RingLoader color="#123456" loading={visible} className={css.loader} />
  );
}
