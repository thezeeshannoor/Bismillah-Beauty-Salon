import RevealScroll from "../RevealScroll/RevealScroll";
import styles from "./Booking.module.css";
import { Link } from "react-router-dom";

const Booking = ({ data }) => {
  return (
    <div className={`${styles.mainDiv}`}>
      <img src={data.img} alt="" className={`${styles.heroBg}`} />
      <div
        className={`${styles.desc} w-100  d-flex text-center flex-column align-items-center mt-md-3
        } `}
      >
        <RevealScroll axix={"x"} value={"-100"}>
          <h1 className={`herr pink ${styles.styleHead}`}>{data.head}</h1>
          <h1 className={` ${styles.plainHead} `}>{data.txt}</h1>
          <div className="d-flex justify-content-center w-100">
            <p className="text-white col-8 d-none d-lg-block ">{data.desc}</p>
          </div>
          <Link to="/contact">
            <button className={`${styles.welBtn}`}>Make an Appointment</button>
          </Link>
        </RevealScroll>
      </div>
    </div>
  );
};

export default Booking;
