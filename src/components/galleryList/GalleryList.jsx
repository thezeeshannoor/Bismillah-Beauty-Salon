import img1 from "../../assets/portfolio/bismillah-beauty-salon-portfolio1.jpg";
import img2 from "../../assets/portfolio/bismillah-beauty-salon-portfolio2.jpg";
import img3 from "../../assets/portfolio/bismillah-beauty-salon-portfolio3.jpg";
import img4 from "../../assets/portfolio/bismillah-beauty-salon-portfolio4.jpg";
import img5 from "../../assets/portfolio/bismillah-beauty-salon-portfolio5.jpg";
import img6 from "../../assets/portfolio/bismillah-beauty-salon-portfolio6.jpg";
import img7 from "../../assets/portfolio/bismillah-beauty-salon-portfolio7.jpg";
import img8 from "../../assets/portfolio/bismillah-beauty-salon-portfolio8.jpg";
import img9 from "../../assets/portfolio/bismillah-beauty-salon-portfolio9.jpg";
import img10 from "../../assets/portfolio/bismillah-beauty-salon-portfolio10.jpg";
import img11 from "../../assets/portfolio/bismillah-beauty-salon-portfolio11.jpg";
import img12 from "../../assets/portfolio/bismillah-beauty-salon-portfolio12.jpg";
import img13 from "../../assets/portfolio/bismillah-beauty-salon-portfolio13.jpg";
import img14 from "../../assets/portfolio/bismillah-beauty-salon-portfolio14.jpg";
import img15 from "../../assets/portfolio/bismillah-beauty-salon-portfolio15.jpg";
import img16 from "../../assets/portfolio/bismillah-beauty-salon-portfolio16.jpg";
import img17 from "../../assets/portfolio/bismillah-beauty-salon-portfolio17.jpg";
import img18 from "../../assets/portfolio/bismillah-beauty-salon-portfolio18.jpg";
import img19 from "../../assets/portfolio/bismillah-beauty-salon-portfolio19.jpg";
import img20 from "../../assets/portfolio/bismillah-beauty-salon-portfolio20.jpg";
import img21 from "../../assets/portfolio/bismillah-beauty-salon-portfolio21.jpg";
import img22 from "../../assets/portfolio/bismillah-beauty-salon-portfolio22.jpg";
import img23 from "../../assets/portfolio/bismillah-beauty-salon-portfolio23.jpg";
import img24 from "../../assets/portfolio/bismillah-beauty-salon-portfolio24.jpg";
import img25 from "../../assets/portfolio/bismillah-beauty-salon-portfolio25.jpg";
import img26 from "../../assets/portfolio/bismillah-beauty-salon-portfolio26.jpg";
import img27 from "../../assets/portfolio/bismillah-beauty-salon-portfolio27.jpg";
import img28 from "../../assets/portfolio/bismillah-beauty-salon-portfolio28.jpg";
import img29 from "../../assets/portfolio/bismillah-beauty-salon-portfolio29.jpg";
import img30 from "../../assets/portfolio/bismillah-beauty-salon-portfolio30.jpg";
import img31 from "../../assets/portfolio/bismillah-beauty-salon-portfolio31.jpg";
import img32 from "../../assets/portfolio/bismillah-beauty-salon-portfolio32.jpg";
import img33 from "../../assets/portfolio/bismillah-beauty-salon-portfolio33.png";
import img34 from "../../assets/portfolio/bismillah-beauty-salon-portfolio34.jpg";
import img35 from "../../assets/portfolio/bismillah-beauty-salon-portfolio35.jpg";
import img36 from "../../assets/portfolio/bismillah-beauty-salon-portfolio36.jpg";
import img37 from "../../assets/portfolio/bismillah-beauty-salon-portfolio37.jpg";
import img38 from "../../assets/portfolio/bismillah-beauty-salon-portfolio38.jpg";
import img39 from "../../assets/portfolio/bismillah-beauty-salon-portfolio39.jpg";
import img40 from "../../assets/portfolio/bismillah-beauty-salon-portfolio40.jpg";
import img41 from "../../assets/portfolio/bismillah-beauty-salon-portfolio41.png";
import img42 from "../../assets/portfolio/bismillah-beauty-salon-portfolio42.jpg";
import img43 from "../../assets/portfolio/bismillah-beauty-salon-portfolio43.jpg";
import img44 from "../../assets/portfolio/bismillah-beauty-salon-portfolio44.png";
import img45 from "../../assets/portfolio/bismillah-beauty-salon-portfolio45.jpg";
import img46 from "../../assets/portfolio/bismillah-beauty-salon-portfolio46.jpg";
import img47 from "../../assets/portfolio/bismillah-beauty-salon-portfolio47.jpg";
import img48 from "../../assets/portfolio/bismillah-beauty-salon-portfolio48.jpg";
import img49 from "../../assets/portfolio/bismillah-beauty-salon-portfolio49.png";
import img50 from "../../assets/portfolio/bismillah-beauty-salon-portfolio50.jpg";
import GalleryImg from "../galleryImg/GalleryImg";
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
];

const GalleryList = () => {
  return (
    <>
      {images.map((image, index) => (
        <GalleryImg key={index} image={image} index={index} />
      ))}
    </>
  );
};

export default GalleryList;
