// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay } from '@fortawesome/free-solid-svg-icons';
// import useIntersectionObserver from '../utils/useIntersectionObserver';

// const VideoSection = () => {
//   const [ref, isVisible] = useIntersectionObserver({
//     threshold: 0.1,
//     triggerOnce: true
//   });
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <div ref={ref} className="relative w-full h-screen bg-black">
//       {!isPlaying ? (
//         <>
//           <img
//             alt="Man in pink and brown hoodie leaning forward with lamp and wooden frame in background"
//             className="w-full h-full object-cover"
//             src="https://storage.googleapis.com/a1aa/image/d7c679c9-2782-4baa-02aa-fc641ee21e5e.jpg"
//           />
//           <button
//             aria-label="Play video"
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0e7e5] w-40 h-40 flex items-center justify-center hover:opacity-90 transition"
//             onClick={() => setIsPlaying(true)}
//           >
//             <div className="rounded-full bg-primary w-24 h-24 flex items-center justify-center">
//               <FontAwesomeIcon icon={faPlay} className="text-white text-2xl ml-[2px]" />
//             </div>
//           </button>
//         </>
//       ) : (
//         <iframe
//           className="absolute top-0 left-0 w-full h-full"
//           src="https://www.youtube.com/embed/up68UAfH0d0?autoplay=1"
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       )}
//     </div>
//   );
// };

// export default VideoSection;



// src/components/VideoSection.jsx
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import useIntersectionObserver from '../utils/useIntersectionObserver';
import { motion } from 'framer-motion';

const VideoSection = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });
  const [isPlaying, setIsPlaying] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="relative w-full h-screen bg-black">
      {!isPlaying ? (
        <>
          <img
            alt="Tailor working on sewing machine"
            className="w-full h-full object-cover opacity-70"
            src="https://images.unsplash.com/photo-1596704017256-17961c0a4a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <motion.button
              aria-label="Play video"
              className="rounded-full bg-white/20 backdrop-blur-sm w-32 h-32 flex items-center justify-center hover:bg-white/30 transition-all"
              onClick={() => setIsPlaying(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="rounded-full bg-indigo-600 w-24 h-24 flex items-center justify-center">
                <FaPlay className="text-white text-2xl ml-1" />
              </div>
            </motion.button>
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="mb-2">Watch Our Story</p>
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
          </motion.div>
        </>
      ) : (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/up68UAfH0d0?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </section>
  );
};

export default VideoSection;