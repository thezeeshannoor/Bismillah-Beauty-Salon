import img1 from "../../assets/services/bismillah-beauty-salon-hair-extensions.jpg";
import img2 from "../../assets/services/bismillah-beauty-salon-body-waxing.jpg";
import img3 from "../../assets/services/bismillah-beauty-salon-manicure.jpg";
import img4 from "../../assets/services/bismillah-beauty-salon-make-up-services.jpg";
import img5 from "../../assets/services/bismillah-beauty-salon-pedicure.jpg";
import img6 from "../../assets/services/bismillah-beauty-salon-hair-styling.jpg";
import img7 from "../../assets/services/bismillah-beauty-salon-hair-dye.png";
import img8 from "../../assets/services/bismillah-beauty-salon-mehndi.jpg";
import img9 from "../../assets/services/bismillah-beauty-salon-party-make-up.jpg";
import ServiceCard from "../serviceCard/ServiceCard";

const ServiceCardList = () => {
  const cards = [
    {
      img: img1,
      headTxt: "Hair Extensions",
    },
    {
      img: img2,
      headTxt: "Body Waxing",
    },
    {
      img: img3,
      headTxt: "Manicure",
    },
    {
      img: img4,
      headTxt: "Make-Up Services",
    },
    {
      img: img5,
      headTxt: "Pedicure",
    },
    {
      img: img6,
      headTxt: "Hair Styling",
    },
    {
      img: img7,
      headTxt: "Hair Dye",
    },
    {
      img: img8,
      headTxt: "Mehndi",
    },
    {
      img: img9,
      headTxt: "Party Make-Up",
    },
  ];
  return (
    <>
      {cards.map((card, index) => (
        <ServiceCard key={index} card={card} />
      ))}
    </>
  );
};

export default ServiceCardList;
