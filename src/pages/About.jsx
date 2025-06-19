// import React, { useState } from 'react'
// import AboutSection from '../components/AboutSection';
// import WhyChooseUs from '../components/WhyChooseUs';
// import VideoSection from '../components/VideoSection';
// import Testimonial from '../components/Testimonial';
// import InstagramSection from '../components/InstagramSection';

// function About() {
//     const [animationsEnabled, setAnimationsEnabled] = useState(false);
//   return (
    
//     <div className="bg-white text-gray-900 min-h-screen">
//       <header className="flex bg-gradient-to-b from-[#0a1a38] to-[#0a1a38] h-[320px]">
//         <section
//             className="relative flex flex-col md:flex-row flex-1 p-8 md:p-16 lg:p-24 justify-center items-center rounded-lg overflow-hidden"
//             style={{
//             backgroundImage:
//                 "url('https://images.unsplash.com/photo-1628454787246-cd6e6accc352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             }}
//         >
//             <div className="absolute inset-0 bg-secondary bg-opacity-90"></div>

//             <div className="relative z-10 flex-1 max-w-[600px] text-white text-center md:text-left mb-8 md:mb-0 md:mr-8 ml-64 mt-24">
//             <img
//                 src="https://preview.colorlib.com/theme/tailor/assets/img/hero/hero-icon.png.webp"
//                 alt="Rotating Icon"
//                 className={`absolute -top-10 md:-top-28 left-1/2 -translate-x-1/2 md:left-0 w-22 h-22 rounded-full} ml-10`}
//                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/000000/FFFFFF?text=Icon'; }}
//             />
//             <div>
//                 <h1 className="text-[52px] md:text-[50px] font-semibold leading-[1.1] mb-6 mt-16 md:mt-0" style={{fontFamily:'Josefin Sans'}}>
//                 About Us
//                 </h1>
//             </div>
//             </div>

//             <div className={`relative z-10 flex-1 flex justify-center items-center} mt-72 left-24`}>
//             <img
//                 alt="Woman measuring fabric on a black mannequin in a tailor shop with shelves of fabric in the background"
//                 className="w-full h-[400px] object-cover rounded-md shadow-xl max-h-[100vh] hover:shadow-2xl transition-shadow max-w-[1200px]"
//                 src="https://preview.colorlib.com/theme/tailor/assets/img/hero/h1_hero1.png.webp"
//                 onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x800/E0E0E0/333333?text=Sewing+Image'; }}
//             />
//             </div>
//         </section>
//       </header>
//             <AboutSection animationsEnabled={animationsEnabled} />
//             <WhyChooseUs animationsEnabled={animationsEnabled} />
//             <VideoSection animationsEnabled={animationsEnabled} />
//             <Testimonial animationsEnabled={animationsEnabled} />
//             <InstagramSection animationsEnabled={animationsEnabled} />
//     </div>
//   )
// }

// export default About


// src/pages/About.jsx
import React from 'react';
import { FaAward, FaUsers, FaProjectDiagram } from 'react-icons/fa';

const About = () => {
  const stats = [
    { number: "40+", label: "Years Experience", icon: <FaAward className="text-3xl" /> },
    { number: "5,000+", label: "Happy Clients", icon: <FaUsers className="text-3xl" /> },
    { number: "15", label: "Master Tailors", icon: <FaProjectDiagram className="text-3xl" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-amber-700 to-amber-800 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4 font-serif">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            The journey of StitchCraft from a small Milanese atelier to an internationally recognized tailoring house
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <div className="text-amber-700 mb-4 flex justify-center">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 font-serif">Our Humble Beginnings</h2>
              <p className="text-lg text-gray-600 mb-6">
                In 1985, Marco Fellini opened a small tailoring shop in Milan with nothing but a sewing machine and a vision. His dedication to traditional techniques quickly earned him a loyal clientele among local professionals.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                What began as a one-man operation soon grew into a respected atelier, attracting clients from across Europe who appreciated Marco's uncompromising standards and innovative designs.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1679836670163-6ebe5fc2bc15?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Vintage tailoring shop" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Meet Our Master Tailors</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each with decades of experience and specialized skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Marco Fellini", role: "Founder & Head Tailor", image: "https://images.unsplash.com/photo-1645106281521-86da01d1031d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { name: "Sophia Ricci", role: "Lead Seamstress", image: "https://images.unsplash.com/photo-1744599905681-6774b922d404?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { name: "Luca Bianchi", role: "Leather Specialist", image: "https://images.unsplash.com/photo-1710974481447-fb001ad9ad5a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-amber-700">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;