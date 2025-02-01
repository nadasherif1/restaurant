"use client";
import Image from "next/image";

const Achievements = () => {
  const awards = [
    {
      image: "/story/demo-restaurant-about-award-04 (1).jpg",
      title: "Restaurant choice award",
      year: "2017",
    },
    {
      image: "/story/demo-restaurant-about-award-03 (1).jpg",
      title: "Luxury restaurant award",
      year: "2019",
    },
    {
      image: "/story/demo-restaurant-about-award-02 (1).jpg",
      title: "British best kebab award",
      year: "2020",
    },
    {
      image: "/story/demo-restaurant-about-award-04 (1).jpg",
      title: "Restaurant choice award",
      year: "2017",
    },
  
  ];

  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="text-center mb-10">
        <p className="text-red-500 text-sm uppercase tracking-widest">
          - Awards and Honours -
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Achievements
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {awards.map((award, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 p-4 text-center"
          >
            <div className="w-full h-32 flex items-center justify-center">
              <Image
                src={award.image}
                alt={award.title}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <p className="mt-4 font-medium text-gray-700">
              {award.title} - <span className="font-bold">{award.year}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
