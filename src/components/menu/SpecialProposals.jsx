import { motion } from 'framer-motion';

export default function SpecialProposals() {
  const dishes = [
    {
      name: 'Grilled Steak Marinades',
      oldPrice: '$25.00',
      newPrice: '$19.00',
      rating: '4.8',
      image: '/menu/demo-restaurant-menu-02.jpg',
    },
    {
      name: 'Beef Masala Grill',
      oldPrice: '$24.00',
      newPrice: '$18.00',
      rating: '4.3',
      image: '/menu/demo-restaurant-menu-03.jpg',
    },
    {
      name: 'Slow Cooker Potpourri',
      oldPrice: '$22.00',
      newPrice: '$20.00',
      rating: '4.9',
      image: '/menu/demo-restaurant-menu-04.jpg',
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <h2 className="text-center text-3xl font-bold mb-12 text-black">
        Special Proposals
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {dishes.map((dish, index) => (
          <motion.div
            key={index}
            className="text-center  p-4 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%]"
          >
            <motion.img
              src={dish.image}
              alt={dish.name}
              className="w-36 h-36 mx-auto rounded-full sm:w-48 sm:h-48"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <div className="mt-4">
              <h3 className="text-lg sm:text-xl font-semibold text-black">
                {dish.name}
              </h3>
              <div className="flex justify-center items-center">
                <span className="bg-yellow-500 text-sm sm:text-md p-[5px] ">
                  ★★★★
                </span>
                <span className="text-white p-1 bg-black">
                  {dish.rating}
                </span>
              </div>
              <div className="mt-2 text-gray-500 line-through">
                {dish.oldPrice}
              </div>
              <div className="text-md sm:text-lg font-bold text-green-600">
                {dish.newPrice}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
