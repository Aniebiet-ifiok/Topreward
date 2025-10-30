import React from "react";
import { ArrowRight } from "lucide-react";
import tiktok from "../assets/tiktok_logo.jpg";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center  px-6 pt-6 sm:pt-3">

      <img
        src={tiktok}
        alt="TikTok Logo"
        className="w-[10rem] sm:w-[13rem] h-[10rem] sm:h-[13rem] mb-6 hover:scale-[1.1] transition-transform duration-300 ease-in-out"
      />

<div className="w-full">
  <h1 className="text-[25px] sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight w-full text-balance tracking-tight ">
    Complete The Steps to Start Reviewing for TikTok
  </h1>
</div>

      <button className=" cursor-pointer flex items-center gap-2 justify-center bg-black text-white px-6 py-3 rounded-md text-lg font-semibold w-full sm:w-auto hover:scale-[1.05] hover:bg-gray-800 transition-all duration-300 ease-in-out">
        Get Started Now <ArrowRight size={20} />
      </button>
    </section>
  );
};

export default HeroSection;
