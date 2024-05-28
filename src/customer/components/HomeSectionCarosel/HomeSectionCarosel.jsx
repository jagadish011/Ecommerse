import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../Home_card/HomeSectionCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";


const HomeSectionCarosel = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 5.5 },
  };

  const slideprev = () => {
    const newIndex = activeIndex - 1;
    setActiveIndex(newIndex >= 0 ? newIndex : 0);
    // Move carousel to the updated index
    carouselRef.current.slideTo(newIndex);
  };

  const slidenext = () => {
    const newIndex = activeIndex + 1;
    setActiveIndex(newIndex < items.length ? newIndex : items.length - 1);
    // Move carousel to the updated index
    carouselRef.current.slideTo(newIndex);
  };

  const syncActiveIndex = ({ item }) => {
    setActiveIndex(item);
  };

  const items = data.slice(0, 10).map((item) => (
    <HomeSectionCard product={item} />
  ));

  return (
    <div className=" lg:px-8 border border-black">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5 ">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slidenext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "#fff",
            }}
            aria-label="next"
          >
            <ArrowBackIosIcon className="transform rotate-90 text-center text-black mt-2" />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            onClick={slideprev}
            variant="contained"
            className="z-50"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "-4rem",
              transform: "translateX(50%) rotate(-90deg)",
              bgcolor: "#fff",
            }}
            aria-label="next"
          >
            <ArrowBackIosIcon className="transform rotate-90 text-center text-black mt-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
