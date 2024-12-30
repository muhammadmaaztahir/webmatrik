import React from 'react';
import HeroImg from '../assets/heroImg.png';
import heroIcon1 from '../assets/heroIcon1.webp';
import heroIcon2 from '../assets/heroIcon2.webp';
import heroIcon3 from '../assets/heroIcon3.webp';
import { IoIosCalendar } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="flex px-5 flex-col-reverse lg:flex-row justify-between mt-10 gap-12">
        <div className="lg:w-[40%] w-full ps-4 lg:text-start text-center flex flex-col justify-around">
          <div>
            <h1 className="uppercase font-bold text-[26px] pb-5 lg:pb-0 lg:text-4xl text-[#2867F0]">
              digital marketing agency dubai
            </h1>
            <h2 className="font-bold lg:text-[30px] leading-tight pb-5 lg:pb-0 text-[#2867F0] text-[24px]">
              <span className="text-[#46484B]"> Igniting Businesses With </span> 
              Strategy, Technology & Innovation 
              <span className="text-[#46484B]">!</span>
            </h2>
          </div>
          <p className="text-[17px] pb-7 lg:pb-0">
            Making business stand out in the competitive market is a norm at Webmatrik! 
            Your potential idea and our expertise can turn your brand shine brighter than ever 
            with employing correct approach, effective strategies and updated technological trends! 
            If you are ready to turn out your vision in to a victory, then reach out to us today and make this a reality!
          </p>
          <div className="flex gap-3 items-center flex-col lg:flex-row">
            <button className="rounded-2xl w-fit flex gap-2 items-center py-3 bg-gradient-to-b from-[#3B98F7] to-[#2868F0] hover:rounded-full text-white font-bold text-[20px]  transition ease-in-out">
              <IoIosCalendar />
              Let's Discuss
            </button>
            <button className="rounded-2xl flex w-fit gap-2 bg-gradient-to-b from-[#3B98F7] to-[#2868F0] hover:rounded-full text-white font-bold text-[20px] py-3 items-center transition ease-in-out">
            <FaMobileAlt />
              <a href="tel:+971509850927" className="text-white hover:text-white">
                +971509850927
              </a>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <img src={HeroImg} alt="" />
          <div className="flex justify-around w-full mt-4">
            <img className="lg:w-36 w-24" src={heroIcon1} alt="" />
            <img className="lg:w-36 w-24" src={heroIcon2} alt="" />
            <img className="lg:w-36 w-24" src={heroIcon3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
