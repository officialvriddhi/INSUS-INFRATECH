import React from 'react'
import { NavLink } from 'react-router-dom'
import {motion} from 'motion/react'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15   },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
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
  return (
    <div className="navbar bg-base-100 shadow-sm px-6">
        <div className="flex-1">
            <img src='/vite.svg'/>
        </div>
        <div className="flex-none mr-10">
            <motion.ul 
                variants={containerVariants}
                initial="hidden"
                animate="show"
             className="px-2 gap-8 text-xl hidden lg:flex">

                {
                    navItems.map((item) => (
                        <motion.li key={item.name} variants={itemVariants}>
                            <NavLink to={item.path} className={({isActive})=>isActive ? "font-semibold underline underline-offset-4":""}>{item.name}</NavLink>
                        </motion.li>
                    ))
                }

            </motion.ul>
        </div>
</div>
  )
}

export default Navbar