import Booking from "../../components/booking/Booking";
import bgImg from "../../assets/bismillah-beauty-salon-bgimg2.jpg";
import GalleryList from "../../components/galleryList/GalleryList";

const Portfolio = () => {
  const data = {
    img: `${bgImg}`,
    head: "Discover the artistry of beauty",
    txt: "At Bismillah Beauty Salon",
    desc: "",
  };
  return (
    <>
      <Booking data={data} />
      <div className="p-2 p-md-5  mb-5 d-flex flex-wrap justify-content-evenly gap-2">
        <GalleryList />
      </div>
    </>
  );
};

export default Portfolio;
