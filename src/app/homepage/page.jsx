"use client";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

import { easeInOut, motion } from "framer-motion";
import ExperienceFood from "@/components/homepage/ExperienceFood";
import ArticleCard from "@/components/homepage/ArticleCard";
import ExperienceCuisine from "@/components/homepage/ExperienceCuisine";
import PopularDishes from "@/components/homepage/PopularDishes";
import PopularMenu from "@/components/homepage/PopularMenu";

const Main = () => {
  const [currentChar, setCurrentChar] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Experience", "Restaurant"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChar((prev) => {
        if (prev < words[currentWordIndex].length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 200);

    return () => clearInterval(interval);
  }, [currentWordIndex, currentChar]);

  useEffect(() => {
    if (currentChar === words[currentWordIndex].length) {
      const wordTimeout = setTimeout(() => {
        setCurrentChar(0);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 1000);
      return () => clearTimeout(wordTimeout);
    }
  }, [currentChar, currentWordIndex]);

  return (
    <div className="z-[50] w-full bg-white">
      <div className="bg-[url('/homepage/burger.jpg')] bg-cover bg-center h-screen flex items-center justify-center relative">
        <div className="absolute rounded-full bg-yellow-500 opacity-90 hidden md:block w-[700px] h-[700px] lg:w-[550px] lg:h-[550px] top-[10%] left-[50%] transform -translate-x-1/2"></div>
        <div className="absolute rounded-full bg-yellow-500 opacity-90 md:hidden w-[300px] h-[300px] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"></div>

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center px-4 text-center md:text-left"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg md:text-3xl font-bold text-black">
            Experience the taste of Italy
          </p>
          <h1 className="text-4xl md:text-7xl font-bold text-transparent text-stroke">
            Great Dining
          </h1>
          <motion.h2
            key={currentWordIndex}
            className="text-3xl md:text-6xl font-bold pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {words[currentWordIndex].slice(0, currentChar)}
          </motion.h2>
          <motion.div className="mt-4">
          <motion.button
  className="relative overflow-hidden px-5 py-3 font-bold rounded-lg border border-white w-full max-w-[250px] shadow text-white flex items-center justify-center gap-2 transition-all mt-4 md:mt-6"
  whileHover={{ backgroundColor: "black", color: "white" }}
>
  <ArrowCircleRightIcon className="h-5 w-5 md:h-6 md:w-6" />
  <span className="text-sm md:text-base">Authentic Experience</span>
</motion.button>

          </motion.div>
        </motion.div>

        <div className="absolute bottom-[10%] left-[70%] transform -translate-x-1/2 hidden md:flex items-center gap-4">
          <motion.img
            src="/homepage/demo-restaurant-home-01.webp"
            alt="demo-restaurant-home-01"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: easeInOut,
            }}
          />
        </div>
      </div>
      <ExperienceFood />
      <ArticleCard />
      <ExperienceCuisine />
      <PopularDishes />
      <PopularMenu />
    </div>
  );
};

export default Main;
