import React, { useState } from 'react';
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Image } from '@imagekit/react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  // show navbar after scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 80);
  });

  return (
    <>

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={visible ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-[9999]
        navbar bg-base-100 shadow-md px-3 lg:px-6"
      >
        {/* Logo */}
        <div className="flex-1 cursor-pointer" onClick={() => navigate('/')}>
          <Image
            src="/logo1.jpeg"
            alt="logo"
            className="size-12 rounded-full object-cover shadow-md"
            loading="lazy"
          />
        </div>


        <div className="flex-none hidden md:flex">
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate={visible ? "show" : "hidden"}
            className="px-2 gap-8 text-lg flex"
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


        <div className="flex-none md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <MdClose className="size-8" />
            ) : (
              <MdOutlineMenu className="size-8" />
            )}
          </button>
        </div>
      </motion.div>


      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={menuOpen ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`
          fixed top-[64px] left-0 w-full z-[9998]
          bg-base-100 shadow-lg
          md:hidden
          ${menuOpen ? "block" : "hidden"}
        `}
      >
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate={menuOpen ? "show" : "hidden"}
          className="flex flex-col gap-6 px-6 py-6 text-lg"
        >
          {navItems.map((item) => (
            <motion.li key={item.name} variants={itemVariants}>
              <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)}
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
      </motion.div>
    </>
  );
};

export default Navbar;
