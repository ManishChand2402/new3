import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

import { CustomerCard } from '../components';


function Testimonials() {
  useEffect(() => {
    // Initialize Swiper when the component mounts
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 5,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: 'true'
    });

    // Clean up Swiper instance when the component unmounts
    return () => {
      swiper.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-[2rem] font-medium tracking-tight text-black ">
         What Our Customers Say
        </h2>

        <div className="mt-4 swiper-container">
          <div className="swiper-wrapper">
          <blockquote className="swiper-slide rounded-lg  shadow-sm sm:p-1">
            <CustomerCard Name={"sahar"}/>          
            </blockquote>
            
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
