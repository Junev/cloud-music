import React, { useEffect, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SliderContainer } from "./style";

const Slider = (props) => {
  const bannerList = useSelector((state) =>
    state.getIn(["recommend", "bannerList"])
  ).toJS();

  const slideSwiper = useRef(null);

  useEffect(() => {
    const slideInstance = slideSwiper.current;
    if (!slideInstance && bannerList.length > 0) {
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
      slideSwiper.current = newSliderSwiper;
    }
    return () => {
      slideInstance?.destroy();
    };
  }, [bannerList]);

  const swiperItems = useMemo(
    () =>
      bannerList.map((c, i) => (
        <div className="swiper-slide" key={i}>
          <div className="slider-nav">
            <img src={c.imageUrl} width="100%" height="100%" alt="推荐" />
          </div>
        </div>
      )),
    [bannerList]
  );

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

export default React.memo(Slider);
