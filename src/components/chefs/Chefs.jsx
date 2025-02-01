import Image from "next/image";
import Link from "next/link";

const Chefs = () => {
  const chefs = [
    {
      name: "John Richards",
      cuisine: "Indian cuisine",
      img: "/chefs/happy-professional-chef-stockcake.webp",
      socials: [
        { platform: "facebook", link: "https://facebook.com" },
        { platform: "instagram", link: "https://instagram.com" },
        { platform: "twitter", link: "https://twitter.com" },
      ],
    },
    {
      name: "Queen Ferrari",
      cuisine: "Chinese cuisine",
      img: "/chefs/make-me-a-blonde-1fb427d5_0_m.webp",
      socials: [
        { platform: "facebook", link: "https://facebook.com" },
        { platform: "instagram", link: "https://instagram.com" },
        { platform: "twitter", link: "https://twitter.com" },
      ],
    },
    {
      name: "Marta Warner",
      cuisine: "Italian cuisine",
      img: "/chefs/make-me-a-chef-2070f1a8_0_m.webp",
      socials: [
        { platform: "facebook", link: "https://facebook.com" },
        { platform: "instagram", link: "https://instagram.com" },
        { platform: "twitter", link: "https://twitter.com" },
      ],
    },
    {
      name: "Carla Martinez",
      cuisine: "Spanish cuisine",
      img: "/chefs/make-me-a-blonde-63126f93_0_m.webp",
      socials: [
        { platform: "facebook", link: "https://facebook.com" },
        { platform: "instagram", link: "https://instagram.com" },
        { platform: "twitter", link: "https://twitter.com" },
      ],
    },
    {
        name: "Queen Ferrari",
        cuisine: "Chinese cuisine",
        img: "/chefs/make-me-a-blonde-1fb427d5_0_m.webp",
        socials: [
          { platform: "facebook", link: "https://facebook.com" },
          { platform: "instagram", link: "https://instagram.com" },
          { platform: "twitter", link: "https://twitter.com" },
        ],
      },
      {
        name: "Marta Warner",
        cuisine: "Italian cuisine",
        img: "/chefs/make-me-a-chef-2070f1a8_0_m.webp",
        socials: [
          { platform: "facebook", link: "https://facebook.com" },
          { platform: "instagram", link: "https://instagram.com" },
          { platform: "twitter", link: "https://twitter.com" },
        ],
      },
      {
        name: "Carla Martinez",
        cuisine: "Spanish cuisine",
        img: "/chefs/make-me-a-blonde-63126f93_0_m.webp",
        socials: [
          { platform: "facebook", link: "https://facebook.com" },
          { platform: "instagram", link: "https://instagram.com" },
          { platform: "twitter", link: "https://twitter.com" },
        ],
      },
      {
        name: "Queen Ferrari",
        cuisine: "Chinese cuisine",
        img: "/chefs/make-a-female-chef-bceef51f_0_m.webp",
        socials: [
          { platform: "facebook", link: "https://facebook.com" },
          { platform: "instagram", link: "https://instagram.com" },
          { platform: "twitter", link: "https://twitter.com" },
        ],
      },
      {
        name: "Marta Warner",
        cuisine: "Italian cuisine",
        img: "/chefs/make-me-a-chef-2070f1a8_0_m.webp",
        socials: [
          { platform: "facebook", link: "https://facebook.com" },
          { platform: "instagram", link: "https://instagram.com" },
          { platform: "twitter", link: "https://twitter.com" },
        ],
      },
      {
        name: "Carla Martinez",
        cuisine: "Spanish cuisine",
        img: "/chefs/make-me-a-blonde-63126f93_0_m.webp",
        socials: [
          { platform: "facebook", link: "https://facebook.com" },
          { platform: "instagram", link: "https://instagram.com" },
          { platform: "twitter", link: "https://twitter.com" },
        ],
      },
  ];
  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center">
      <p className="text-3xl lg:text-4xl font-bold text-red-500 text-center py-5">
        - Professional chef -
      </p>
      <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-600">
        Heart of kitchen
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-[70%]">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="relative group w-full max-w-lg  overflow-hidden "
          >
            <div className="relative w-full h-64">
              <Image
                src={chef.img}
                alt={chef.name}
                layout="fill"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-4 left-[100px] opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center gap-4">
                {chef.socials.map(({ platform, link }, i) => (
                  <Link
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-yellow-400"
                  >
                    <i className={`fab fa-${platform}`}></i>
                  </Link>
                ))}
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl text-black font-semibold">{chef.name}</h3>
              <p className="text-gray-500">{chef.cuisine}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
