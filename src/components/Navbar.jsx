"use client";

import { useState, useEffect } from "react";
import { CalendarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home", icon: <CalendarIcon className="h-6 w-6" /> },
  { href: "/about", label: "About", icon: <CalendarIcon className="h-6 w-6" /> },
  { href: "/menu", label: "Menu", icon: <CalendarIcon className="h-6 w-6" /> },
  { href: "/story", label: "Story", icon: <CalendarIcon className="h-6 w-6" /> },
  { href: "/chefs", label: "Chefs", icon: <CalendarIcon className="h-6 w-6" /> },
  { href: "/gallery", label: "Gallery", icon: <CalendarIcon className="h-6 w-6" /> },
  { href: "/blog", label: "Blog", icon: <CalendarIcon className="h-6 w-6" /> },
  { href: "/contact", label: "Contact", icon: <CalendarIcon className="h-6 w-6" /> },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-5 py-3 transition-all duration-300 ${
        scrolled ? "bg-black shadow-md text-white" : "bg-transparent text-white"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* شعار الموقع */}
      <div className="flex items-center gap-4">
        <Image
          src={scrolled ? "/homepage/demo-restaurant-logo-white@2x.webp" : "/homepage/demo-restaurant-logo-black@2x.webp"}
          width={120}
          height={120}
          alt="logo"
          className="max-w-full"
        />
      </div>

      {/* قائمة الروابط - تظهر فقط على اللاب */}
      <ul className="hidden lg:flex items-center space-x-6">
        {links.map((link) => (
          <li key={link.href} className="flex items-center gap-2">
            <Link
              className="px-4 py-2 text-lg font-semibold hover:underline hover:text-white/50 flex items-center"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* زر الحجز - يظهر فقط على اللاب */}
      <motion.button
        className="hidden lg:flex px-6 py-3 font-bold rounded-lg border border-white shadow text-white items-center gap-2 transition-all hover:bg-white hover:text-black"
        whileHover={{ backgroundColor: "white", color: "#000000" }}
        whileTap={{ scale: 0.95 }}
      >
        <CalendarIcon className="h-6 w-6" />
        Book a Table
      </motion.button>

      {/* أيقونة الهوم - تظهر فقط على الهاتف */}
      <button
        className="lg:hidden block text-white"
        onClick={handleDrawerToggle}
      >
        <CalendarIcon className="h-8 w-8" />
      </button>

      {/* القائمة الجانبية Drawer */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-end"
          onClick={handleDrawerToggle}
        >
          <div
            className="w-3/4 max-w-xs bg-black text-white p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              {links.map((link) => (
                <li key={link.href} className="mb-4">
                  <Link
                    href={link.href}
                    className="flex items-center gap-4"
                    onClick={handleDrawerToggle}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
