import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Image } from "@imagekit/react";
import { Outlet, useNavigate } from "react-router-dom";

const Work = () => {
  const navigate = useNavigate();

  const locations = [
    { title: "Indore", image: "/Jaipur.jpeg" },
    { title: "Jaipur", image: "/Jaipur.jpeg" },
    { title: "Ayodhya", image: "/Ayodhya.jpeg" },
    { title: "Lucknow", image: "/Lucknow.jpeg" },
    { title: "Patna", image: "/Lucknow.jpeg" },
    { title: "Bhopal", image: "/Lucknow.jpeg" },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main>
      <section className="mt-32 mb-20 text-center">
        <h1 className="text-7xl font-semibold">
          Structure That Define Standard
        </h1>
        <p>Projects that we have previously worked on</p>

      </section>

      <section className="max-w-6xl mx-auto">
        <button
          className="mb-5 mx-2 flex items-start justify-start gap-2 font-medium  mt-4"
        >
          Click to know more
          <motion.span
            animate={{ x: [0, 8, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            →
          </motion.span>
        </button>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {locations.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              variants={cardVariants}
              className="relative h-80 rounded-xl overflow-hidden cursor-pointer border border-gray-100 shadow-md hover:shadow-xl transition-all group"
              onClick={() => navigate(`/${item.title.toLowerCase()}`)}
            >
              <Image
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20"></div>

              <div className="absolute bottom-4 left-4 z-10">
                <h3 className="text-white text-lg font-semibold group-hover:text-amber-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Outlet />
    </main>
  );
};

export default Work;
