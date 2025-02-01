"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const RestaurantSection = () => {
  const words = ["EXPERIENCE", "CUISINE", "DELICIOUS", "AWESOME"];

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 mt-[20px] py-12 bg-white relative">
      {/* Animated words */}
      <div className="absolute top-0 left-0 w-full flex justify-center items-center overflow-hidden mt-6">
        <motion.div
          className="flex space-x-4 sm:space-x-8 items-center text-4xl sm:text-6xl lg:text-9xl font-extrabold uppercase"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          {words.map((word, index) => (
            <span
              key={index}
              className={`${
                index % 2 === 0
                  ? "text-black"
                  : "text-transparent text-outline text-stroke stroke-orange-500"
              }`}
              style={
                index % 2 !== 0
                  ? {
                      WebkitTextStroke: "2px #ffa500", 
                      textStroke: "2px #ffa500", 
                    }
                  : {}
              }
            >
              {word}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Restaurant Image */}
      <div className="w-full lg:w-1/3 mb-6 lg:mb-0 mt-8 lg:ml-[100px]">
        <Image
          src="/about/demo-restaurant-about-10.jpg"
          alt="Restaurant"
          width={600}
          height={400}
          className="rounded-lg object-cover w-full"
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-red-500 font-medium text-sm mb-2 uppercase">
          - Since 1988 Restaurant
        </p>
        <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
          AWESOME DINING, <br /> DELICIOUS FOOD.
        </h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit do eiusmod
          tempor incididunt ut labore et dolore magna minim veniam nostrud
          exercitation.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-gray-800 py-3 px-6 rounded hover:bg-gray-700 transition duration-300">
            Restaurant Story
          </button>

          <div className="flex items-center text-gray-800">
            <span className="text-2xl mr-2">📞</span>
            <p className="font-medium">1-800-222-000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;
