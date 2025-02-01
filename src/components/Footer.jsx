"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTelegram,
  faLinkedin,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faContactBook,
  faMedal,
  faMessage,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  const footerData = [
    {
      icon: faMedal,
      title: "ABOUT RESTAURANT",
      description: "Enjoy a wonderful cafe dining experience",
    },
    {
      icon: faPhone,
      title: "LET'S TALK",
      description: "Phone: 1-800-222-000\nFax: 1-800-222-002",
    },
    {
      icon: faMessage,
      title: "BOOK A TABLE",
      description: "info@yourdomain.com\nhr@yourdomain.com",
    },
    {
      icon: faContactBook,
      title: "CONTACT US",
      description: "Lorem ipsum consectetur adipiscing onsectetur.",
    },
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: faFacebook, label: "Facebook" },
    { href: "https://messenger.com", icon: faFacebookMessenger, label: "Messenger" },
    { href: "https://telegram.org", icon: faTelegram, label: "Telegram" },
    { href: "https://linkedin.com", icon: faLinkedin, label: "LinkedIn" },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap items-center justify-center gap-12 py-8">
          {footerData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-xs w-full sm:w-1/2 lg:w-1/4"
            >
              <div className="text-4xl text-black mb-4">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h3 className="font-bold text-black text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 whitespace-pre-line">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 pt-[50px] mt-8 flex flex-wrap items-center justify-between p-8 sm:p-14">
          <div className="flex items-center gap-4">
            <p className="text-xl text-gray-500">
              © Copyright 2024{" "}
              <span className="font-semibold text-black">Nada</span>
            </p>
          </div>
          <div>
            <Image
              src="/homepage/demo-restaurant-logo-black@2x.webp"
              alt="Restaurant Icon"
              width={200}
              height={60}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black p-4 flex items-center justify-center"
              >
                <FontAwesomeIcon icon={link.icon} size="lg" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
