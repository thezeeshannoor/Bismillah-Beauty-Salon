import styles from "./HeroSlider.module.css";

import slider1 from "../../assets/Bismillah-Beauty-Salon-Slider1.webp";
import slider2 from "../../assets/bismillah-beauty-salon-slider2.webp";
import slider3 from "../../assets/bismillah-beauty-salon-slider3.png";
import { Link } from "react-router-dom";
import FadeLeft from "../fadeLeft/FadeLeft";

const HeroSlider = ({ display, link, txt }) => {
  return (
    <>
      <div className={`${styles.heroPosition}`}>
        <div
          id="carouselExampleIndicators"
          className={`carousel slide `}
          data-bs-ride={`carousel${display}`}
        >
          <div className={`carousel-indicators ${display}`}>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className={`carousel-inner ${styles.sliderHeight} `}>
            <div className="carousel-item active">
              <img
                src={slider1}
                className={`d-block w-100 ${styles.sliderImg}`}
                alt="..."
              />

              <div className={`d-md-block ${styles.sliderCaption}`}>
                <FadeLeft>
                  <h1 className={`herr pink ${styles.headTxt}`}>
                    premier esthetics
                  </h1>
                  <h1 className={`${styles.whiteTxt}`}>Services</h1>
                  <p className="mt-5 text-white d-none d-md-block">
                    At Premier Esthetics, we provide treatments to improve your
                    skin's natural beauty and address specific concerns for the
                    best possible results.
                  </p>
                  <Link to={`${link}`}>
                    <button className={` mt-3 mt-md-0 ${styles.sliderBtn}`}>
                      {txt}
                    </button>
                  </Link>
                </FadeLeft>
              </div>
            </div>

            <div className={`carousel-item ${display}`}>
              <img
                src={slider2}
                className={`d-block w-100 ${styles.sliderImg}`}
                alt="..."
              />
              <div className={`d-md-block ${styles.sliderCaption}`}>
                <h1 className={`herr pink ${styles.headTxt}`}>
                  get your stylish
                </h1>
                <h1 className={`${styles.whiteTxt} `}>Look</h1>
                <h1
                  className={`${styles.whiteTxt}  pt-2 pt-sm-4 py-md-4  py-xlg-5 `}
                >
                  Today
                </h1>
                <p className=" text-white d-none d-md-block ">
                  Make your hairstyle an important part for the expression of
                  your identity! Our licensed hair dressers will make sure you
                  get the exact style you want!
                </p>
                <Link to={`${link}`}>
                  <button className={` mt-3 mt-md-0 ${styles.sliderBtn}`}>
                    {txt}
                  </button>
                </Link>
              </div>
            </div>
            <div className={`carousel-item ${display}`}>
              <img
                src={slider3}
                className={`d-block w-100 ${styles.sliderImg}`}
                alt="..."
              />
              <div className={`d-md-block ${styles.sliderCaption}`}>
                <h1 className={`herr pink ${styles.headTxt}`}>
                  ultimate experience
                </h1>
                <h1 className={`${styles.whiteTxt}`}>In hair</h1>
                <h1
                  className={`${styles.whiteTxt}  pt-2 pt-sm-4 py-md-4  py-xlg-5 `}
                >
                  Care
                </h1>
                <p className="mt-5 mt-sm-3 text-white d-none d-md-block">
                  At Premier Esthetics, we provide treatments to improve your
                  skin's natural beauty and address specific concerns for the
                  best possible results.
                </p>
                <Link to={`${link}`}>
                  <button className={` mt-3 mt-md-0 ${styles.sliderBtn}`}>
                    {txt}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <button
            className={`carousel-control-prev ${styles.arrowBtns} ${display}`}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className={`carousel-control-next ${styles.arrowBtns} ${display}`}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
