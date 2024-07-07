import { EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import SlideItem from "./SlideItem";

const data = [
  {
    firstImage: "/heritage-lp-3.webp",
    title: "Premium Collection",
    collection: "the Heritage Collection",
    firstButtonText: "Learn More",
    secondButtonText: "Shop",
  },
  {
    firstImage: "/sage1-desktop.webp",
    secondImage: "/sage2-desktop.webp",
    title: "meet the",
    collection: "Sage Collection",
    firstButtonText: "Learn More",
  },
  {
    firstImage: "/tom-dixon-lp-tile-1.webp",
    title: "collaboration",
    collection: "Native union X Tom Dixon",
    firstButtonText: "Learn More",
  },
  {
    firstImage: "/jump1-desktop.webp",
    secondImage: "/jump2-desktop.webp",
    title: "charge anywhere, anytime",
    collection: "new Jump + PowerBank",
    firstButtonText: "shop jump +",
  },
  {
    firstImage: "/mk-lp-tile-1.webp",
    title: "new in",
    collection: "the maison kitsune collab",
    firstButtonText: "Learn More",
  },
];

const Slider = () => {
  return (
    <Swiper
      grabCursor={true}
      autoplay={{
        delay: 2700,
        disableOnInteraction: false,
      }}
      speed={350}
      className="h-[33rem] max-md:h-screen"
      loop={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: false,
          translate: [0, 0, -1],
        },
        next: {
          shadow: false,
          translate: ["100%", 0, 10],
        },
      }}
      pagination={{
        clickable: true,
        renderBullet: function (_, className) {
          return (
            '<div class="' +
            className +
            '    rounded-sm w-20 h-1 bg-[#717171] relative">' +
            "</div>"
          );
        },
        bulletActiveClass: "progress-bar opacity-80",
      }}
      modules={[EffectCreative, Autoplay, Pagination]}
    >
      {data.map((el, index) => {
        return (
          <SwiperSlide key={index}>
            <SlideItem item={el} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
