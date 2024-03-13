import Card from "../card/Card";
import cardImg1 from "../../assets/beauty-salon-card1.jpg";
import cardImg2 from "../../assets/bismillah-beauty-salon-card2.jpg";
import cardImg3 from "../../assets/bismillah-beauty-salon-card3.jpg";
import SpecialCard from "../card/SpecialCard";
const List = [
  {
    img: `${cardImg2}`,
    styleHead: "beauty",
    plainHead: "salon",
    txt: "We’re a full service salon. We offer the latest and highest quality services.",
  },
  {
    img: `${cardImg1}`,
    styleHead: "head",
    plainHead: "salon",
    txt: "If you're looking to update your style or keep your hair cut up-to-date, this is the perfect place for you.",
  },

  {
    img: `${cardImg3}`,
    styleHead: "wellness",
    plainHead: "salon",
    txt: "We provide a diverse range of services that cater to individual aesthetics, delivered by experienced practitioners.",
  },
];
const CardList = () => {
  return (
    <>
      {List.map((item, index) => {
        return index === 0 ? (
          <SpecialCard key={index} item={item} />
        ) : (
          <Card key={index} item={item} />
        );
      })}
    </>
  );
};

export default CardList;
