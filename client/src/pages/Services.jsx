import React, { useEffect } from "react";
import { FaBuilding, FaHotel, FaShoppingBag, FaTools, FaCity, FaArrowRight } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    id: 1,
    icon: <FaBuilding className="text-blue-600" size={28} />,
    title: "Commercial & Office Construction",
    description:
      "We design and construct modern office spaces and commercial buildings with a focus on durability, safety, and functionality.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Modern architecture", "Sustainable design", "Smart office solutions"]
  },
  {
    id: 2,
    icon: <FaHotel className="text-green-600" size={28} />,
    title: "Hotels & Hospitality Projects",
    description:
      "From luxury hotels to premium resorts, we deliver hospitality projects with high-quality finishing and timely execution.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Luxury interiors", "Efficient layouts", "Guest experience focus"]
  },
  {
    id: 3,
    icon: <FaShoppingBag className="text-yellow-600" size={28} />,
    title: "Retail Spaces & Malls",
    description:
      "We build retail spaces and malls designed for high footfall, smooth customer flow, and strong visual appeal.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["High footfall design", "Modern storefronts", "Customer flow optimization"]
  },
  {
    id: 4,
    icon: <FaCity className="text-purple-600" size={28} />,
    title: "Infrastructure Projects",
    description:
      "We execute large-scale infrastructure projects while maintaining strict quality, safety, and timeline standards.",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    features: ["Large-scale expertise", "Regulatory compliance", "Timely delivery"]
  },
  {
    id: 5,
    icon: <FaTools className="text-red-600" size={28} />,
    title: "Renovation & Remodeling",
    description:
      "We upgrade existing spaces with modern designs while minimizing disruption and maintaining structural integrity.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    features: ["Minimal disruption", "Modern upgrades", "Structural integrity"]
  },
];

const ServiceCard = ({ service, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1
        }
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          onError={(e) => {
            e.target.src = `https://source.unsplash.com/random/600x400/?construction,${service.title.split(' ')[0].toLowerCase()}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-white">
            {service.icon}
            <h3 className="text-xl font-bold mt-2">{service.title}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center text-gray-700">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
        <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
          Learn more <FaArrowRight className="ml-2" />
        </button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Construction Solutions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            We deliver excellence in every project, combining innovative design with expert craftsmanship to build spaces that inspire and endure.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to start your project?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team of experts is here to bring your vision to life. Get in touch with us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Get a Free Quote
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Contact Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
