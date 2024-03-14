import RevealScroll from "../RevealScroll/RevealScroll";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const SpecialCard = ({ item }) => {
  return (
    <div className={`${styles.cardWidth} ${styles.specialWidth} `}>
      <RevealScroll axix={"y"} value={"100"}>
        <div
          className={`card  ${styles.cardHeight} ${styles.shadow} `}
          style={{
            border: "none",
            backgroundImage: `url(${item.img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <h5 className={`card-title herr pink ${styles.cardHead}`}>
              {item.styleHead}
            </h5>
            <h5 className={`card-title text-white ${styles.cardHeadSecond}`}>
              {item.plainHead}
            </h5>
            <p className="card-text text-center mt-3 text-white">{item.txt}</p>
            <Link
              to="/services"
              className={`${styles.cardBtn} text-decoration-none text-white `}
            >
              Learn More
            </Link>
          </div>
        </div>
      </RevealScroll>
    </div>
  );
};

export default SpecialCard;
