'use client'; 

import Image from "next/image";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-6 overflow-hidden">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1 }} 
        className="relative w-full md:w-1/2 flex justify-center mr-[-150px] items-center mt-10 md:mt-0 z-10"
      >
        <Image
          src="/chefs/demo-restaurant-chefs-09.jpg" 
          alt="Chef"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1 }} 
        className="relative w-full md:w-1/2 h-auto flex  items-center justify-center bg-[#d39121] rounded-lg p-8"
      >
        <div className="z-10 text-center md:text-left">
          <p className="text-lg md:text-xl font-light text-white">
            Once you understand the foundations of cooking whatever kind you like.
            whether it's{" "}
            <span className="font-bold underline">french</span>,{" "}
            <span className="font-bold underline">italian</span>, or{" "}
            <span className="font-bold underline">japanese</span> you really don't need a cookbook anymore.
          </p>
          <p className="mt-6 text-lg font-semibold text-white">Tomas Burgess</p>
          <p className="text-sm text-white">Executive Chef</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
