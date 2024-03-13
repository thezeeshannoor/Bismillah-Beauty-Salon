import React, { useState } from "react";
import { useEffect } from "react";
import Booking from "../../components/booking/Booking";
import Welcome from "../../components/welcome/Welcome";
import img from "../../assets/bismillah-beauty-salon-slider3.png";
import img1 from "../../assets/bismillah-beauty-salon-about-us.jpg";
import femaleHairIcon from "../../assets/icons/female-hairs.png";
import mehndiIcon from "../../assets/icons/mehndi.png";
import makeupIcon from "../../assets/icons/hair-makeup.png";
import facialIcon from "../../assets/icons/facial-massage.png";

const About = () => {
  const data = {
    img: img,
    head: "About Us",
    txt: "bismillah beauty salon",
    desc: "Experience the essence of beauty at Bismillah Beauty Salon – where every visit is a journey to radiant confidence and timeless elegance.",
  };
  const info = {
    img: img1,
    styleTxt: "About Our",
    plainHead: "Beauty",
    plainHeadTwo: "Salon",
    desc: "Discover beauty redefined at our salon. From hair to makeup, massages to waxing, and facials, we're here to pamper you to perfection. Step in and step out feeling flawless.",
    icons: {
      waxing: {
        icon: femaleHairIcon,
        txt: "Waxing",
      },
      makeup: {
        icon: makeupIcon,
        txt: "Make-Up",
      },
      mehndi: {
        icon: mehndiIcon,
        txt: "Mehndi",
      },
      facial: {
        icon: facialIcon,
        txt: "Facial Massage",
      },
    },
  };
  const [icons, setIcons] = useState("");
  useEffect(() => {
    setIcons("icons");
  }, []);
  return (
    <div>
      <Booking data={data}></Booking>
      <Welcome info={info} icons={icons} setIcons={setIcons} />
    </div>
  );
};

export default About;
