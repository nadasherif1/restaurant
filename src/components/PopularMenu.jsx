"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  { id: "nonveg", name: "Nonveg" },
  { id: "vegetarian", name: "Vegetarian" },
  { id: "dessert", name: "Dessert" },
  { id: "drinks", name: "Drinks" },
];

const dishesData = {
  nonveg: [
    { id: 1, name: "Boiled Organic Egg", price: "$12", image: "/homepage/demo-restaurant-tab-05.jpg" },
    { id: 2, name: "Chicken Breast Burger", price: "$10", image: "/homepage/demo-restaurant-tab-05.jpg" },
    { id: 3, name: "Medium Spicy Chips", price: "$8", image: "/homepage/demo-restaurant-tab-05.jpg" },
  ],
  vegetarian: [
    { id: 1, name: "Veggie Salad", price: "$9.00", image: "/homepage/demo-restaurant-tab-05.jpg" },
    { id: 2, name: "Grilled Paneer", price: "$11.00", image: "/homepage/demo-restaurant-tab-05.jpg" },
  ],
  dessert: [
    { id: 1, name: "Chocolate Cake", price: "$15.00", image: "/homepage/demo-restaurant-tab-05.jpg" },
    { id: 2, name: "Ice Cream", price: "$7.00", image: "/homepage/demo-restaurant-tab-05.jpg" },
  ],
  drinks: [
    { id: 1, name: "Orange Juice", price: "$5.00", image: "/homepage/demo-restaurant-tab-05.jpg" },
    { id: 2, name: "Lemon Soda", price: "$4.00", image: "/homepage/demo-restaurant-tab-05.jpg" },
  ],
};

const PopularMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("nonveg");

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="bg-white py-10 px-5">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-black">Popular Menu</h2>

      {/* الأزرار */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`text-sm sm:text-lg font-medium px-4 py-2 rounded ${
              selectedCategory === category.id
                ? "text-orange-600 underline"
                : "text-gray-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* الأطباق */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-6">
        {dishesData[selectedCategory].map((dish) => (
          <motion.div
            key={dish.id}
            whileHover={{
              x: [0, -10, 0],
              transition: { duration: 0.5 },
            }}
            className="flex items-center space-x-4 p-4 shadow-lg rounded-lg bg-gray-50"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
                {dish.name}
                <span className="text-gray-300 pl-[10px]">.....................</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Lorem ipsum has been the industry.
              </p>
            </div>
            <p className="text-sm sm:text-lg font-bold text-gray-800">{dish.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
