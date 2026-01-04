import React from "react";
import { Link } from "react-router";
import Slider from "../components/Slider";
import WhyChoose from "../components/WhyChoose";
import Categories from "../components/Categories";
import FeaturedToys from "../components/FeaturedToys";

const Homepage = () => {
  return (
    <div className="min-h-screen ">

       <div className="bg-linear-to-r from-[#FFF9F0] via-[#FFF1DC] to-[#FFEFD6] flex flex-col sm:flex-row items-center justify-center gap-20 p-8 sm:p-18">

  <div className="space-y-4 max-w-xl">
    <h2 className="font-bold text-3xl md:text-4xl text-[#3A3A3A]">
      Discover Play, Learn & Joy!
    </h2>

    <p className="text-[#6B7280]">
      Explore Toys From Trusted Local Sellers — Discover Quality at the
      Best Prices
    </p>

    <div className="flex  gap-3 items-center">
      <Link
        to="/toy"
        className="px-5 py-2 rounded-lg shadow-md border border-[#F4C38B]
        text-[#8A5A1F] hover:bg-[#F4C38B] hover:text-white transition"
      >
        Explore Toys
      </Link>

      <Link
        to="/toy"
        className="px-5 py-2 rounded-lg shadow-md border border-[#F4C38B]
        text-[#8A5A1F] hover:bg-[#F4C38B] hover:text-white transition"
      >
        Browse Categories
      </Link>
    </div>
  </div>

  <div className="w-full md:w-1/2">
    <Slider />
  </div>
</div>

      <Categories></Categories>
      <FeaturedToys></FeaturedToys>
      <WhyChoose></WhyChoose>
    </div>
  );
};

export default Homepage;
