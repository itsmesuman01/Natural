import React from "react";
import { carasoul } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="flex text-black mt-1 mb-1">
        <div className="left flex-1 animate-fadeIn">
          <img
            className="w-full h-full object-cover"
            src={carasoul.wallpaper_one}
            alt="image"
          />
        </div>
        <div className="right flex-1 animate-fadeIn p-10">
          <div className="text-3xl md:text-5xl mt-5 mb-5 flex justify-center">
            Beautiful Himalaya
          </div>
          <div className="flex justify-center my-10">
            <hr className="w-60 border-t-2 border-gray-100" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            saepe exercitationem consequatur eum debitis minima. Non quos hic
            unde aliquam quia perspiciatis ipsa ex ad repudiandae? Impedit
            quidem eligendi voluptatibus eaque, culpa corporis consequatur
            ducimus, debitis quos sequi reiciendis iste magnam distinctio unde
            aut, quo sit in itaque quasi fugit nam quam nobis voluptatem
            provident? Cupiditate assumenda, exercitationem repudiandae nostrum
            repellat omnis praesentium delectus atque eaque sunt cum,
            recusandae, quam a excepturi aut numquam itaque laudantium ad nihil
            expedita alias ratione earum? Nostrum accusantium sequi culpa iste
            obcaecati unde illo amet vero minima cumque, delectus aliquid, a
            exercitationem in eligendi.
          </p>
        </div>
      </div>
      <div className="flex text-black mt-1 mb-1">
        <div className="left flex-1 animate-fadeIn">
          <img
            className="w-full h-full object-cover"
            src={carasoul.wallpaper_two}
            alt="image"
          />
        </div>
        <div className="right flex-1 animate-fadeIn p-10">
          <div className="text-3xl md:text-5xl mt-5 mb-5 flex justify-center">
            Beautiful Hill
          </div>
          <div className="flex justify-center my-10">
            <hr className="w-60 border-t-2 border-gray-100" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            saepe exercitationem consequatur eum debitis minima. Non quos hic
            unde aliquam quia perspiciatis ipsa ex ad repudiandae? Impedit
            quidem eligendi voluptatibus eaque, culpa corporis consequatur
            ducimus, debitis quos sequi reiciendis iste magnam distinctio unde
            aut, quo sit in itaque quasi fugit nam quam nobis voluptatem
            provident? Cupiditate assumenda, exercitationem repudiandae nostrum
            repellat omnis praesentium delectus atque eaque sunt cum,
            recusandae, quam a excepturi aut numquam itaque laudantium ad nihil
            expedita alias ratione earum? Nostrum accusantium sequi culpa iste
            obcaecati unde illo amet vero minima cumque, delectus aliquid, a
            exercitationem in eligendi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
