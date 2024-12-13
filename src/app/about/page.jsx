"use client";
import Image from "next/image";
import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Achievements from "@/components/about/Achievements";
import Restaurantspecial from "@/components/about/Restaurantspecial";
import RestaurantSection from "@/components/about/RestaurantSection";
import Foodteste from "@/components/about/Foodteste"

const About = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setScale(1.05); 
        } else {
          setScale(1); 
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fcf9f4]">
      <h2 className="font-extrabold text-center text-black flex justify-center items-center m-[100px] pt-[100px] text-4xl ">
        ABOUT US
      </h2>
      <span className="text-red-500 text-center flex flex-center justify-center mt-[-60px]">
        - LUXURY RESTAURANT-
      </span>
      <section
        id="about-section"
        className="flex flex-col lg:flex-row gap-8 py-16 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24"
      >
        <motion.div
          className="relative w-full  sm:w-1/2 lg:w-[50%] "
          animate={{ y: [0, -20, 0] }} 
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/about/demo-restaurant-about-01.jpg"
            alt="Dish 1"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div
          className="relative w-full sm:w-1/2 lg:w-[200%] overflow-hidden "
          style={{ overflow: "hidden" }}
          animate={{ scale: scale }} 
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
          }}
        >
          <Image
            src="/about/demo-restaurant-about-02.jpg"
            alt="Dish 2"
            width={600}
            height={400}
            className="w-[800px] h-[500px] object-cover lg:ml-[20%]  "
          />
        </motion.div>
      </section>

      <section className="bg-white py-10 px-4 sm:px-8 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <motion.div
            className="w-full lg:w-[800px] z-0 mt-[-150px] relative"
            style={{ overflow: "hidden" }}
            animate={{ scale: scale }} 
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
            }}
          >
            <Image
              src="/about/demo-restaurant-about-03.jpg"
              alt="Dish on Left"
              width={900}
              height={400}
              className="w-[800px] h-[500px] object-cover"
            />
          </motion.div>

          <div className="w-full lg:w-1/2">
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 text-center lg:text-left">
              The food you eat can be either the safest and most powerful
              medicine or the{" "}
              <span className="border-b border-gray-800 font-bold">
                slowest form of poison.
              </span>
              <br />
              <br />
              <span className="text-black">-Alexander harvard</span>
            </p>
          </div>
        </div>
      </section>
      <Foodteste/>
  <Restaurantspecial/>
  <RestaurantSection/>
      <Achievements/>
      
    </div>
  );
};

export default About;
