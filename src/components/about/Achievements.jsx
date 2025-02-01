"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Achievements = () => {
  const awards = [
    { src: "/about/demo-restaurant-about-award-01.jpg", alt: "Award 1" },
    { src: "/about/demo-restaurant-about-award-02.jpg", alt: "Award 3" },
    { src: "/about/demo-restaurant-about-award-03.jpg", alt: "Award 4" },
    { src: "/about/demo-restaurant-about-award-04.jpg", alt: "Award 5" },
  ];

  const animationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className=" bg-white py-16">
      <div className="flex flex-wrap justify-center mx-auto gap-8">
        {/* Section Title */}
        <div className="text-center mt-4 sm:mt-[10px] sm:pl-[150px]">
          <span className="text-red-500 mt-2 block font-bold">
            - AWARDS AND HONOURS -
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            ACHIEVEMENTS
          </h2>
        </div>

        {/* Awards Section */}
        {awards.map((award, index) => (
          <motion.div
            key={index}
            className="w-[120px] sm:w-[150px] lg:w-[120px] h-auto mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={animationVariants}
          >
            <Image
              src={award.src}
              alt={award.alt}
              width={200}
              height={200}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

