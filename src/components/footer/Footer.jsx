import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={`p-5  ${styles.footerBg}`}>
      <div className="">
        <Link className={`navbar-brand ${styles.logo} text-white`} to="/">
          Bismillah <span className="pink">Beauty</span> Salon
        </Link>
        <hr className={`${styles.hrColor}`} />
        <div className="d-flex justify-content-between">
          <p className="text-white">Copyright ©. All rights reserved</p>
          <div className="d-flex gap-2 align-items-center">
            <a href="/">
              <FaFacebookF className={`${styles.icons}`} />
            </a>
            <a href="/">
              <FaInstagram className={`${styles.icons}`} />
            </a>
            <a href="/">
              <FaYoutube className={`${styles.icons}`} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
