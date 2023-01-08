import React from "react";
import bg from "../../assets/Vector.png";
import dashed from "../../assets/Vector (1).png";
import solid from "../../assets/Vector (2).png";
import prof from "../../assets/Group (2).png";
import './Animation.css'

const Animation = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="relative">
          <img src={bg} alt="" />
          <div className="absolute w-full top-0">
            <div className="flex justify-center items-center m-10">
              <div className="relative">
                <img src={dashed} alt="" />
              </div>
            </div>
          </div>
          <div className="absolute top-0 w-full">
            <div className="flex justify-end items-center m-9">
              <img src={solid} alt="" />
            </div>
          </div>
          <div className="absolute top-0 w-full">
            <div className="flex justify-center items-center">
              <div className="animate-spin spinn relative w-40 h-40 m-24">
                <div className="absolute -top-10 -left-10">
                  <img src={prof} className="w-12" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
