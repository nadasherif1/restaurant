import { easeInOut, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  { icon: "📦", title: "FAST DELIVERY", description: "Within 30 minutes" },
  { icon: "🎖️", title: "ABSOLUTE DINING", description: "Best buffet restaurant" },
  { icon: "🛍️", title: "PICKUP DELIVERY", description: "Grab your food order" },
];

const ExperienceFood = () => {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-6 lg:px-20 container flex flex-col lg:flex-row items-center justify-between gap-8">
        <motion.div
          className="absolute top-[150px] left-0"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: easeInOut }}
        >
          <Image
            src="/homepage/demo-restaurant-home-02.jpg"
            alt="demo-restaurant-home-02"
            width={320}
            height={320}
            className="w-32 md:w-40 lg:w-80"
          />
        </motion.div>
        <div className="relative flex-1 justify-center items-center">
          <Image
            src="/homepage/demo-restaurant-home-04.webp"
            alt="Restaurant Food"
            width={600}
            height={400}
            className="w-full max-w-[500px] md:max-w-[600px]"
          />
        </div>
        <div className="flex-1 text-center lg:text-left z-10 flex flex-col items-center lg:items-start gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-red-500"></div>
            <p className="text-red-500 uppercase tracking-widest text-sm font-semibold">
              Since 1988
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Wonderful Dining <br /> Experience & Food.
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut
            labore et dolore magna minim veniam nostrud exercitation.
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition">
              About Restaurant
            </button>
            <Link href="tel:15547" className="text-black py-3 px-6 text-lg font-medium flex items-center gap-2">
              📞 1-800-222-000
            </Link>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute top-[100px] right-[50px]"
        animate={{ x: [0, 50, 50, 50, 0], y: [0, 50, 0, -50, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/homepage/demo-restaurant-home-03.jpg"
          alt="demo-restaurant-home-03"
          width={320}
          height={320}
          className="w-32 md:w-40 lg:w-48"
        />
      </motion.div>

      <div className="container mx-auto max-w-7xl px-6 py-16 sm:px-6 lg:px-20">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
    {services.map((service, index) => (
      <div
        className="flex flex-col items-center justify-between gap-2 text-center"
        key={index}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white shadow-lg">
          <span className="text-2xl sm:text-3xl">{service.icon}</span>
        </div>
        <div>
          <h3 className="text-md sm:text-lg font-bold mt-4 text-black">{service.title}</h3>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">{service.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>


    </div>
  );
};

export default ExperienceFood;
