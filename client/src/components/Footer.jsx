import { Image } from "@imagekit/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-base-200 text-base-content">


      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4 items-start">


        <div className="flex flex-col gap-4">
          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/");
            }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Image
              src="/logo3.jpeg"
              alt="logo"
              className="w-12 h-12 rounded-full object-contain shadow-md"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold">Insus Infratech Ltd.</h3>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
            Building strong & reliable infrastructure across India with trust,
            quality, and precision since 2005.
          </p>
        </div>


        <nav className="flex flex-col gap-3">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover block">Construction</a>
          <a className="link link-hover block">Infrastructure</a>
          <a className="link link-hover block">Commercial Projects</a>
          <a className="link link-hover block">Project Management</a>
        </nav>

        <nav className="flex flex-col gap-3">
          <h6 className="footer-title">Quick Links</h6>
          <NavLink to="/" preventScrollReset className="link link-hover block">Home</NavLink>
          <NavLink to="/about" preventScrollReset className="link link-hover block">About</NavLink>
          <NavLink to="/work" preventScrollReset className="link link-hover block">Work</NavLink>
          <NavLink to="/services" preventScrollReset className="link link-hover block">Services</NavLink>
          <NavLink to="/contact" preventScrollReset className="link link-hover block">Contact</NavLink>
        </nav>


        <nav className="flex flex-col gap-3">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover block">Terms of Use</a>
          <a className="link link-hover block">Privacy Policy</a>
          <a className="link link-hover block">Cookie Policy</a>
        </nav>
      </div>


      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-center gap-2 text-center">

          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Insus Infratech Ltd. All rights reserved.  
            <span className="mx-2 hidden md:inline">|</span>
            <br className="md:hidden" />
            Designed & Built by <span className="font-semibold">Vriddhi Team</span>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
