const Spacer = ({ height = '200px', width = '0' }) => {
    return (
        <div style={{ height, width }} />
    );
};

export default Spacer;







// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import Card from './component/card';
// import AppBar from './component/appar';
// import Spacer from './component/spacer';
// import EnergyProviderCard from './component/card2';
// import Card3 from './component/card3';
// import Card4 from './component/card4';
// import Footer from './component/footer';
// import SubscriptionSection from './component/form';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { cardData, cardData3, cardData4 } from './component/data';

// gsap.registerPlugin(ScrollTrigger);

// const Loader = () => (
//   <div className="flex items-center justify-center h-screen">
//     <div className="loader"></div>
//   </div>
// );

// const Home = () => {
//   const [loading, setLoading] = useState(true);
//   const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (!loading) {
//       sectionRefs.current.forEach((section) => {
//         if (section) {
//           gsap.from(section, {
//             opacity: 0,
//             y: 20,
//             duration: 1,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: section,
//               start: "top bottom",
//               end: "top center",
//               toggleActions: "play none none reverse",
//               markers: true,
//             }
//           });
//         }
//       });
//     }
//   }, [loading]);

//   if (loading) return <Loader />;

//   return (
//     <div className="flex flex-col font-sans text-gray-800">
//       <AppBar />
//       <div
//         className="relative h-auto sm:h-[600px] lg:h-[800px] bg-cover bg-center"
//         style={{ backgroundImage: 'url(https://tse4.mm.bing.net/th?id=OIP.vDjfoBkKZ28exEwQOsjPcAHaE8&pid=Api&P=0&h=220)' }}
//         ref={(el) => { sectionRefs.current[0] = el; }} // No return
//       >
//         {/* Content here */}
//       </div>

//       <div ref={(el) => { sectionRefs.current[1] = el; }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto mt-[-5rem] px-4">
//         {/* Card components */}
//       </div>

//       <Spacer height="100px" />

//       <div ref={(el) => { sectionRefs.current[2] = el; }} className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-6xl mx-auto gap-4 px-4">
//         {/* More content */}
//       </div>

//       {/* Repeat the ref assignment for other sections */}

//       <SubscriptionSection />
//       <Footer />
//     </div>
//   );
// };

// export default Home;
