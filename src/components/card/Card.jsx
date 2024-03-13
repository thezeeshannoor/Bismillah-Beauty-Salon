import RevealScroll from "../RevealScroll/RevealScroll";

import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className={` ${styles.cardHeight} ${styles.cardWidth}`}>
      <RevealScroll axix={"y"} value={"100"}>
        <div
          className={`card   ${styles.shadow}   `}
          style={{ border: "none" }}
        >
          <img
            className={`card-img-top w-100 ${styles.cardImgHeight} ${styles.cardWidth} ${styles.shadow}`}
            src={item.img}
            alt="Card image cap"
          />
          <div className="card-body d-flex flex-column align-items-center">
            <h5 className={`card-title herr pink ${styles.cardHead}`}>
              {item.styleHead}
            </h5>
            <h5 className={`card-title purple ${styles.cardHeadSecond}`}>
              {item.plainHead}
            </h5>
            <p className={`card-text text-center mt-3 gray`}>{item.txt}</p>
            <Link
              to="/contact"
              className={`${styles.cardBtn} text-decoration-none text-white`}
            >
              Learn More
            </Link>
          </div>
        </div>
      </RevealScroll>
    </div>
  );
};

export default Card;
