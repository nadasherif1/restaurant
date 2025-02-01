"use client";

import Image from "next/image";

const Last = () => {
  const images = [
    "/story/demo-restaurant-story-02.jpg",
    "/story/demo-restaurant-story-03.jpg",
    "/story/demo-restaurant-story-04.jpg",
    "/story/demo-restaurant-story-02.jpg",
    "/story/demo-restaurant-story-03.jpg",
    "/story/demo-restaurant-story-04.jpg",
  ];

  return (
    <div className="container mx-auto max-w-7xl">
      <h1 className="text-center text-lg text-red-500 font-bold m-[15px]">
        -our last 16 years journey-
      </h1>
      <p className="text-center text-black font-bold p-5 max-w-[600px] mx-auto">
        We are a young and beautiful team with a passion for tasty and
        traditional food, rediscovering and relieving traditional Romanian
        delicacies.
      </p>
      <div className="flex overflow-x-auto space-x-4 no-scrollbar">
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-[300px]">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={300}
              height={200}
              className="rounded-lg w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Last;
