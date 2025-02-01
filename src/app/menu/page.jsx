"use client";

import PopularMenu from "@/components/homepage/PopularMenu";
import Image from "next/image";
import { motion } from "framer-motion";
import SpecialProposals from "@/components/menu/SpecialProposals";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white px-6 sm:px-10 pb-16 lg:pb-[100px]">
        <motion.div
          className="mb-8 lg:mb-0 lg:mt-[230px] flex-shrink-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <Image
            src="/menu/demo-restaurant-menu-01.png"
            alt="Rotating Dish"
            width={500}
            height={300}
            priority
            className="w-[250px] sm:w-[350px] lg:w-[500px] h-auto"
          />
        </motion.div>

        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left max-w-xl lg:pl-[50px]">
          <h3 className="text-red-500 uppercase text-sm font-semibold flex justify-center lg:justify-start mb-3">
            ______________ BEST QUALITY FOOD
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            THE GREATEST TABLE LUXURY RESTAURANT.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur elit do eiusmod tempor
            incididunt ut labore et dolore magna minim veniam nostrud
            exercitation.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300 w-full sm:w-auto font-bold">
              ABOUT RESTAURANT
            </button>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300 w-full sm:w-auto font-bold">
              RESTAURANT STORY
            </button>
          </div>
        </div>
      </div>

      <PopularMenu />
      <SpecialProposals />
    </div>
  );
};

export default Page;
