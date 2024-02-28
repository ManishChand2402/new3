import React, { useState } from "react";
import { Data } from "../../lib/lib";

import { PiArrowsOutSimple } from "react-icons/pi";
import { MdStarRate } from "react-icons/md";
import { GoInfo } from "react-icons/go";
import { GiSandsOfTime } from "react-icons/gi";
import { GiSurferVan } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { ImTicket } from "react-icons/im";
import { ImPower } from "react-icons/im";
import { CiBookmark } from "react-icons/ci";
import { GoShareAndroid } from "react-icons/go";






import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { Buttons } from "../components";

const TrendGetway = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerPage = 3; // Number of cards per page

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === Math.ceil(Data.length / cardsPerPage) - 1
        ? 0
        : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0
        ? Math.ceil(Data.length / cardsPerPage) - 1
        : prevSlide - 1
    );
  };

  const startCardIndex = currentSlide * cardsPerPage;
  const endCardIndex = Math.min(startCardIndex + cardsPerPage, Data.length);

  return (
    <>
     <div className="flex justify-end mb-2">
    <button
        className="  text-black px-3 py-2 "
        onClick={prevSlide}
      >
        <IoArrowBackCircleOutline className="text-[2rem]" />
      </button>
      <button
        className="  text-black px-3 py-2 "
        onClick={nextSlide}
      >
        <IoArrowForwardCircleOutline className="text-[2rem]" />
      </button>
    </div>
<div className=" mx-auto flex justify-center">
   <div className="flex mb-[4rem]">
     {Data.slice(startCardIndex, endCardIndex).map((card, index) => (
       <div key={index} className=" ">
         <div className="bg-white p-1 border mx-1 rounded-2xl ">
           <div className=" mx-1">
             <img src={card.Image} alt="" className="mb-2" />
             <div className="">
               <div className="relative flex items-center justify-between">
                 <h1 className=" lg:text-[1rem] xl:text-[1.5rem] font-semibold">
                   {card.title}
                 </h1>
                 <div className="absolute flex flex-col gap-2 top-[-12.2rem] right-[0.8rem]">
                 
                <img src="./Bookmark.svg" alt="" width={25} />
                <img src="./Share.svg" alt="" width={25}/>

                 </div>
                 <div className="flex">
                   <p className="bg-[#E8AB0D]  lg:text-[0.7rem] lg:px-2 lg:py-[0.2rem] xl:py-1 xl:text-[0.7rem] xl:px-4 rounded-3xl">
                     Member price avaiable
                   </p>
                   <PiArrowsOutSimple className="ml-2 text-[1.3rem]" />
                 </div>
               </div>
               <div className="flex items-center justify-between border-b pb-3 mb-2 lg:mt-1">
                 <h1 className="text-[#787878] lg:text-[0.8rem] xl:text-[0.8rem]">
                   {card.Town}
                 </h1>
                 <div className="flex items-center gap-x-1 lg:text-[0.8rem] ">
                   <MdStarRate />
                   <p>4.5/5</p>
                   <span className="text-[#787878]">(1k+ rating)</span>
                   <GoInfo className="text-[#787878]" />
                 </div>
               </div>
               <div className="flex items-center  gap-x-2">
                 <div className="flex items-center mr-4 mb-1">
                 <GiSandsOfTime className="mr-1 text-[#787878]"/>

                   <p className="text-[0.8rem]">5 days or 6 nights</p>
                 </div>
                 <div className="flex items-center ">
                 <IoFastFoodOutline className="mr-1 text-[#787878]"/>

                   <p className="text-[0.8rem]">Food Included</p>
                 </div>
               </div>
               <div className="flex items-center  gap-x-2 border-b pb-2 mb-3">


                 <div className="flex items-center mr-10">
                 <GiSurferVan className="mr-1 text-[#787878]" />

                   <p className="text-[0.8rem]">Transportation</p>
                 </div>
                 <div className=" flex items-center text-left lg:ml-[-0.19rem]">
                 <ImTicket className="mr-1 text-[#787878]" />

                   <p className="pr-6 text-[0.8rem]">All Tickets</p>
                 </div>
               </div>

               <div className="flex items-center justify-center">
                 <h1 className="text-[#787878] lg:text-[1.1rem] xl:text-[1rem] font-medium">From <span className="text-black xl:text-[1.3rem] font-semibold">₹ 7500 </span> <span className="line-through">₹1000</span></h1>
                 <div className="text-red-500 font-medium border-red-500 border-[0.13rem] ml-1 lg:px-2 xl:px-3 py-[0.2rem] rounded-full">25% Off</div>
               </div>
               <div className=" max-w-[85%] mx-auto my-4">
                  <Buttons title={"Quick Book "} icon={<ImPower />} px={"py-3"}/>
               </div>
             </div>
           </div>
         </div>
       </div>
     ))}
   </div>
 </div>
 <div className="  flex justify-center mb-4">
     {Array.from(
       { length: Math.ceil(Data.length / cardsPerPage) },
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
    </>
    
  );
};

export default TrendGetway;
