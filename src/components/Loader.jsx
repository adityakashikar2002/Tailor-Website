// import React, { useEffect, useState } from 'react';

// const Loader = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000); // 2 seconds loader

//     return () => clearTimeout(timer);
//   }, []);

//   if (!loading) return null;

//   return (
//     <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
//       <div className="relative w-24 h-24">
//         <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
//         <img 
//           src="https://preview.colorlib.com/theme/tailor/assets/img/logo/loder.png.webp" 
//           alt="Loading..." 
//           className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//         />
//       </div>
//     </div>
//   );
// };

// export default Loader;




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