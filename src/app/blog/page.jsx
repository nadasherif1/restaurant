"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const ArticleCard = () => {
  const articles = [
    {
      id: 1,
      image: "/homepage/demo-restaurant-slider-01.jpg",
      title: "NEVER EAT MORE THAN YOU CAN LIFE.",
      category: "RESTAURANT",
    },
    {
      id: 2,
      image: "/homepage/demo-restaurant-slider-02.jpg",
      title: "LIFE IS UNCERTAIN, EAT DESSERT FIRST.",
      category: "RESTAURANT",
    },
    {
      id: 3,
      image: "/homepage/demo-restaurant-slider-03.jpg",
      title: "FOOD SIMPLY ISN'T IMPORTANT TO ME.",
      category: "RESTAURANT",
    },
    {
      id: 4,
      image: "/homepage/demo-restaurant-slider-01.jpg",
      title: "NEVER EAT MORE THAN YOU CAN LIFE.",
      category: "RESTAURANT",
    },
    {
      id: 5,
      image: "/homepage/demo-restaurant-slider-02.jpg",
      title: "LIFE IS UNCERTAIN, EAT DESSERT FIRST.",
      category: "RESTAURANT",
    },
    {
      id: 6,
      image: "/homepage/demo-restaurant-slider-03.jpg",
      title: "FOOD SIMPLY ISN'T IMPORTANT TO ME.",
      category: "RESTAURANT",
    },
    {
      id: 7,
      image: "/homepage/demo-restaurant-slider-01.jpg",
      title: "NEVER EAT MORE THAN YOU CAN LIFE.",
      category: "RESTAURANT",
    },
    {
      id: 8,
      image: "/homepage/demo-restaurant-slider-02.jpg",
      title: "LIFE IS UNCERTAIN, EAT DESSERT FIRST.",
      category: "RESTAURANT",
    },
    {
      id: 9,
      image: "/homepage/demo-restaurant-slider-03.jpg",
      title: "FOOD SIMPLY ISN'T IMPORTANT TO ME.",
      category: "RESTAURANT",
    },
    {
      id: 10,
      image: "/homepage/demo-restaurant-slider-01.jpg",
      title: "NEVER EAT MORE THAN YOU CAN LIFE.",
      category: "RESTAURANT",
    },
    {
      id: 11,
      image: "/homepage/demo-restaurant-slider-02.jpg",
      title: "LIFE IS UNCERTAIN, EAT DESSERT FIRST.",
      category: "RESTAURANT",
    },
    {
      id: 12,
      image: "/homepage/demo-restaurant-slider-03.jpg",
      title: "FOOD SIMPLY ISN'T IMPORTANT TO ME.",
      category: "RESTAURANT",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + articles.length) % articles.length
    );
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
    document.getElementById(`article-${index}`).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white py-12">
      <motion.div
        className="mb-8 text-center text-2xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-between items-center w-1/6 mx-auto">
          <div className="w-2 h-0.5 mx-auto bg-red-500 "></div>
          <p className="text-red-500 text-sm font-bold">FROM OUR BLOG</p>
          <div className="w-2 h-0.5 mx-auto bg-red-500"></div>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold mt-2">
          RECENT ARTICLES
        </h2>
      </motion.div>

      <div className="container mx-auto">
        <div className="grid mx-4 sm:mx-6 md:mx-10 lg:mx-[100px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={article.id}
              id={`article-${index}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={300}
                  className="w-[91%] lg:w-full h-48 sm:h-56 md:h-64 object-cover group-hover:brightness-75 transition duration-300"
                />
              </motion.div>

              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <h3 className="font-bold text-base sm:text-lg lg:text-xl">
                  {article.title}
                </h3>
              </div>

              <button className="absolute top-4 left-4 bg-white text-black font-medium px-4 py-2 rounded-md transition duration-300 hover:bg-transparent hover:text-white hover:border hover:border-white">
                Restaurant
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-6">
        
        <button
          onClick={handlePrev}
          className="text-white bg-black rounded-full p-2"
        >
          &#60;
        </button>

      
        {articles.map((article, index) => (
          <button
            key={article.id}
            onClick={() => handleSelect(index)}
            className={`${
              index === currentIndex
                ? "text-red-500 font-bold"
                : "text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}

        
        <button
          onClick={handleNext}
          className="text-white bg-black rounded-full p-2"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
