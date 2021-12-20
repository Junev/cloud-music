import { useEffect, useState } from "react";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SliderContainer } from "./style";

const Slider = (props) => {
  const { bannerList } = props;
  const [slideSwiper, setSlideSwiper] = useState(null);

  useEffect(() => {
    if (!slideSwiper && bannerList.length > 0) {
      const newSliderSwiper = new Swiper(".slider-container", {
        // loop: true,
        modules: [Navigation, Pagination, Autoplay],
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });
      setSlideSwiper(newSliderSwiper);
    }
    return () => {
      slideSwiper?.destroy();
    };
  }, [bannerList, slideSwiper]);

  const swiperItems = bannerList.map((c, i) => (
    <div className="swiper-slide" key={i}>
      <div className="slider-nav">
        <img src={c.imageUrl} width="100%" height="100%" alt="推荐" />
      </div>
    </div>
  ));

  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">{swiperItems}</div>
        <div className="swiper-pagination" />
      </div>
    </SliderContainer>
  );
};

export default Slider;
