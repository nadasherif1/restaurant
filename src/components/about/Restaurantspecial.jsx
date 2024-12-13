"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Restaurantspecial = () => {
  const { ref, inView } = useInView({ triggerOnce: false });

  const articles = [
    {
      id: 1,
      image: "/about/demo-restaurant-about-06.jpg",
      title: "Lorem ipsum dolor sit amet consectetur adipiscing.",
      category: "Private Dining",
    },
    {
      id: 2,
      image: "/about/demo-restaurant-about-07.jpg",
      title: "Lorem ipsum dolor sit amet consectetur adipiscing.",
      category: "The Raw Bar",
    },
    {
      id: 3,
      image: "/about/demo-restaurant-about-08.jpg",
      title: "Lorem ipsum dolor sit amet consectetur adipiscing.",
      category: "Outdoor catering",
    },
  ];

  return (
    <div className="bg-white py-12">
      <motion.div
        className="mb-8 text-center text-2xl font-bold"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-between items-center w-1/6 mx-auto">
          <div className="w-2 h-0.5 mx-auto bg-red-500 "></div>
          <p className="text-red-500 text-sm font-bold">Restaurant facilities</p>
          <div className="w-2 h-0.5 mx-auto bg-red-500"></div>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold mt-2">
          Restaurant Special
        </h2>
      </motion.div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 sm:mx-6 md:mx-10 lg:mx-[100px]">
          {articles.map((article) => (
            <div
              key={article.id}
              className="group relative rounded-lg flex flex-col items-center"
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={300}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover group-hover:brightness-75 transition duration-300 rounded-lg"
                />
              </motion.div>

              <div className="text-center pt-4">
                <h3 className="font-extrabold text-black text-lg sm:text-xl">{article.category}</h3>
                <p className="text-base text-black pt-1">{article.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurantspecial;
