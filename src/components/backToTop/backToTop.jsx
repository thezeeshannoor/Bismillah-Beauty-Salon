import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import styles from "./backToTop.module.css";

const ScrollTo50Percent = () => {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = window.innerHeight;
      const scrollPercentage = (scrollTop + windowHeight) / scrollHeight;

      if (scrollPercentage >= 0.5) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showDiv && (
        <div
          className={`${styles.backToTop} boxShadow`}
          onClick={handleScrollToTop}
        >
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};

export default ScrollTo50Percent;
