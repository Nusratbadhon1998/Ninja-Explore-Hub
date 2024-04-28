import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles2.css";
import { EffectCards } from "swiper/modules";
import { Fade } from "react-awesome-reveal";

import TouristSpotCard from "./TouristSpotCard";

function TouristSpotsContainer({ data }) {
  const [touristSpots, setTouristSpots] = useState(data);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center gap-2">
        <div className="w-full lg:w-[50%] space-y-5">
          <Fade cascade damping={0.1} duration={1000}>
            <h1 className="text-4xl font-bold text-stone-100">
              Discover Our Top Destinations
            </h1>
            <p className=" text-stone-300 font-medium">
              Embark on a journey to explore our handpicked selection of top
              destinations, carefully curated to offer unforgettable
              experiences. Whether you're seeking serene beaches, breathtaking
              mountain vistas, vibrant cityscapes, or cultural marvels, our
              destinations promise to captivate your senses and create memories
              that last a lifetime.{" "}
            </p>
          </Fade>
        </div>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper second-swiper"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          {touristSpots.slice(0, 6).map((spot) => (
            <SwiperSlide key={spot._id}>
              <TouristSpotCard key={spot._id} info={spot}></TouristSpotCard>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="grid grid-cols-1 lg:hidden">
          {touristSpots.slice(0, 5).map((spot) => (
            <TouristSpotCard key={spot._id} info={spot}></TouristSpotCard>
          ))}
        </div>
      </div>
    </div>
  );
}
// second-swiper
export default TouristSpotsContainer;
