import Slider from "react-slick";
import { banners } from "../../utils/constants";

const BannerSlider = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="w-full bg-white py-3">
      <div className="w-full px-4">
        <Slider {...settings}>
          {banners.map((banner, i) => (
            <div key={i} className="px-2">
              <img
                src={banner}
                alt={`Promotional banner ${i + 1}`}
                className="block w-full h-[160px] sm:h-[200px] md:h-[240px] rounded-lg object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BannerSlider;
