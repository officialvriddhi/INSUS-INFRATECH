import { Image } from "@imagekit/react";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const footerRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show arrow only when footer is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowArrow(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll to Top Arrow */}
      {showArrow && (
        <motion.button
          onClick={scrollToTop}
          drag
          dragElastic={0.5}
          dragMomentum={false}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-16 right-6 z-50 p-3 rounded-full bg-slate-800 text-white shadow-lg hover:bg-slate-700 md:bottom-6"
        >
          <FaArrowUp />
        </motion.button>
      )}

      <motion.footer
        ref={footerRef}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-base-200 text-base-content"
      >
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_auto] gap-10 items-start">

          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <div
              onClick={() => {
                scrollToTop();
                navigate("/");
              }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <Image
                src="/logo3.jpeg"
                alt="Insus Infratech Logo"
                className="w-12 h-12 rounded-full object-contain shadow"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold">Insus Infratech Ltd.</h3>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              Building strong & reliable infrastructure across India with trust,
              quality, and precision since 2005.
            </p>
          </div>

          {/* Quick Links (Right aligned) */}
          <nav className="flex flex-col gap-3 lg:mr-10">
            <h6 className="footer-title">Quick Links</h6>
            <NavLink to="/" onClick={scrollToTop} className="link link-hover transition-all duration-150 ease-in-out hover:underline hover:underline-offset-4">Home</NavLink>
            <NavLink to="/about" onClick={scrollToTop} className="link link-hover transition-all duration-150 ease-in-out hover:underline hover:underline-offset-4">About</NavLink>
            <NavLink to="/work" onClick={scrollToTop} className="link link-hover transition-all duration-150 ease-in-out hover:underline hover:underline-offset-4">Work</NavLink>
            <NavLink to="/services" onClick={scrollToTop} className="link link-hover transition-all duration-150 ease-in-out hover:underline hover:underline-offset-4">Services</NavLink>
            <NavLink to="/contact" onClick={scrollToTop} className="link link-hover transition-all duration-150 ease-in-out hover:underline hover:underline-offset-4">Contact</NavLink>
          </nav>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-300">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-center items-center gap-2 text-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Insus Infratech Ltd. All rights reserved.
              <span className="mx-2 hidden md:inline"> | </span>
              <br className="md:hidden" />
              Designed & Built by{" "}
              <NavLink
                to="/"
                className="relative font-bold after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-slate-800 after:transition-all after:duration-300 hover:after:w-full"
              >
                Vriddhi Team
              </NavLink>
            </p>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
