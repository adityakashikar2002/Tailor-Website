// import { useState } from 'react';
// import { FaHome, FaMobileAlt, FaEnvelope, FaExclamation } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the data to your backend
//     console.log('Form submitted:', formData);
    
//     // Show success toast
//     toast.success('Message sent successfully!', {
//       position: "top-center",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });

//     // Reset form
//     setFormData({
//       name: '',
//       email: '',
//       subject: '',
//       message: ''
//     });
//   };

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
//                 Contact
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
//         </header>
//       <div className="max-w-[full] ml-40 mr-40 px-4 py-12"> {/* Added px-4 py-12 for consistent spacing */}
//         {/* Google Maps Section */}
//         <div className="bg-gray-200 h-64 md:h-96 flex flex-col justify-center items-center text-center">
//           <div className="w-full h-full">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89323470835!2d77.06889972250038!3d28.527280343925776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
//               className="w-full h-full border-0"
//               allowFullScreen=""
//               loading="lazy"
//               title="Our Location in Delhi"
//             ></iframe>
//           </div>
//         </div>

//         {/* Contact Form and Info Section */}
//         <div className="mt-10 md:mt-16 flex flex-col md:flex-row md:justify-between ml-24 mr-24">
//           {/* Contact Form */}
//           <form onSubmit={handleSubmit} className="flex-1 max-w-3xl">
//             <h2 className="font-semibold text-lg mb-4">Get in Touch</h2>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Enter Message"
//               className="w-full border border-gray-300 text-xs text-gray-700 resize-none h-28 p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-400"
//               required
//             ></textarea>
//             <div className="flex flex-col md:flex-row gap-4 mb-4">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 className="flex-1 border border-gray-300 text-xs text-gray-700 p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 className="flex-1 border border-gray-300 text-xs text-gray-700 p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
//                 required
//               />
//             </div>
//             <input
//               type="text"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               placeholder="Enter Subject"
//               className="w-full border border-gray-300 text-xs text-gray-700 p-2 mb-6 focus:outline-none focus:ring-1 focus:ring-gray-400"
//               required
//             />
//             <button
//               type="submit"
//               className="text-xs text-accent border border-accent px-6 py-2 hover:bg-primary -700 hover:text-white transition"
//             >
//               Send
//             </button>
//           </form>

//           {/* Contact Information */}
//           <div className="mt-10 md:mt-0 md:ml-12 flex flex-col gap-6 text-xs text-gray-700 max-w-xs">
//             <div className="flex items-start gap-3">
//               <FaHome className="mt-1 text-gray-600 text-[24px]" />
//               <div>
//                 <p className="font-semibold text-[16px] text-gray-900">Connaught Place, New Delhi</p>
//                 <p className='text-[14px] mt-1'>Delhi, India 110001</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-3">
//               <FaMobileAlt className="mt-1 text-gray-600 text-[24px]" />
//               <div>
//                 <p className="font-semibold text-[16px] text-gray-900">+91 11 2336 5358</p>
//                 <p className='text-[14px] mt-1'>Mon to Fri 9am to 6pm</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-3">
//               <FaEnvelope className="mt-1 text-gray-600 text-[24px]" />
//               <div>
//                 <p className="font-semibold text-[16px] text-gray-900">tailorshop@gmail.com</p>
//                 <p className='text-[14px] mt-1'>Send us your query anytime!</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;





// src/pages/Contact.jsx
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-amber-700 to-amber-800 flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628454787246-cd6e6accc352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4 font-serif">Visit Our Atelier</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Schedule a consultation with our master tailors to begin your bespoke journey
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 font-serif">Get In Touch</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-serif">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-amber-700 mr-4 mt-1">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Our Atelier</h4>
                      <p className="text-gray-600">123 Tailor's Lane<br />Fashion District, NY 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-amber-700 mr-4 mt-1">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600">(212) 555-1234</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-amber-700 mr-4 mt-1">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">hello@stitchcraft.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-amber-700 mr-4 mt-1">
                      <FaClock className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2152567513665!2d-73.9878449240175!3d40.74844097138978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1687893123456!5m2!1sen!2sus" 
                    width="100%" 
                    height="300" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;