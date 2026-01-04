import React from "react";

const WhyChoose = () => {
  return (
    <div className="bg-[#FFF9F0]  text-center p-10 md:p-18 space-y-10 ">
      <div className="space-y-3">
        <h1 className="text-[#3A3A3A] font-bold text-3xl sm:text-4xl text-center">
          Why Parents Choose ToyTopia
        </h1>
        <p className="text-center text-[18px] text-[#6B7280]">
          Trusted, Safe & Affordable Toys for Every Kid
        </p>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 ">
        <div className="p-6 shadow-xl rounded-xl bg-white border border-amber-200 space-y-3 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <img
            className="w-32 h-32 mx-auto drop-shadow-xl"
            src="./premimu-quality.png"
            alt=""
          />
          <h2 className="font-medium text-xl">100% Safe & Quality Toys</h2>
          <p className="text-sm text-gray-600">
            Carefully selected toys that are child-safe, durable, and made with
            high-quality materials.
          </p>
        </div>
        <div className="p-6 shadow-xl rounded-xl bg-white border border-amber-200 space-y-3 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <img className="w-32 h-32 mx-auto" src="./fast-delivery.png" alt="" />
          <h2 className="font-medium text-xl">Fast & Reliable Delivery</h2>
          <p className="text-sm text-gray-600">
            Get your toys delivered quickly and right on time, every time.
          </p>
        </div>
        <div
          className="p-6 shadow-xl rounded-xl bg-white border border-amber-200
 space-y-3 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
        >
          <img
            className="w-32 h-32 mx-auto drop-shadow-xl"
            src="./top-re.png"
            alt=""
          />
          <h2 className="font-medium text-xl">Top Rated Products</h2>
          <p className="text-sm text-gray-600">
            Loved by parents and rated highly by real customers.
          </p>
        </div>
        <div className="p-6 shadow-xl rounded-xl bg-white border border-amber-200 space-y-3 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
          <img
            className="w-32 h-32 mx-auto drop-shadow-xl"
            src="./affordable-price.png"
            alt=""
          />
          <h2 className="font-medium text-xl">Affordable Prices</h2>
          <p className="text-sm text-gray-600">
            Premium toys at prices that fit every family's budget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
