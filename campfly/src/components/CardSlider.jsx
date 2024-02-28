import React, { useState } from 'react';
import { HoneymoonPlace } from '../lib/lib';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

const CardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerPage = 7;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(HoneymoonPlace.length / cardsPerPage));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? Math.ceil(HoneymoonPlace.length / cardsPerPage) - 1 : prevSlide - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const startCardIndex = currentSlide * cardsPerPage;
  const endCardIndex = Math.min(startCardIndex + cardsPerPage, HoneymoonPlace.length);

  return (
    <div className="relative max-w-[80%] mx-auto flex justify-center">
      <div className="flex overflow-hidden">
        {HoneymoonPlace.slice(startCardIndex, endCardIndex).map((card, index) => (
          <div key={index} className="mx-2 my-8 py-4 ">
            <div className="bg-white px-3 rounded-lg shadow-lg p-4 flex flex-col items-center">
              <img src={card.Image} alt={card.Name} width={50} />
              <h2 className="mb-2">{card.Name}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        {Array.from({ length: Math.ceil(HoneymoonPlace.length / 3) }, (_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2  rounded-full mx-1 focus:outline-none ${
              index === currentSlide ? 'bg-[#1ed760]' : 'bg-[#B1BBB4]'
            }`}
          ></button>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-[-1rem] transform -translate-y-1/2 text-black px-3 py-2 rounded-l"
        onClick={prevSlide}
      >
        <IoArrowBackCircleOutline className="text-[2rem]" />
      </button>
      <button
        className="absolute top-1/2 right-[-1rem] transform -translate-y-1/2 text-black px-3 py-2 rounded-r"
        onClick={nextSlide}
      >
        <IoArrowForwardCircleOutline className="text-[2rem]" />
      </button>
    </div>
  );
};

export default CardSlider;
