// src/pages/About.jsx
import React from 'react';
import { FaAward, FaUsers, FaProjectDiagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: "40+", label: "Years Experience", icon: <FaAward className="text-4xl" /> },
    { number: "5,000+", label: "Happy Clients", icon: <FaUsers className="text-4xl" /> },
    { number: "15", label: "Master Tailors", icon: <FaProjectDiagram className="text-4xl" /> }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-indigo-700 to-indigo-800 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
        <motion.div 
          className="relative z-10"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold mb-4 font-serif">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            The journey of StitchCraft from a small Milanese atelier to an internationally recognized tailoring house
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                whileHover={{ y: -10 }}
              >
                <div className="text-indigo-600 mb-4 flex justify-center">{stat.icon}</div>
                <h3 className="text-5xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="flex flex-col lg:flex-row items-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Our Humble Beginnings</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                In 1985, Marco Fellini opened a small tailoring shop in Milan with nothing but a sewing machine and a vision. His dedication to traditional techniques quickly earned him a loyal clientele among local professionals.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                What began as a one-man operation soon grew into a respected atelier, attracting clients from across Europe who appreciated Marco's uncompromising standards and innovative designs.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1679836670163-6ebe5fc2bc15?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Vintage tailoring shop" 
                className="rounded-xl shadow-xl w-full transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Meet Our Master Tailors</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each with decades of experience and specialized skills
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            viewport={{ once: true }}
          >
            {[
              { 
                name: "Marco Fellini", 
                role: "Founder & Head Tailor",
                bio: "40+ years experience in bespoke tailoring trained in Milan's finest ateliers.",
                image: "https://images.unsplash.com/photo-1645106281521-86da01d1031d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              },
              { 
                name: "Sophia Ricci", 
                role: "Lead Seamstress",
                bio: "Specializes in women's tailoring and delicate fabric manipulation techniques.",
                image: "https://images.unsplash.com/photo-1744599905681-6774b922d404?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              },
              { 
                name: "Luca Bianchi", 
                role: "Leather Specialist",
                bio: "Master leatherworker creating custom jackets and accessories since 1995.",
                image: "https://images.unsplash.com/photo-1710974481447-fb001ad9ad5a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -10 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;