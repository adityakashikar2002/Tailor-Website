// // import React from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faTwitter, faFacebookF, faPinterestP } from '@fortawesome/free-brands-svg-icons';
// // import { Link } from 'react-router-dom';

// // const Footer = () => {
// //   return (
// //     <div className="bg-secondary">
// //       <footer className="relative flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between max-w-[1200px] mx-auto px-6 md:px-12 py-12 gap-12 md:gap-0">
// //         <div className="flex-shrink-0 w-full md:w-[80%] -ml-96 mt-10">
// //           <img
// //             alt="Map of New York and Jersey City with streets and parks in grayscale"
// //             className="w-full h-full rounded-sm"
// //             src="https://preview.colorlib.com/theme/tailor/assets/img/gallery/map.png.webp"
// //           />
// //         </div>
// //         <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-[60%] text-primary ml-32">
// //           <h2 className="text-3xl font-semibold mb-4">
// //             <Link to="/" className="text-[28px] font-semibold text-primary hover:text-accent transition-colors">
// //               Tailor.
// //             </Link>
// //           </h2>
// //           <p className="text-white mb-6 max-w-xs leading-relaxed">
// //             Lorem ipsum dolor sit amet, consectetur adipiscing.
// //           </p>
// //           <p className="text-[22px] mb-1 font-light hover:underline hover:text-accent transition-colors">(80) 783 367-3904</p>
// //           <p className="text-xs mb-6 hover:underline hover:text-accent transition-colors">(80) 783 367-3904</p>
// //           <div className="flex gap-4">
// //             <a aria-label="Twitter" className="w-9 h-9 rounded-full bg-[#1a254a] flex items-center justify-center text-primary hover:text-white hover:animate-flip transition" href="#">
// //               <FontAwesomeIcon icon={faTwitter} />
// //             </a>
// //             <a aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#1a254a] flex items-center justify-center text-primary hover:text-white hover:animate-flip transition" href="#">
// //               <FontAwesomeIcon icon={faFacebookF} />
// //             </a>
// //             <a aria-label="Pinterest" className="w-9 h-9 rounded-full bg-[#1a254a] flex items-center justify-center text-primary hover:text-white hover:animate-flip transition" href="#">
// //               <FontAwesomeIcon icon={faPinterestP} />
// //             </a>
// //           </div>
// //         </div>
// //         <div className="w-full md:w-[25%] text-white">
// //           <h3 className="text-primary font-semibold mb-6 text-[20px]">Our solutions</h3>
// //           <nav className="flex flex-col gap-3 text-sm">
// //             <a className="hover:underline hover:text-accent transition-colors" href="#">Home</a>
// //             <a className="hover:underline hover:text-accent transition-colors" href="#">About</a>
// //             <a className="hover:underline hover:text-accent transition-colors" href="#">Services</a>
// //             <a className="hover:underline hover:text-accent transition-colors" href="#">Blog</a>
// //             <a className="hover:underline hover:text-accent transition-colors" href="#">Contact</a>
// //           </nav>
// //         </div>
// //       </footer>
// //       <div className="max-w-[1200px] mx-auto px-6 md:px-12 pb-6 text-center text-white text-xs">
// //         Copyright ©2025 All rights reserved | This template is made with
// //         <span aria-label="heart" className="text-white" role="img"> ❤ </span>
// //         by
// //         <a className="text-primary hover:underline" href="https://colorlib.com" target="_blank" rel="noopener noreferrer"> Colorlib</a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Footer;



// // src/components/Footer.jsx
// import React from 'react';
// import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white pt-20 pb-10">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//           <div>
//             <h3 className="text-2xl font-bold text-amber-500 mb-6 font-serif">StitchCraft</h3>
//             <p className="mb-6">
//               Crafting exceptional garments with traditional techniques and modern sensibility since 1985.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
//                 <FaFacebook className="text-xl" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
//                 <FaInstagram className="text-xl" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
//                 <FaTwitter className="text-xl" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
//                 <FaPinterest className="text-xl" />
//               </a>
//             </div>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-bold mb-6">Quick Links</h4>
//             <ul className="space-y-3">
//               <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
//               <li><a href="#" className="hover:text-amber-500 transition-colors">About Us</a></li>
//               <li><a href="#" className="hover:text-amber-500 transition-colors">Services</a></li>
//               <li><a href="#" className="hover:text-amber-500 transition-colors">Journal</a></li>
//               <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-bold mb-6">Services</h4>
//             <ul className="space-y-3">
//               <li><a href="#" className="hover:text-amber-500 transition-colors">Bespoke Suits</a></li>
//               <li><a href="#" className="hover:text-amber-500 transition-colors">Shirt Making</a></li>
//               <li><a href="#" className="hover:text-amber-500 transition-colors">Alterations</a></li>
//               <li><a href="#" className="hover:text-amber-500 transition-colors">Wedding Attire</a></li>
//               <li><a href="#" className="hover:text-amber-500 transition-colors">Leather Crafting</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-bold mb-6">Contact Us</h4>
//             <address className="not-italic space-y-3">
//               <p>123 Tailor's Lane<br />Fashion District, NY 10001</p>
//               <p>Phone: (212) 555-1234</p>
//               <p>Email: hello@stitchcraft.com</p>
//               <p>Hours: Mon-Fri 9am-6pm<br />Sat 10am-4pm</p>
//             </address>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
//           <p>© {new Date().getFullYear()} StitchCraft Tailoring. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook className="text-xl" />, name: "Facebook" },
    { icon: <FaInstagram className="text-xl" />, name: "Instagram" },
    { icon: <FaTwitter className="text-xl" />, name: "Twitter" },
    { icon: <FaPinterest className="text-xl" />, name: "Pinterest" }
  ];

  const footerLinks = [
    {
      title: "Quick Links",
      items: ["Home", "About", "Services", "Journal", "Contact"]
    },
    {
      title: "Services",
      items: ["Bespoke Suits", "Shirt Making", "Alterations", "Wedding Attire", "Leather Crafting"]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-indigo-400 mb-6 font-serif tracking-tight">StitchCraft</h3>
            <p className="mb-6 text-gray-400 leading-relaxed">
              Crafting exceptional garments with traditional techniques and modern sensibility since 1985.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {footerLinks.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-bold mb-6 text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <motion.li 
                    key={itemIndex}
                    whileHover={{ x: 5 }}
                  >
                    <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <address className="not-italic space-y-4 text-gray-400">
              <div className="flex items-start">
                <div className="text-indigo-400 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>123 Tailor's Lane<br />Fashion District, NY 10001</p>
              </div>
              <div className="flex items-start">
                <div className="text-indigo-400 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <p>Phone: (212) 555-1234</p>
              </div>
              <div className="flex items-start">
                <div className="text-indigo-400 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <p>Email: hello@stitchcraft.com</p>
              </div>
            </address>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p>© {new Date().getFullYear()} StitchCraft Tailoring. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;