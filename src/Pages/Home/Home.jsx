import HeroSlider from "../../components/HeroSlider/HeroSlider";
import Booking from "../../components/booking/Booking";
import bgImg from "../../assets/bismillah-beauty-salon-bgimg.jpg";
import CardList from "../../components/cardList/CardList";
import welcomeImg from "../../assets/bismillah-beauty-salon-welcome.jpg";
import Welcome from "../../components/welcome/Welcome";
import slider1 from "../../assets/Bismillah-Beauty-Salon-Slider1.webp";

const Home = () => {
  const data = {
    img: `${bgImg}`,
    head: "get your stylish at",
    txt: "Bismillah Beauty Salon",

    desc: "We are dedicated to ensuring our customers' satisfaction and are enthusiastic about bringing your boldest and most creative haircut and hair coloring ideas to life! Embrace your unique style and expressyourself freely through your appearance!",
  };

  // slider data
  const link = "/services";
  const txt = "Learn More";

  //
  const info = {
    img: welcomeImg,
    styleTxt: "welcome to",
    plainHead: "Beauty",
    plainHeadTwo: "Salon",
    desc: "We appreciate our clients and understand their unique needs. Weexcel at translating your creative ideas into reality, enhancingyour natural beauty and ensuring you look stunning wherever you go.Trust us to make you feel exceptional!",
  };
  return (
    <>
      <HeroSlider link={link} txt={txt} img={slider1} />
      <div className="d-flex gap-3 justify-content-evenly flex-wrap px-2 p-md-5 my-3">
        <CardList />
      </div>
      <Welcome info={info} />
      <Booking data={data} />
    </>
  );
};

export default Home;
