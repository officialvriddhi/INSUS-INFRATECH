import React from "react";
import { motion, useInView } from "motion/react";
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
    // { title: "Patna", image: "/Lucknow.jpeg" },
  ];

  const ref = React.useRef(null);
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
        <h1 className="text-7xl font-semibold">Structure That Define Standard</h1>
        <p>Projects that we have previously worked on</p>
      </section>

      <section className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {locations.map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              variants={cardVariants}
              className="relative h-80 rounded-xl overflow-hidden cursor-pointer border border-gray-100
            shadow-md hover:shadow-xl transition-all group"
              onClick={() => navigate(`/${item.title.toLowerCase()}`)}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Text */}
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
