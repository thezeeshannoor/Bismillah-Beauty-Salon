import styles from "./GalleryImg.module.css";
import RevealScroll from "../RevealScroll/RevealScroll";

const GalleryImg = ({ image }) => {
  return (
    <RevealScroll axix={"y"} value={"100"}>
      <div>
        <img src={image} alt="" className={`boxShadow ${styles.img}`} />
      </div>
    </RevealScroll>
  );
};

export default GalleryImg;
