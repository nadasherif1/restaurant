"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ExperienceCuisine = () => {
  const words = ["EXPERIENCE", "CUISINE", "DELICIOUS", "AWESOME"];

  return (
    <div className="bg-[#f9f5f0] min-h-screen flex flex-col items-center justify-center relative ">
      <div className="absolute top-0 left-0 w-full flex justify-center items-center overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center">
          <motion.div
            className="w-12 h-12 mx-auto rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/homepage/demo-restaurant-home-quotes-icon.jpg"
              alt="demo-restaurant-home-quotes-icon"
              width={200}
              height={200}
              className="rounded-full mt-[60px]"
            />
          </motion.div>
          <p className="mt-[40px] text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-gray-700">
            FOOD FOR US COMES FROM OUR RELATIVES WHETHER THEY HAVE WINGS OR FINS
            OR ROOTS THAT IS HOW WE CONSIDER FOOD HAS A CULTURE IT HAS HISTORY
            IT HAS A STORY IT HAS RELATIONSHIPS.
          </p>
          <p className="mt-2 text-yellow-500 font-bold">Herman Miller</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 items-center">
          <div className="flex justify-end">
            <Image
              src="/homepage/demo-restaurant-home-07.jpg"
              alt="Delicious Breakfast"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>

          <div className="text-center px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-red-500">
              Healthy <span className="text-orange-500">Experience</span>
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl font-medium text-gray-600 mt-4">
              Discover the taste of delicious and healthy meals crafted for
              every moment.
            </p>
          </div>

          <div className="flex justify-start">
            <Image
              src="/homepage/demo-restaurant-home-08.jpg"
              alt="Healthy Experience"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-12">
          <img
            src="/homepage/mark-withers-obit-120724-7a95f08c44014913939ba21876e3f256.webp"
            alt="Person 1"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-gray-300"
          />
          <img
            src="/homepage/mark-withers-obit-120724-7a95f08c44014913939ba21876e3f256.webp"
            alt="Person 2"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-gray-300"
          />
          <img
            src="/homepage/kate-middleton-carol-concert-120624-1-4a4029542a1740ebbe4d6b9f1a8cf54e.webp"
            alt="Person 3"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCuisine;
