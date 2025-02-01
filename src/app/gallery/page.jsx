"use client";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/gallery/dia-da-pizza-skkhweuqjcrq.webp", category: "All" },
  { src: "/gallery/Food-Pizza-Basil-Tomato.webp", category: "Vegetarian" },
  { src: "/gallery/times-of-pizza-andheri-west-mumbai-pizza-outlets-0xiz5l1fhk.webp", category: "Nonveg" },
  { src: "/gallery/dia-da-pizza-skkhweuqjcrq.webp", category: "Drinks" },
  { src: "/gallery/Food-Pizza-Basil-Tomato.webp", category: "Dessert" },
  { src: "/gallery/times-of-pizza-andheri-west-mumbai-pizza-outlets-0xiz5l1fhk.webp", category: "Vegetarian" },
  { src: "/gallery/dia-da-pizza-skkhweuqjcrq.webp", category: "Nonveg" },
  { src: "/gallery/Food-Pizza-Basil-Tomato.webp", category: "Dessert" },
  { src: "/gallery/times-of-pizza-andheri-west-mumbai-pizza-outlets-0xiz5l1fhk.webp", category: "Drinks" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <div className="bg-white py-12 px-12">
      <div className="text-center text-5xl font-bold mb-8 text-black">
        Photo Gallery
      </div>
      <div className="text-center text-2xl text-red-600 font-bold">
        - Luxury Restaurant -
      </div>

      <div className="flex justify-center space-x-6 text-lg mb-8 text-gray-500">
        {["All", "Nonveg", "Vegetarian", "Dessert", "Drinks"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`${
              selectedCategory === category
                ? "border-b-2 border-black font-semibold"
                : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg"
          >
            <Image
              src={image.src}
              alt={`Dish${index + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"
              onClick={() => openImage(image.src)}
            >
              <div className="bg-white rounded-full p-3 cursor-pointer">
              <FiSearch className="text-black text-2xl" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative">
            <button
              className="absolute top-0 right-0 bg-white text-black rounded-full p-2 m-2 font-bold"
              onClick={closeImage}
            >
              ✖
            </button>
            <Image
              src={selectedImage}
              alt="Selected"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
