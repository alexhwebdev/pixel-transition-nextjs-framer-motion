// "use client"

// import React, { useState, useEffect } from 'react';
// import styles from './style.module.scss';
// import { motion } from 'framer-motion';

// const anim = {
//   initial: {
//     opacity: 0
//   },
//   open: (i) => ({
//     opacity: 1,
//     transition: { duration: 0, delay: 0.03 * i }
//   }),
//   closed: (i) => ({
//     opacity: 0,
//     transition: { duration: 0, delay: 0.03 * i }
//   })
// };

// export default function CenteredPixel({ menuIsActive }) {
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined
//   });

//   useEffect(() => {
//     function handleResize() {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight
//       });
//     }

//     // Set initial dimensions
//     handleResize();

//     // Add event listener to update dimensions on resize
//     window.addEventListener('resize', handleResize);

//     // Remove event listener on component unmount
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

  
//    // Shuffles array in place (Fisher–Yates shuffle).
//    // @param {Array} a items An array containing the items.

//   const shuffle = (a) => {
//     var j, x, i;
//     for (i = a.length - 1; i > 0; i--) {
//       j = Math.floor(Math.random() * (i + 1));
//       x = a[i];
//       a[i] = a[j];
//       a[j] = x;
//     }
//     return a;
//   };

//   const getBlocks = () => {
//     if (!windowSize.width || !windowSize.height) return []; // If window size is not available, return an empty array

//     const blockSize = windowSize.width * 0.05;
//     const nbOfBlocks = Math.ceil(windowSize.height / blockSize);
//     const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i));

//     return shuffledIndexes.map((randomIndex, index) => {
//       return (
//         <motion.div
//           key={index}
//           className={styles.block}
//           variants={anim}
//           initial="initial"
//           animate={menuIsActive ? 'open' : 'closed'}
//           custom={randomIndex}
//         />
//       );
//     });
//   };

//   return (
//     <div className={styles.pixelBackground}>
//       {[...Array(20)].map((_, index) => {
//         return (
//           <div key={index} className={styles.column}>
//             {getBlocks()}
//           </div>
//         );
//       })}
//     </div>
//   );
// }