import React, { useEffect, useState } from 'react';

const Loader = ({ onLoaded }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onLoaded(); // Call the callback when loading is complete
    }, 2000); // 2 seconds loader

    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <img 
          src="https://preview.colorlib.com/theme/tailor/assets/img/logo/loder.png.webp" 
          alt="Loading..." 
          className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default Loader;



// // src/components/Loader.jsx
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const Loader = ({ onLoaded }) => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//       onLoaded();
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [onLoaded]);

//   if (!loading) return null;

//   return (
//     <motion.div 
//       className="fixed inset-0 bg-white z-50 flex items-center justify-center"
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <motion.div
//         className="relative w-32 h-32"
//         animate={{ 
//           rotate: 360,
//         }}
//         transition={{ 
//           duration: 2,
//           repeat: Infinity,
//           ease: "linear"
//         }}
//       >
//         <div className="absolute inset-0 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
//         <motion.img 
//           src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//           alt="Loading..." 
//           className="w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
//           animate={{
//             scale: [1, 1.1, 1],
//             rotate: [0, 5, -5, 0]
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             repeatType: "reverse"
//           }}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Loader;