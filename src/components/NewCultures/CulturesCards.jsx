import React, { useState } from "react";
import { NewCulturesData } from "../../lib/lib";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CiCalendar , CiLocationOn } from "react-icons/ci";
import { PiAirplaneTilt } from "react-icons/pi";



import { PiTrain } from "react-icons/pi";



import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { Buttons, ImgDiv } from "../components";
const CulturesCards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerPage = 2; // Number of cards per page

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === Math.ceil(NewCulturesData.length / cardsPerPage) - 1
        ? 0
        : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0
        ? Math.ceil(NewCulturesData.length / cardsPerPage) - 1
        : prevSlide - 1
    );
  };

  const startCardIndex = currentSlide * cardsPerPage;
  const endCardIndex = Math.min(startCardIndex + cardsPerPage, NewCulturesData.length);

  return (
    <div className="lg:max-w-[90%] mx-auto my-4">
     
<div className=" flex">
<button
        className="  text-black pr-3 py-2 "
        onClick={prevSlide}
      >
        <IoArrowBackCircleOutline className="text-[2rem]" />
      </button>
   <div className="flex mb-[4rem] w-[100%]">
     {NewCulturesData.slice(startCardIndex, endCardIndex).map((card, index) => (
       <div key={index} className=" ">
         <div className="bg-white p-1 border mx-1 rounded-2xl ">
           <div className=" mx-1">
             <img src={card.Image} alt="" className="mb-2 w-[100%]" />
             <div className="">
               <div className="relative flex items-center gap-x-1">
               <CiLocationOn className="text-[1.2rem]"/>
                 <h1 className=" lg:text-[1.2rem] xl:text-[1.5rem] font-semibold">
                   {card.title} <span className="text-[#787878] lg:text-[0.8rem]">{card.Town}</span>
                 </h1>
                 {/* <div className="absolute flex flex-col gap-2 top-[-9rem] right-[0.8rem]">
                 
                <img src="./Bookmark.svg" alt="" width={25} />
                <img src="./Share.svg" alt="" width={25}/>

                 </div> */}
                 
               </div>
               <div className=" pb-3  lg:mt-1">
                 <p className="text-[#787878] lg:text-[0.5rem] xl:text-[0.8rem] text-left ">
                {card.des}
                 </p>
               </div>
               <div className="text-left">
                    <h1 className=" font-semibold">Get there</h1>
                    <div className="flex text-[#787878] gap-x-2 mt-1 ">
                    <div className="flex items-center bg-[#E6E6E6] gap-x-1 px-2 py-[0.2rem] rounded-lg">
                    <CiCalendar />
                         <p className="lg:text-[0.8rem]">Jan-Dec</p>
                    </div>
                    <div className="flex gap-x-1 items-center bg-[#E6E6E6] px-2 py-[0.2rem] rounded-lg">
                    <PiAirplaneTilt />
                         <p className="lg:text-[0.8rem]">Cachin Inter...</p>
                    </div>
                    <div className="flex gap-x-1 items-center bg-[#E6E6E6] px-2 py-[0.2rem] rounded-lg">
                    <PiTrain />
                         <p className="lg:text-[0.8rem]">Ernakulam Junction</p>
                    </div>
                    </div>
               </div>
                 <h1 className="font-medium text-left my-2">Things to do</h1>
               <div className="flex w-full">
                  <ImgDiv img={"./Eravikulam.svg"} title={"Ernakulam National pa.."}/>
                  <ImgDiv img={"./Eravikulam.svg"} title={"Ernakulam National pa.."}/>
                  <ImgDiv img={"./Eravikulam.svg"} title={"Ernakulam National pa.."}/>
                  <div>
                    <h1>10+</h1>
                    <p>More things to do</p>
                  </div>
                 
               </div>
               <div className=" max-w-[55%] mx-auto my-4">
                  <Buttons title={"Explore packages "} icon={<IoIosArrowRoundForward className="text-[1.9rem]"/>} px={"py-1"}/>
               </div>
             </div>
           </div>
         </div>
       </div>
     ))}
     
   </div>
   <button
        className="  text-black pl-3 py-2 "
        onClick={nextSlide}
      >
        <IoArrowForwardCircleOutline className="text-[2rem]" />
      </button>
 </div>
 <div className="  flex justify-center mb-4">
     {Array.from(
       { length: Math.ceil(NewCulturesData.length / 2) },
       (_, index) => (
         <button
           key={index}
           onClick={() => setCurrentSlide(index)}
           className={`w-2 h-2  rounded-full mx-1 focus:outline-none ${
             index === currentSlide ? "bg-[#1ed760]" : "bg-[#B1BBB4]"
           }`}
         ></button>
       )
     )}
   </div>
    </div>
    
  );
};

export default CulturesCards;
