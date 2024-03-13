import styles from "./ServiceCard.module.css";
import { Link } from "react-router-dom";

const ServiceCard = ({ card }) => {
  return (
    <div className={`d-flex flex-column   ${styles.cardDiv} boxShadow`}>
      <img src={card.img} alt="" className={`${styles.img}`} />

      <div className=" d-flex flex-column align-items-center mt-4 ">
        <h1 className={`${styles.headTxt}`}>{card.headTxt}</h1>
        <hr className={`${styles.hr}  `} />
        <Link to="/contact">
          <button className={`${styles.serviceBtn} mb-4`}>
            Book Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
