import React, { useState, useEffect } from "react";
import { carasoul } from "../assets/assets";

const Carasoul = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageArray = [
    carasoul.wallpaper_one,
    carasoul.wallpaper_two,
    carasoul.wallpaper_three,
    // carasoul.wallpaper_four,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-[60vh] bg-cover bg-center bg-no-repeat transition-all duration-1000"
      style={{ backgroundImage: `url(${imageArray[currentIndex]})` }}
    >
      <div className="animate-fadeIn text-white flex justify-content items-center h-full px-10">
        <h1 className="text-3xl md:text-5xl font-bold">Beautiful Nature</h1>
      </div>
    </div>
  );
};

export default Carasoul;
