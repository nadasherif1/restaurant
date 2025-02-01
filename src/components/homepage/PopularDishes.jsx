"use client";

import Image from "next/image";

const dishes = [
  {
    title: "Medium Spicy Chips",
    ingredients: ["Cheese", "Capsicum", "Basil"],
    price: "$35",
    image: "/homepage/demo-restaurant-slider-03.jpg",
  },
  {
    title: "Appeteaser Blatter",
    ingredients: ["Cucumber", "Mushroom", "Basil"],
    price: "$25",
    image: "/homepage/demo-restaurant-slider-02.jpg",
  },
  {
    title: "Chicken Breast Burger",
    ingredients: ["Capsicum", "Parmesan", "Paneer"],
    price: "$40",
    image: "/homepage/demo-restaurant-slider-01.jpg",
  },
  {
    title: "Medium Spicy Chips",
    ingredients: ["Cheese", "Capsicum", "Basil"],
    price: "$35",
    image: "/homepage/demo-restaurant-slider-05.jpg",
  },
  {
    title: "Appeteaser Blatter",
    ingredients: ["Cucumber", "Mushroom", "Basil"],
    price: "$25",
    image: "/homepage/demo-restaurant-slider-04.jpg",
  },
];

const PopularDishes = () => {
  return (
    <div className="bg-white mx-auto overflow-hidden">
      <h2 className="text-4xl font-bold text-black text-center my-8">
        Popular Dishes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-gray-100 rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative w-[90%] h-[90%] rounded-lg">
              <div className="relative w-full h-[200px] overflow-hidden group">
                <Image
                  src={dish.image}
                  alt={dish.title}
                  width={1200}
                  height={800}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-red-500 bg-white rounded-full p-5 text-center w-[120px] font-bold text-2xl">
                    JUST {dish.price}
                  </p>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {dish.title}
                </h3>
                <p className="text-lg text-gray-600 mb-2">
                  {dish.ingredients.join(" • ")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;
