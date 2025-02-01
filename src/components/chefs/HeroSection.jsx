"use client";
import { motion } from "framer-motion";

export default function ChefSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-50 px-6 relative">
      <motion.div
        className="relative lg:w-[40%] w-full flex justify-center"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <img
          src="/chefs/demo-restaurant-the-chefs-07.jpg"
          alt="Chef"
          className="rounded-lg shadow-lg w-3/4 lg:w-full"
        />
      </motion.div>

      <div className="absolute lg:static lg:w-[36%] w-[90%] bg-white p-8 rounded-lg shadow-lg mt-6 lg:mt-0 lg:ml-[-60px] lg:mt-[200px] text-center lg:text-left lg:h-[70vh] p-[50px] flex flex-col justify-center z-0">
        <h2 className="text-3xl lg:text-4xl font-bold text-yellow-600">
          HERMAN MILLER
        </h2>
        <h3 className="text-lg lg:text-xl text-gray-600 mt-2">
          HEAD CHEF AND OWNER
        </h3>
        <hr className="my-4 border-yellow-500" />
        <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
          Lorem ipsum amet consectetur pellentesque blandit ultrices purus
          suspendisse iaculis ultricies sagittis. Proin vulputate eleifend cras
          lacinia iaculis feugiat egestas neque sodales.
        </p>
        <p className="mt-4 font-bold italic text-2xl text-gray-900">
          Herman Miller
        </p>
      </div>
    </section>
  );
}
