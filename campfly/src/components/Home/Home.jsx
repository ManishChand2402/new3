import React from "react";
import CardSlider from "../CardSlider";
import TrendGetway from "../TrendingGetaways/TrendGetway";
import CulturesCards from "../NewCultures/CulturesCards";
import { CiLocationOn } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";
import { Buttons, SearchBox } from "../components";
import OurPackages from "../ourPackages/OurPackages";
import Testimonials from "../Testimonials/Testimonials";
import { IoMdClose } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { CiCalendarDate } from "react-icons/ci";


function Home() {
  return (
    <>
      <div
        className=" bg-no-repeat bg-cover "
        style={{
          backgroundImage: "url('./BgImg.svg')",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
        }}
      >
        <div className="text-center text-white pt-[12rem]">
          <div className="">
            <h1 className="text-[4rem] font-medium">Explore the World</h1>
            <p>Discover your dream destination</p>
          </div>
        </div>
        <div className="max-w-[85%] mx-auto bg-white rounded-xl my-[1.5rem] ">
          <div className="flex items-center justify-between px-[1rem] mt-[3rem]">
            <div className="flex items-center gap-x-2">
              <IoSearchSharp className="text-[2.3rem]" />
               <SearchBox title={"destination"} title2={"Trivandrum"}/>
               <IoMdClose className="text-[1.7rem]"/>
            </div>
            <div className="flex items-center gap-x-2">
              <GiSandsOfTime className="text-[2.3rem]" />
               <SearchBox title={"Select Duratin"} title2={"4 Days"}/>
               <FaCaretDown className="text-[1rem]"/>
            </div>
            <div className="flex items-center gap-x-2">
              <CiCalendarDate className="text-[2.3rem]" />
               <SearchBox title={"Select Month"} title2={"January 2024"}/>
               <FaCaretDown className="text-[1rem]"/>
            </div>
            <div className="my-2">
              <Buttons title={"Explore"} py={"py-[0.8rem]"} px={"px-[1.4rem]"}/>
            </div>
          </div>
        </div>
        <div className="py-[2rem] mx-auto max-w-[90%] ">
          <div className="flex text-white items-center gap-x-1 ">
            <CiLocationOn />

            <h1 className="text-[1.5rem]">Jaipur</h1>
            <p className="text-[0.75rem] pt-1">city in Rajasthan</p>
          </div>
        </div>
      </div>
      {/* slider */}
      <div className="">
        <CardSlider />
      </div>

      {/* Trending Getways section staring */}

      <div className="lg:max-w-[90%] xl:max-w-[90%] mx-auto my-[4rem]">
        <h1 className="text-[2rem] text-center">Trending Getways</h1>
        <TrendGetway />
      </div>
      {/* Trending Getways section End */}

      {/* Explore New Cultures section staring */}
      <div className="my-[4rem]  text-center">
        <h1 className="text-[3rem]">Explore New Cultures</h1>
        <p>Browse destinations for your next holiday plan.</p>
        <CulturesCards />
      </div>
      {/* Explore New Cultures section End */}
      {/*--------------------------------Our Packages section staring */}
      <div className="">
        <OurPackages/>
      </div>
      {/*------------------------Our Packages section End */}
      <div className="my-[3rem]">
        <div className="max-w-[90%] mx-auto bg-black flex rounded-3xl ">
          <div className="mr-8 w-[45%]">
            <img src="./PydtImg.svg" alt="" className="rounded-l-3xl "/>
          </div>
          <div className="text-white pt-[1rem]">
            <div>
              <h1 className="text-[2.5rem]">Plan your Dream Trip</h1>
              <div className="my-[1rem]">
              <p className="text-[0.875rem] ">Loction</p>
              <input type="text" name="" id="" placeholder="Enter destination" className="bg-black border border-gray-700 rounded-md w-full pl-2 text-[1rem] text-[#ffffff]"/>
              <p className="text-[#414040] text-[0.75rem]">e.g Bali.Swiss Alps</p>
              </div>
              <div className="my-[1rem]">
              <p className="text-[0.875rem] ">Travel Dates</p>
              <input type="date" name="" id="" className="bg-black border border-gray-700 rounded-md w-full pl-2" />
              <p className="text-[#414040] text-[0.75rem]">Select preferred dates</p>
              </div>
              <div className="w-[50%]">

              <Buttons title={"Get Recommendation"} px={"px-[1rem]"} py={"py-[0.7rem]"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Starting */}
      
      <Testimonials/>
      {/* Testimonial End*/}


      <section className="max-w-[90%] mx-auto my-[2rem]">
        <div className="bg-[url('/pexel.svg')] bg-no-repeat bg-cover rounded-3xl bg-black bg-opacity-100">
          <div className="px-[4rem] flex text-white py-[8rem]">
            <div className="w-[30%] leading-10">
              <p className="text-[1rem]">Destinatios Explored</p>
              <h1 className="text-[4rem]">200+</h1>
            </div>
            <div className="w-[30%] leading-10">
              <p className="text-[1rem]">Happy Customers</p>
              <h1 className="text-[4rem]">5000+</h1>
            </div>
            <div className="w-[80%]">
              <p className="text-[1rem]">
                "Unleash your inner explorer with Campfly, where the journey is
                a symphony of discovery, and every destination is a note waiting
                to be played. Join us in composing the melody of your travels,
                where the world is your canvas and each adventure is a stroke of
                brilliance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
