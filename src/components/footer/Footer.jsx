import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

import { LiaFacebookSquare } from "react-icons/lia";

function Footer() {
  return (
    <div className="bg-[#000000] text-white">
      <div className="max-w-[80%] lg:max-w-[90%] mx-auto flex justify-between items-center py-[2rem]">
        <div className="w-[32%]  border-r-[0.1px] py-4 my-2">
          <img src="./Main-logo.svg" alt="" />
          <p className="text-white text-[0.8rem] my-4">
            Embark on a journey where every step is a story, and every
            destination is a chapter waiting to be written
          </p>
          <ul className="flex gap-x-2 text-white text-[1.2rem]">
            <li>
              <FaInstagram />
            </li>
            <li>
              <LiaFacebookSquare />
            </li>
            <li>
              <CiYoutube />
            </li>
          </ul>
        </div>
        <div className=" w-[30%]  flex justify-between gap-x-2 px-2">
          <ul className=" text-[0.8rem]">
            <li className="my-4">
              <a href="">Home</a>
            </li>
            <li className="my-4">
              <a href="">About Us</a>
            </li>
            <li className="my-4">
              <a href="">Contact Us</a>
            </li>
          </ul>
          <ul className=" text-[0.8rem]">
            <li className="my-4">
              <a href="">Privacy Policy</a>
            </li>
            <li className="my-4">
              <a href="">Terms & Conditions</a>
            </li>
            <li className="my-4">
              <a href="">Cancelation and refund policy</a>
            </li>
          </ul>
        </div>
        <div className=" w-[35%] border-l-[0.1px] pl-3">
          <p className="text-[1.2rem] my-4">Unleash the magic of exploration <br /> straight to your inbox</p>
          <input type="text" placeholder="Enter your mail id" name="" id="" className="bg-black text-white px-4 py-1 -[] border-[1px] border-white rounded mb-6" /> 
          <button className="bg-[#1ED760]  font-medium text-black px-2 py-[0.31rem] ml-[-0.2rem] rounded-r">Subscribe</button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
