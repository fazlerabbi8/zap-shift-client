import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowUpRight } from "lucide-react";

import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";

const Banner = () => {
  const banners = [banner1, banner2, banner3];

  return (
    <div className="w-full overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={true}
        interval={4000}
        transitionTime={600}
      >
        {banners.map((banner, index) => (
          <div key={index} className="relative w-full">
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="block w-full"
            />

            {/* Buttons */}
            <div
              className="
              -mb-2
              -ml-2
                absolute
                bottom-[8%]
                left-[5%]
                flex
                items-center
                gap-2

                sm:bottom-[10%]
                sm:left-[6%]
                sm:gap-3

                md:bottom-[13%]
                md:left-[7%]
                md:gap-5

                lg:bottom-[16.5%]
                lg:left-[7.7%]
                lg:gap-11
              "
            >
              {/* Track Your Parcel */}
              <button
                className="
                  flex
                  items-center
                  border-0
                  bg-transparent
                  p-0
                  cursor-pointer
                "
              >
                <span
                  className="
                    flex
                    h-7
                    items-center
                    rounded-full
                    bg-[#c3f33d]
                    px-3
                    text-[9px]
                    font-bold
                    text-[#172b2f]
                    whitespace-nowrap

                    sm:h-8
                    sm:px-4
                    sm:text-[10px]

                    md:h-9
                    md:px-5
                    md:text-xs

                    lg:h-10
                    lg:px-6
                    lg:text-sm
                  "
                >
                  Track Your Parcel
                </span>

                <span
                  className="
                    -ml-0.5
                    flex
                    h-6
                    w-6
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#202529]
                    text-white

                    sm:h-7
                    sm:w-7

                    md:h-8
                    md:w-8

                    lg:h-[34px]
                    lg:w-[34px]
                  "
                >
                  <ArrowUpRight
                    className="
                      h-3 w-3
                      sm:h-3.5 sm:w-3.5
                      md:h-4 md:w-4
                      lg:h-[17px] lg:w-[17px]
                    "
                    strokeWidth={2.5}
                  />
                </span>
              </button>

              {/* Be A Rider */}
              <button
                className="
                  h-7
                  rounded-md
                  border
                  border-[#dedede]
                  bg-white
                  px-3
                  text-[9px]
                  font-semibold
                  text-[#292929]
                  whitespace-nowrap
                  hover:bg-gray-50

                  sm:h-8
                  sm:px-4
                  sm:text-[10px]

                  md:h-9
                  md:px-5
                  md:text-xs

                  lg:h-10
                  lg:px-6
                  lg:text-sm
                "
              >
                Be A Rider
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
