import React from "react";
import useToys from "../hook/useToys";
import ToyCard from "../components/ToyCard";
import { Link } from "react-router";

const FeaturedToys = () => {
  const { toy, loading } = useToys();

  if (loading) {
    return (
      <div className="flex flex-col items-center py-10 space-y-3">
        <span className="loading loading-spinner loading-md"></span>
        <p className="text-xl font-semibold text-[#627382]">Loading...</p>
      </div>
    );
  }
  const featuredtoy = toy.slice(0, 6);
  return (
    <div className="bg-[#FFFDF8] flex flex-col items-center justify-center gap-10 p-10 md:p-18">
      <div className="space-y-4 text-center">
        <h1 className="text-[#3A3A3A] font-bold text-3xl sm:text-4xl text-center ">
          Featured Toys
        </h1>
        <p className="text-center text-[18px] text-[#6B7280]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredtoy.map((toy) => (
          <ToyCard key={toy.toyId} toy={toy} />
        ))}
      </div>
      <Link to={"/toy"}>
        <button className="bg-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-2xl font-semibold rounded-lg px-6 py-2 border border-[#fce2c1] text-center ">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default FeaturedToys;
