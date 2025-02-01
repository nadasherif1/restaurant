import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative bg-[#fcf9f4] min-h-screen flex items-center justify-center px-8">
      <div className="max-w-7xl mx-auto text-center lg:flex lg:items-center lg:justify-between space-y-8 lg:space-y-0">
        
        <motion.div
          className="absolute left-10 top-[400px] hidden lg:block"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <img
            src="/about/demo-restaurant-about-04 (1).jpg" 
            alt="Dish Left"
            className="w-48 h-auto"
          />
        </motion.div>
        
        <div className="lg:flex-1 text-left space-y-6 ml-[13%]">
          <div>
            <h3 className="text-red-500 uppercase text-sm font-semibold tracking-wider">
              About Restaurant
            </h3>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800">
              Experience Original <br /> Food Taste of Italy.
            </h2>
          </div>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet adipiscing elit do eiusmod tempor
            incididunt ut labore et dolore magna minim veniam nostrud
            exercitation.
          </p>
          <div className="flex items-center gap-4 mt-6 ">
            <div className="text-5xl font-bold text-black">4.8 |</div>
            <div className="flex flex-col items-center gap-1 text-yellow-500 text-xl">
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
  <span className="text-gray-500 text-lg">Review by Google</span>
</div>

                      </div>
          <p className="text-red-500 font-medium text-lg">
            ❤️ Authentic cultural experience.
          </p>
        </div>

        <div className="relative lg:flex-1 flex items-center justify-center">
          <motion.img
            src="/about/demo-restaurant-about-05.jpg"
            alt="Chef"
            className="w-72 lg:w-[100%] h-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />

          <motion.div
            className="absolute right-[-50px] top-[-50px] hidden lg:block"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <img
              src="/about/demo-restaurant-about-11.png" 
              alt="Dish Right"
              className="w-48 h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
