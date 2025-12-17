import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

const navItems = [
  { name: "Home", path: "/"},
  { name: "About", path: "/about"},
  { name: "Work", path: "/work"},
  { name: "Services", path: "/services"},
  { name: "Contact", path: "/contact"}
];


const Navbar = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // Show navbar only after user scrolls
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 80) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-[9999] 
      navbar bg-base-100 shadow-md px-6"
    >
      <div className="flex-1">
        <img src="/vite.svg" alt="logo" />
      </div>

      <div className="flex-none mr-10">
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate={visible ? "show" : "hidden"}
          className="px-2 gap-8 text-xl hidden lg:flex"
        >
          {navItems.map((item) => (
            <motion.li key={item.name} variants={itemVariants}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline underline-offset-4"
                    : ""
                }
              >
                {item.name}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
