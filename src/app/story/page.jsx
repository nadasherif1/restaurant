"use client";
import Last from "@/components/story/Last"
import { useState } from "react";
import Image from "next/image";
import Achievements from "@/components/story/Achievement";
const OurStorySection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-20">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          OUR STORY
        </h1>
        <p className="text-red-500 text-sm uppercase tracking-widest">
          - RESTAURANT SUCCESS -
        </p>
      </div>
      <div className="relative max-w-5xl mx-auto">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/story/demo-restaurant-story-01.jpg"
            alt="Story Image"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={openModal}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <circle cx="12" cy="12" r="10" stroke="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden max-w-6xl w-[100%]">
            <div className="relative pb-[56.25%]"> 
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/cfXHhfNy7tU" 
                title="Our Story Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
            <Last/>
<Achievements/>
    </section>
         

  );

};

export default OurStorySection;
