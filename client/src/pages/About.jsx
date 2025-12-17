import React from 'react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'

const About = () => {
  const heroRef = useRef(null)
  const overviewRef = useRef(null)
  const missionRef = useRef(null)
  const leadershipRef = useRef(null)
  const projectsRef = useRef(null)
  const statsRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const overviewInView = useInView(overviewRef, { once: true, amount: 0.2 })
  const missionInView = useInView(missionRef, { once: true, amount: 0.2 })
  const leadershipInView = useInView(leadershipRef, { once: true, amount: 0.2 })
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.2 })
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 })
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const features = [
    "Commercial & Infrastructure Projects",
    "Hotels, Offices, Malls & Auditoriums",
    "Pan-India Project Execution",
    "Quality-Driven Construction"
  ]

  const projects = [
    "Marriott Hotel – Jaipur",
    "Rambagh Palace – Jaipur",
    "Sterling – Ayodhya",
    "Spinny – Lucknow",
    "Dainik Bhaskar Office – Patna",
    "True Value – Indore"
  ]

  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "19+", label: "Years Experience" },
    { value: "10+", label: "Cities Served" },
    { value: "Multiple", label: "Industry Sectors" }
  ]

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-400 text-white py-24 md:py-32 mx-4 md:mx-6 lg:mx-10 mt-6 rounded-3xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10"
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent"
          >
            About INSUS Infratech
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Building trust, delivering excellence, and shaping strong
            infrastructure since 2005.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section ref={overviewRef} className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={overviewInView ? "show" : "hidden"}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <motion.div variants={itemVariants}>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                animate={overviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
              >
                Who We Are
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-600 leading-relaxed text-lg mb-6"
              >
                INSUS Infratech Private Limited is a trusted construction and
                infrastructure company with nearly two decades of experience in
                delivering high-quality commercial and institutional projects.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-600 leading-relaxed text-lg"
              >
                Headquartered in Vidyala Nagar, Jaipur, we have successfully
                executed projects across more than 10 cities in India, including
                Jaipur, Delhi, Indore, Gujarat, Patna, Lucknow, and Ayodhya.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-10 rounded-2xl shadow-xl border border-blue-100"
            >
              <motion.ul
                initial="hidden"
                animate={overviewInView ? "show" : "hidden"}
                variants={containerVariants}
                className="space-y-5"
              >
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-4 text-gray-800 font-medium text-lg"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={overviewInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <FaCheckCircle className="text-blue-600 text-2xl flex-shrink-0" />
                    </motion.div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={missionInView ? "show" : "hidden"}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-10 lg:gap-16"
          >
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow"
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3"
              >
                <span className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
                Our Mission
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 leading-relaxed text-lg"
              >
                To deliver durable, cost-effective, and high-quality construction
                solutions while maintaining the highest standards of safety,
                integrity, and professionalism.
              </motion.p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow"
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.4 }}
                className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3"
              >
                <span className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></span>
                Our Vision
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600 leading-relaxed text-lg"
              >
                To become a nationally recognized infrastructure company built on
                trust, innovation, and long-term client relationships.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section ref={leadershipRef} className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={leadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={leadershipInView ? "show" : "hidden"}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              { name: "Ramvilash Yadav", role: "Founder", exp: "Industry experience since 2005" },
              { name: "Biresh Yadav", role: "Co-Founder", exp: "Industry experience since 2005" }
            ].map((leader, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={leadershipInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center"
                >
                  <span className="text-white text-2xl font-bold">{leader.name.charAt(0)}</span>
                </motion.div>
                <h4 className="text-2xl font-semibold text-center text-gray-900">{leader.name}</h4>
                <p className="text-gray-600 text-center mt-2 text-lg">{leader.role}</p>
                <p className="text-sm text-gray-500 text-center mt-3">{leader.exp}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience & Projects */}
      <section ref={projectsRef} className="bg-gradient-to-br from-gray-50 via-indigo-50/20 to-gray-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Our Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
              We have successfully delivered projects for reputed brands and
              institutions across India, reflecting our ability to handle projects
              of varying scale and complexity.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={projectsInView ? "show" : "hidden"}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.05, rotate: 1 }}
                className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                    {project}
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="text-blue-600"
                  >
                    <FaArrowRight />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-20 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={statsInView ? "show" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center"
              >
                <motion.h3
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                  className="text-5xl md:text-6xl font-bold text-white mb-3 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-gray-300 text-lg md:text-xl"
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 md:py-20 rounded-3xl shadow-2xl text-center relative overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20"
            />
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Let's Build Together
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Planning a commercial or infrastructure project? INSUS Infratech is
                your trusted construction partner.
              </motion.p>
              <motion.a
                href="/contact"
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(234, 179, 8, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-10 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-yellow-300 transition-all shadow-lg"
              >
                Get in Touch
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
