"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "AI Engineer", href: "#ai-engineer" },
  { name: "Data Analyst", href: "#data-analyst" },
  { name: "Writer", href: "#writer" },
  { name: "Musician", href: "#musician" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 h-1 bg-indigo-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress, width: "100%" }}
      />
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md bg-black/40 py-4 shadow-lg" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 text-2xl tracking-widest drop-shadow-md">
            Aakash Sehrawat
          </div>
          <ul className="flex space-x-4 md:space-x-6 text-sm md:text-base font-medium text-gray-300">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
