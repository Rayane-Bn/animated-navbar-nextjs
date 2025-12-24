"use client";

import React, { useState, useRef, useEffect } from "react";
import { RiHome5Line } from "react-icons/ri";
import { IoPersonOutline , IoCalendarClearOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const WAVE_WIDTH = 110;

const Navbar = () => {
  const pathname = usePathname(); 
  const [activeIndex, setActiveIndex] = useState(0);
  const [xOffset, setXOffset] = useState(0);

  const containerRef = useRef(null);
  const tabRefs = useRef([]);

   const navItems = [
    { icon: RiHome5Line, label: "Home", path: "/home" },
    { icon: HiOutlineUserGroup, label: "Organizers", path: "/organizers" },
    { icon: IoCalendarClearOutline, label: "Agenda", path: "/agenda" },
    { icon: IoPersonOutline, label: "Profile", path: "/profile" },
  ];

    useEffect(() => {
    const currentIndex = navItems.findIndex(item => item.path === pathname);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [pathname]);

  const updatePosition = () => {
    const container = containerRef.current;
    const tab = tabRefs.current[activeIndex];

    if (!container || !tab) return;

    const containerRect = container.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();

    const tabCenter = tabRect.left - containerRect.left + tabRect.width / 2;

    setXOffset(tabCenter - WAVE_WIDTH / 2);
  };

  useEffect(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [activeIndex]);

  return (
    <nav className="fixed bottom-0 h-18  left-0 right-0 bg-white shadow-[0_-30px_50px_rgba(0,0,0,0.15)]">
      {/* Wave */}
      <motion.svg
        width={WAVE_WIDTH}
        height={72}
        viewBox="0 0 110 72"
        className="absolute bottom-0"
        animate={{ x: xOffset }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <path
          fill="rgba(0,0,0,0.15)"
          d="M 20 0 H 0 c 12 0 20 8 20 20 c 0 12 16 24 35 24 s 35 -12 35 -24 c 0 -12 8 -20 20 -20 H 20 z"
        />
      </motion.svg>

      {/* Tabs */}
      <div
        ref={containerRef}
        className="flex justify-evenly items-start relative"
      >
       {navItems.map((item, index) => (
  <TabBarComponent
    key={index}
    ref={(el) => (tabRefs.current[index] = el)}
    active={activeIndex === index}
    icon={item.icon}
    label={item.label} // pass label
    onPress={() => setActiveIndex(index)}
  />
))}

      </div>
    </nav>
  );
};

// ---------------------------------------------------

const TabBarComponent = React.forwardRef(
  ({ active, icon: Icon, onPress , label }, ref) => {
    return (
      <Link href={`/${label.toLowerCase()}`} ref={ref} >
        <button
        ref={ref}
        onClick={onPress}
        className="relative flex items-center justify-center w-15 h-15 "
      >
        {/* Blue circle */}
        <motion.div
          className="absolute w-16 h-16 rounded-full bg-[#06A4FF] cursor-pointer"
          animate={{
            scale: active ? 1 : 0,
            y: active ? -27 : 0, // 👈 move up
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />

        {/* Icon */}
        <motion.div
          animate={{
            y: active ? -27 : 0, // 👈 same value
            scale: active ? 1.1 : 1,
            opacity: active ? 1 : 0.6,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          
          <Icon size={30} className={`cursor-pointer ${active ? "text-white" : "text-black"}`} />

          
        </motion.div>

        {/* Label */}
        <motion.span
          className="mt-1 text-sm font-medium text-black absolute top-12"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: active ? 1 : 0, y: active ? -5 : 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {label}
        </motion.span>
        

        

       
        
      </button>
      </Link>
      
    );
  }
);

TabBarComponent.displayName = "TabBarComponent"; 
export default Navbar;
