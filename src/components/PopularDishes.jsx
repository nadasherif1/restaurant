import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";

SwiperCore.use([Autoplay]);

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
      <h2 className="text-4xl font-bold text-black text-center m-8">
        Popular Dishes
      </h2>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1, 
          },
          640: {
            slidesPerView: 2, 
          },
          1024: {
            slidesPerView: 3, 
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-[70vh]"
      >
        {dishes.map((dish, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-gray-100 w-full h-full overflow-hidden rounded-lg shadow-md">
              <div className="relative w-full h-[75%] overflow-hidden group">
                <Image
                  src={dish.image}
                  alt={dish.title}
                  width={1200}
                  height={800}
                  className="object-cover w-full h-full rounded-t-lg"
                />
                <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-red-500 bg-white rounded-full p-5 text-center w-[120px] font-bold text-2xl">
                    JUST {dish.price}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-2xl text-center font-semibold text-gray-800 mb-2">
                  {dish.title}
                </h3>
                <p className="text-lg text-gray-600 text-center mb-2">
                  {dish.ingredients.join(" • ")}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularDishes;
