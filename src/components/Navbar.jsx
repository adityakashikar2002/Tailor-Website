// // import React from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faBars } from '@fortawesome/free-solid-svg-icons';
// // import { Link } from 'react-router-dom';

// // const Navbar = () => {
// //   return (
// //     <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
// //       {/* <Link to="/" className="text-[28px] font-semibold text-primary ml-20 hover:text-accent transition-colors">
// //         Tailor.
// //       </Link> */}
// //       <Link to="/" className="text-[28px] font-semibold text-primary ml-20 hover:text-accent transition-colors">
// //         Tailor.
// //       </Link>
// //       <ul className="hidden md:flex space-x-16 text-[15px] font-semibold text-secondary ml-[900px]">
// //         <li><Link className="hover:underline hover:text-accent transition-colors" to="/">Home</Link></li>
// //         <li><Link className="hover:underline hover:text-accent transition-colors" to="/about">About</Link></li>
// //         <li><Link className="hover:underline hover:text-accent transition-colors" to="/services">Services</Link></li>
// //         <li><Link className="hover:underline hover:text-accent transition-colors" to="/blog">Blog</Link></li>
// //         <li><Link className="hover:underline hover:text-accent transition-colors" to="/contact">Contact</Link></li>
// //       </ul>
// //       <Link className="hidden md:block bg-primary text-white text-[14px] font-semibold px-6 py-4 hover:bg-opacity-90 transition hover:scale-105" to="/visit">
// //         VISIT US
// //       </Link>
// //       <button className="md:hidden text-secondary hover:text-accent transition-colors">
// //         <FontAwesomeIcon icon={faBars} size="lg" />
// //       </button>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// // src/components/Navbar.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaShoppingBag } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <Link to="/" className="text-3xl font-bold text-amber-800 font-serif">
//           StitchCraft
//         </Link>
        
//         <div className="hidden md:flex items-center space-x-10">
//           <Link 
//             to="/" 
//             className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
//           >
//             Home
//           </Link>
//           <Link 
//             to="/about" 
//             className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
//           >
//             About
//           </Link>
//           <Link 
//             to="/services" 
//             className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
//           >
//             Services
//           </Link>
//           <Link 
//             to="/blog" 
//             className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
//           >
//             Journal
//           </Link>
//           <Link 
//             to="/contact" 
//             className="text-gray-700 hover:text-amber-700 transition-colors font-medium"
//           >
//             Contact
//           </Link>
//         </div>
        
//         <div className="flex items-center space-x-6">
//           <button className="hidden md:block bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105">
//             Visit Us
//           </button>
//           <button className="text-gray-700 hover:text-amber-700">
//             <FaShoppingBag className="text-xl" />
//           </button>
//           <button className="md:hidden text-gray-700 hover:text-amber-700">
//             <FaBars className="text-xl" />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingBag } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Journal", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-indigo-600 font-serif tracking-tight">
          StitchCraft
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={item.path} 
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="flex items-center space-x-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            Visit Us
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-700 hover:text-indigo-600"
          >
            <FaShoppingBag className="text-xl" />
          </motion.button>
          <button 
            className="md:hidden text-gray-700 hover:text-indigo-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white py-4 px-6 shadow-lg rounded-lg mt-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={item.path} 
                  className="block text-gray-700 hover:text-indigo-600 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-all w-full mt-2"
            >
              Visit Us
            </motion.button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;