import LiveEvents from "../components/LiveEvents";
import Recommended from "../components/Recommended";
import BannerSlider from "../components/shared/BannerSlider";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <Recommended />
      <LiveEvents />
    </div>
  );
};

export default Home;
