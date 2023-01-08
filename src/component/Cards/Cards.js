import React, { useState } from 'react';
import item from '../../assets/Graphics Software.png'
const Cards = () => {
    const [hide, setHide] = useState(true);
    console.log(hide);
    const handleHoverOver = () => {
        setHide(false)
        
    }
    const handleHoverLeave = () => {
        setHide(true)
        
    }
    return (
      <div className="flex justify-center items-center mt-20">
        <div
          onMouseOver={handleHoverOver}
          onMouseLeave={handleHoverLeave}
          className=" p-10 border-2 border-white rounded-lg shadow-2xl hover:border-2 hover:border-gray-900"
        >
          <div>
            <div>
              <img src={item} alt="" />
            </div>
            <div className="text-center">
              <h3 className="mt-5">Microsoft Office</h3>
              <h4 className="mt-4">
                Operating Systems & <br /> Mac Software
              </h4>
              <h4 className="mt-2 font-bold">$30.00</h4>
              <div className="w-52 ">
                <p
                  className={`${
                    hide
                      ? "h-0 overflow-hidden transition-all duration-1000"
                      : "h-36 overflow-hidden transition-all duration-1000"
                  }`}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  quam ab qui fugiat ut unde tempora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cards;