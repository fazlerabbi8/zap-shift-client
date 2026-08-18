import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import amazon from "../../../assets/brands/amazon.png";
import amazonv from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import startPeople from "../../../assets/brands/start-people 1.png";
import start from "../../../assets/brands/start.png";

const brands = [
  amazon,
  amazonv,
  casio,
  moonstar,
  randstad,
  startPeople,
  start,
];

const Brands = () => {
  return (
    <section className="w-full px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      {/* Heading */}
      <h3
        className="
          mb-6 text-center
          text-base font-semibold
          sm:mb-8 sm:text-lg
          md:text-xl
        "
      >
        We've helped thousands of sales teams
      </h3>

      {/* Brand Slider */}
      <Swiper
        loop={true}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // Mobile
          0: {
            slidesPerView: 2,
            spaceBetween: 15,
          },

          // Large mobile / small tablet
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          // Tablet
          640: {
            slidesPerView: 3,
            spaceBetween: 25,
          },

          // Desktop
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },

          // Large desktop
          1280: {
            slidesPerView: 5,
            spaceBetween: 35,
          },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                flex h-14
                items-center justify-center
                sm:h-16
                md:h-20
              "
            >
              <img
                src={brand}
                alt="Brand logo"
                className="
                  max-h-8
                  max-w-[110px]
                  object-contain

                  sm:max-h-10
                  sm:max-w-[130px]

                  md:max-h-12
                  md:max-w-[150px]
                "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Brands;