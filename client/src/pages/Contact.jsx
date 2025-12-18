import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full bg-gray-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------- Heading ---------- */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Let’s discuss your next construction or infrastructure project.
            Our team is ready to assist you.
          </p>
        </div>

        {/* ---------- Quick Contact Cards ---------- */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {/* Call */}
          <a
            href="tel:+919XXXXXXXXX"
            className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition"
          >
            <FaPhoneAlt className="text-green-600 text-2xl" />
            <div>
              <h4 className="font-semibold text-gray-900">Call Us</h4>
              <p className="text-gray-600">+91 9XXXXXXXXX</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:contact@insusinfratech.com"
            className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition"
          >
            <FaEnvelope className="text-blue-600 text-2xl" />
            <div>
              <h4 className="font-semibold text-gray-900">Email Us</h4>
              <p className="text-gray-600">contact@insusinfratech.com</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition"
          >
            <FaWhatsapp className="text-green-500 text-2xl" />
            <div>
              <h4 className="font-semibold text-gray-900">WhatsApp</h4>
              <p className="text-gray-600">Quick chat with our team</p>
            </div>
          </a>

        </div>

        {/* ---------- Form + Address ---------- */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md border">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Request a Call Back
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Tell us about your project"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Request Call Back
              </button>
            </form>
          </div>

          {/* Address & Info */}
          <div className="bg-white p-8 rounded-xl shadow-md border">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Office Address
            </h3>

            <div className="flex items-start gap-4 mb-6">
              <FaMapMarkerAlt className="text-red-500 text-2xl mt-1" />
              <p className="text-gray-600 leading-relaxed">
                INSUS INFRATECH Private Limited<br />
                Vidyalay Nagar, Jaipur<br />
                Rajasthan, India
              </p>
            </div>

            <p className="text-gray-600 mb-2">
              <strong>Working Hours:</strong>
            </p>
            <p className="text-gray-600">
              Monday – Saturday<br />
              9:00 AM – 6:00 PM
            </p>

            {/* Map (optional – safe placeholder) */}
            <div className="mt-8 rounded-lg overflow-hidden">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Jaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-48 border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
