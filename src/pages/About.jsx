import React from "react";
import { about } from "../assets/data";

const About = () => {
  return (
    <div>
      <div className="flex flex-col text-black mt-1 mb-1">
        {about.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row mb-4">
            <div className="flex-1 animate-fadeIn">
              <img
                className="w-full h-auto object-cover"
                src={item.image}
                alt="About image"
              />
            </div>
            <div className="flex-1 animate-fadeIn p-10">
              <div className="text-3xl md:text-5xl mt-5 mb-5 flex justify-center">
                {item.header}
              </div>
              <div className="flex justify-center my-10">
                <hr className="w-60 border-t-2 border-gray-100" />
              </div>
              <p className="text-center">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
