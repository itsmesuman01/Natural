import React, { useState, useEffect } from "react";
import { images } from "../assets/assets";

const Carasoul = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageArray = [
        images.logo,
        images.cross_icon
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
        ></div>
    );
};

export default Carasoul;
