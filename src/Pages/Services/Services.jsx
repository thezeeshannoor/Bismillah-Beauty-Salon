import HeroSlider from "../../components/HeroSlider/HeroSlider";
import img from "../../assets/bismillah-beauty-salon-slider4.jpg";

import ServiceCardList from "../../components/serviceCardList/ServiceCardList";
const Services = () => {
  const display = "d-none";
  const link = "/contact";
  const txt = "Book Appointment";
  return (
    <>
      <HeroSlider display={display} link={link} txt={txt} img={img} />
      <div className="p-2 p-md-5 d-flex justify-content-center justify-content-md-between gap-2 flex-wrap col-12">
        <ServiceCardList />
      </div>
    </>
  );
};

export default Services;
