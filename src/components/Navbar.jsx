"use client";
import { useState, useEffect } from "react";
import { CalendarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupIcon from "@mui/icons-material/Group";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const links = [
  { href: "/", label: "Home", icon: <HomeIcon /> },
  { href: "/about", label: "About", icon: <InfoIcon /> },
  { href: "/menu", label: "Menu", icon: <RestaurantMenuIcon /> },
  { href: "/story", label: "Story", icon: <MenuBookIcon /> },
  { href: "/chefs", label: "Chefs", icon: <GroupIcon /> },
  { href: "/gallery", label: "Gallery", icon: <PhotoLibraryIcon /> },
  { href: "/blog", label: "Blog", icon: <MenuBookIcon /> },
  { href: "/contact", label: "Contact", icon: <ContactMailIcon /> },
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
      <div className="flex items-center gap-4">
        <Image
          src={scrolled ? "/homepage/demo-restaurant-logo-white@2x.webp" : "/homepage/demo-restaurant-logo-black@2x.webp"}
          width={120}
          height={120}
          alt="logo"
          className="max-w-full"
        />
      </div>

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

      <motion.button
        className="hidden lg:flex px-6 py-3 font-bold rounded-lg border border-white shadow text-white items-center gap-2 transition-all hover:bg-white hover:text-black"
        whileHover={{ backgroundColor: "white", color: "#000000" }}
        whileTap={{ scale: 0.95 }}
      >
        <CalendarIcon className="h-6 w-6" />
        Book a Table
      </motion.button>

      <IconButton edge="end" className="lg:hidden" color="inherit" onClick={handleDrawerToggle}>
        <HomeIcon fontSize="large" />
      </IconButton>

      <Drawer anchor="right" open={openMenu} onClose={handleDrawerToggle} PaperProps={{ sx: { backgroundColor: "black" } }}>
        <div className="w-full max-w-xl p-5 mx-auto overflow-hidden">
          <List>
            {links.map((link) => (
              <div key={link.href}>
                <ListItem button onClick={handleDrawerToggle} className="text-white">
                  <Link href={link.href} className="flex items-center justify-start w-full">
                    <span className="flex items-center justify-center w-10 h-10">{link.icon}</span>
                    <ListItemText primary={link.label} className="ml-4 text-white" />
                  </Link>
                </ListItem>
                <hr className="border-gray-700" />
              </div>
            ))}
          </List>
        </div>
      </Drawer>
    </motion.nav>
  );
};

export default Navbar;
