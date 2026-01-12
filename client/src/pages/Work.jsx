import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Image } from "@imagekit/react";
import { Outlet, useNavigate } from "react-router-dom";

const Work = () => {
  const navigate = useNavigate();

const locations = [
  { title: "Hospitality Projects", slug: "hospitality-projects", image: "/hospitality.jpg" },
  { title: "Corporate and Industrial Projects", slug: "corporate-and-industrial-projects", image: "/industrial.webp" },
  { title: "Residential and Others", slug: "residential-and-others", image: "/residential.webp" },
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
      <section className="mt-12 mb-10 md:mt-24 md:mb-20 text-center">
        <h1 className="text-5xl  md:text-7xl font-semibold mx-2 opacity-80">
          Structure That Define Standard
        </h1>
        <p className="text-gray-500 font-semibold mt-2">Projects we delivered with disciplined execution, quality construction practices, and adherence to timelines and standards.</p>

      </section>

      <section className="max-w-6xl mx-auto mb-5">
        <button
          className=" mx-4 flex items-start justify-start gap-2 font-medium  mt-4"
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
          className="grid md:grid-rows-2 lg:grid-rows-3 gap-6"
        >
          {locations.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="m-3 relative h-80 rounded-xl overflow-hidden cursor-pointer border border-gray-100 shadow-md hover:shadow-xl transition-all group"
              onClick={() => navigate(`${window.location.href ==='/work'?`/${item.slug}`:`/work/${item.slug}`}`)}
            >
              <Image
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20"></div>

              <div className="absolute bottom-4 left-4 z-10">
                <h3 className="text-white text-4xl font-semibold group-hover:text-amber-300">
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
