// // pages/index.tsx
// import React from 'react';
// import Card from './component/card';
// import AppBar from './component/appar';
// import Spacer from './component/spacer';
// import EnergyProviderCard from './component/card2';
// import Card3 from './component/card3';
// import Card4 from './component/card4';
// import Footer from './component/footer';

// const Home = () => {
// const cardData = [
//     {
//       imageUrl: "https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon11.jpg",
//       title: "Awesome Employees",
//       description: "Our services are so awesome of passages of Lerem ipsum available"
//     },
//     {
//       imageUrl: "https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon81.jpg",
//       title: "Maximum Power",
//       description: "Our services are so awesome of passages of Lerem ipsum available"
//     },
//     {
//       imageUrl: "https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon71.jpg",
//       title: "Oil Resources",
//       description: "Our services are so awesome of passages of Lerem ipsum available"
//     },
//     {
//       imageUrl: "https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon61.jpg",
//       title: "Continues Development",
//       description: "Our services are so awesome of passages of Lerem ipsum available"
//     },
//     {
//       imageUrl: "https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon51.jpg",
//       title: "Chimical Analysis",
//       description: "We provide excellent support and resources for our clients."
//     },
//     {
//       imageUrl: "https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon31.jpg",
//       title: "We Think About The Consumer",
//       description: "We provide excellent support and resources for our clients."
//     },
//     {
//       imageUrl: "https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon41.jpg",
//       title: "We Think About The Consumer",
//       description: "We provide excellent support and resources for our clients."
//     },
//     {
//       imageUrl: "https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon9.jpg",
//       title: "We Care About Environment",
//       description: "We provide excellent support and resources for our clients."
//     },
//   ];

//   const cardData3 = [
//     {
//       imageUrl: 'https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2013/06/8555736073_8cde64941a_b-380x254.jpg',
//       title: 'Frozen Trees In A Lake',
//       subtitle: 'DESIGN-NTERIOR-OFFICE',
//     },
//     {
//       imageUrl: 'https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2015/11/3884986065_549b96eff4_z1-380x254.jpg',
//       title: 'Consectetur adipiscing',
//       subtitle: 'DESIGN-NTERIOR-OFFICE',
//     },
//     {
//       imageUrl: 'https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2013/06/8555736073_8cde64941a_b-380x254.jpg',
//       title: 'Frozen Trees In A Lake',
//       subtitle: 'DESIGN-NTERIOR-OFFICE',
//     },
//   ];

//   const cardData4 = [
//     {
//       imageUrl: 'https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2014/08/8555735563_846457fcc5_b.jpg',
//       title: 'Dignissim phasellus ultrices tellus',
//       subtitle: 'Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed.',
//     },
//     {
//       imageUrl: 'https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2014/08/8555736997_53252a5258_b.jpg',
//       title: 'Excepteur sint occaecat cupidatat',
//       subtitle: 'Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed.',
//     },
//     {
//       imageUrl: 'https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2014/08/stock-photo-oil-pump-jacks-at-sunset-sky-background-toned-316001336.jpg',
//       title: 'Aenean nonummy hendrerit  sdcvsd gsdf',
//       subtitle: 'Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed.',
//     },
//   ];

//   return (
//     <div className="flex flex-col font-sans">
//       <AppBar />
//       <div
//         className="relative h-auto sm:h-[600px] lg:h-[800px] bg-cover bg-center"
//         style={{ backgroundImage: 'url(https://tse4.mm.bing.net/th?id=OIP.vDjfoBkKZ28exEwQOsjPcAHaE8&pid=Api&P=0&h=220)' }}
//       >
//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black opacity-50"></div>

//         <main className="flex items-center justify-center h-full relative p-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-6xl mx-auto gap-4">
//             <div className="flex flex-col items-start justify-center mb-20 p-8 bg-opacity-30 rounded-lg">
//               <h1 className="mb-4 font-bold text-white text-4xl sm:text-5xl text-start">
//                 Overcoming technology challenges: making the most of resources
//               </h1>
//               <div className="flex space-x-4">
//                 <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
//                   Read More
//                 </button>
//                 <button className="px-6 py-3 text-white rounded border-2 border-blue-500 hover:bg-blue-500 transition">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//             <div className="flex items-center justify-center bg-transparent"></div>
//           </div>
//         </main>
//         <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-center"></div>
//       </div>

//       {/* Cards Section */}
//       <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto mt-[-5rem] px-4">
//         <Card
//           imageSrc="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/11.jpg"
//           title="OIL EXTRACTION"
//           description="As the world's largest green and clean energy specialist of the printing and typesetting industry."
//         />
//         <Card
//           imageSrc="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/21.jpg"
//           title="PIPELINES BUILDING"
//           description="As the world's largest green and clean energy specialist of the printing and typesetting industry."
//         />
//         <Card
//           imageSrc="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/31.jpg"
//           title="OIL REFINEMENT"
//           description="As the world's largest green and clean energy specialist of the printing and typesetting industry."
//         />
//       </div>

//       <Spacer height="100px" />

//       <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-6xl mx-auto gap-4 px-4">
//         <div className="flex flex-col items-start justify-center p-10 bg-opacity-30 rounded-lg">
//           <h1 className="mb-4 font-bold text-3xl text-start">Save The Planet!</h1>
//           <div className="h-1 w-16 bg-blue-500 mb-4"></div>
//           <p className="text-lg">
//             Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit.
//           </p>
//         </div>
//         <div className="flex items-center justify-center bg-transparent">
//           <img src="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/CEO-d3.png" alt="CEO" className="w-full max-w-xs" />
//         </div>
//       </div>

//       <Spacer height="100px" />

//       <div className="text-center">
//         <h1 className="text-3xl font-bold">We Provide Energy</h1>
//         <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
//         <p className="text-lg text-gray-400">
//           Serving a variety of clients, including government agencies, homes, and offices.
//         </p>
//       </div>

//       <Spacer height="100px" />

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl mx-auto mt-[-5rem] px-4">
//         {cardData.map((data, index) => (
//           <EnergyProviderCard
//             key={index}
//             imageUrl={data.imageUrl}
//             title={data.title}
//             description={data.description}
//           />
//         ))}
//       </div>

//       <Spacer height="100px" />

//       <div className="bg-[#F8F9F9] py-8">
//         <div className="text-center max-w-3xl mx-auto pt-9 px-4">
//           <h1 className="text-3xl font-bold">Latest Projects</h1>
//           <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
//           <p className="text-lg text-gray-400">
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 py-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto px-4">
//         {cardData3.map((data, index) => (
//           <div className="group" key={index}>
//             <Card3
//               imageUrl={data.imageUrl}
//               title={data.title}
//               subtitle={data.subtitle}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-8">
//         <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-gray-700 transition duration-300">
//           MORE PROJECTS
//         </button>
//       </div>

//       <Spacer height="100px" />

//       <div className="bg-blue-400 h-72 w-full flex items-center justify-center">
//         <h3 className="text-center text-white text-3xl max-w-2xl px-4">
//           “ We help hardware startups integrate technology, scale and desirability without compromise ”
//         </h3>
//       </div>

//       <div className="text-center max-w-3xl mx-auto pt-9">
//         <h1 className="text-3xl font-bold">Our Latest News</h1>
//         <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
//         <p className="text-lg text-gray-400">
//           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 py-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto px-4">
//         {cardData4.map((data, index) => (
//           <div className="group" key={index}>
//             <Card4
//               imageUrl={data.imageUrl}
//               title={data.title}
//               subtitle={data.subtitle}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="bg-[#F8F9F9] py-10 my-5">
//         <div className="text-center max-w-3xl mx-auto px-4">
//           <h1 className="text-3xl font-bold">Get Latest Offers</h1>
//           <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
//           <p className="text-lg text-gray-400">
//             Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed.
//           </p>
//         </div>

//         <div className="flex flex-col sm:flex-row py-10 items-center justify-center space-x-0 sm:space-x-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="border rounded-md p-3 mb-4 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="border rounded-md p-3 mb-4 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
//           />
//           <button className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-blue-700 transition duration-300">
//             Subscribe
//           </button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Home;




// "use client";
// import React, { useEffect, useState } from 'react';

// import AppBar from './component/appar';
// import Spacer from './component/spacer';
// import EnergyProviderCard from './component/card2';
// import Card3 from './component/card3';
// import Card4 from './component/card4';
// import Footer from './component/footer';
// import Card from './component/card';
// import { supabase } from './component/supabaseClient';

// // Define types for card data
// interface CardData {
//   imageUrl: string;
//   title: string;
//   description?: string; // Optional for cards with only title and image
//   subtitle?: string; // Optional for cards with subtitle
// }

// const Home = () => {
//   const [name, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<boolean>(false);
//   const [cardData, setCardData] = useState<CardData[]>([]);
//   const [cardData3, setCardData3] = useState<CardData[]>([]);
//   const [cardData4, setCardData4] = useState<CardData[]>([]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccess(false);

//     try {
//       const { data, error } = await supabase
//         .from('your_table_name') // Replace with your table name
//         .insert([{ name, email }]);

//       if (error) throw error;

//       setSuccess(true);
//       setName('');
//       setEmail('');
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCardData([
//         // Your card data
//       ]);

//       setCardData3([
//         // Your card data3
//       ]);

//       setCardData4([
//         // Your card data4
//       ]);

//       setLoading(false);
//     }, 3000); // Adjust time as needed

//     return () => clearTimeout(timer); // Cleanup on unmount
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="loader"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col font-sans">
//       <AppBar />
//       <div
//         className="relative h-auto sm:h-[600px] lg:h-[800px] bg-cover bg-center"
//         style={{ backgroundImage: 'url(https://tse4.mm.bing.net/th?id=OIP.vDjfoBkKZ28exEwQOsjPcAHaE8&pid=Api&P=0&h=220)' }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <main className="flex items-center justify-center h-full relative p-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-6xl mx-auto gap-4">
//             <div className="flex flex-col items-start justify-center mb-20 p-8 bg-opacity-30 rounded-lg">
//               <h1 className="mb-4 font-bold text-white text-4xl sm:text-5xl text-start">
//                 Overcoming technology challenges: making the most of resources
//               </h1>
//               <div className="flex space-x-4">
//                 <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
//                   Read More
//                 </button>
//                 <button className="px-6 py-3 text-white rounded border-2 border-blue-500 hover:bg-blue-500 transition">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//             <div className="flex items-center justify-center bg-transparent"></div>
//           </div>
//         </main>
//         <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-center"></div>
//       </div>

//       {/* Cards Section */}
//       <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto mt-[-5rem] px-4">
//         <Card
//           imageSrc="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/11.jpg"
//           title="OIL EXTRACTION"
//           description="As the world's largest green and clean energy specialist of the printing and typesetting industry."
//         />
//         <Card
//           imageSrc="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/21.jpg"
//           title="PIPELINES BUILDING"
//           description="As the world's largest green and clean energy specialist of the printing and typesetting industry."
//         />
//         <Card
//           imageSrc="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/31.jpg"
//           title="OIL REFINEMENT"
//           description="As the world's largest green and clean energy specialist of the printing and typesetting industry."
//         />
//       </div>

//       <Spacer height="100px" />

//       <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-6xl mx-auto gap-4 px-4">
//         <div className="flex flex-col items-start justify-center p-10 bg-opacity-30 rounded-lg">
//           <h1 className="mb-4 font-bold text-3xl text-start">Save The Planet!</h1>
//           <div className="h-1 w-16 bg-blue-500 mb-4"></div>
//           <p className="text-lg">
//             Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit.
//           </p>
//         </div>
//         <div className="flex items-center justify-center bg-transparent">
//           <img src="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/CEO-d3.png" alt="CEO" className="w-full max-w-xs" />
//         </div>
//       </div>

//       <Spacer height="100px" />

//       <div className="text-center">
//         <h1 className="text-3xl font-bold">We Provide Energy</h1>
//         <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
//         <p className="text-lg text-gray-400">
//           Serving a variety of clients, including government agencies, homes, and offices.
//         </p>
//       </div>

//       <Spacer height="100px" />

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl mx-auto mt-[-5rem] px-4">
//         {cardData.map((data, index) => (
//           <EnergyProviderCard
//             key={index}
//             imageUrl={data.imageUrl}
//             title={data.title}
//             description={data.description}
//           />
//         ))}
//       </div>

//       <Spacer height="100px" />

//       <div className="bg-[#F8F9F9] py-8">
//         <div className="text-center max-w-3xl mx-auto pt-9 px-4">
//           <h1 className="text-3xl font-bold">Latest Projects</h1>
//           <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
//           <p className="text-lg text-gray-400">
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 py-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto px-4">
//         {cardData3.map((data, index) => (
//           <Card3
//             key={index}
//             imageUrl={data.imageUrl}
//             title={data.title}
//             subtitle={data.subtitle}
//           />
//         ))}
//       </div>

//       <div className="text-center mt-8">
//         <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-gray-700 transition duration-300">
//           MORE PROJECTS
//         </button>
//       </div>

//       <Spacer height="100px" />

//       <div className="bg-blue-400 h-72 w-full flex items-center justify-center">
//         <h3 className="text-center text-white text-3xl max-w-2xl px-4">
//           “ We help hardware startups integrate technology, scale and desirability without compromise ”
//         </h3>
//       </div>

//       <div className="text-center max-w-3xl mx-auto pt-9">
//         <h1 className="text-3xl font-bold">Our Latest News</h1>
//         <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
//         <p className="text-lg text-gray-400">
//           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 py-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto px-4">
//         {cardData4.map((data, index) => (
//           <Card4
//             key={index}
//             imageUrl={data.imageUrl}
//             title={data.title}
//             subtitle={data.subtitle}
//           />
//         ))}
//       </div>

//       <div className="bg-[#F8F9F9] py-10 my-5">
//         <div className="text-center max-w-3xl mx-auto px-4">
//           <h1 className="text-3xl font-bold">Get Latest Offers</h1>
//           <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
//           <p className="text-lg text-gray-400">
//             Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed.
//           </p>
//         </div>
//         <div className="flex flex-col sm:flex-row py-10 items-center justify-center space-x-0 sm:space-x-4">
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="border rounded-md p-3 mb-4 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border rounded-md p-3 mb-4 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
//           />
//           <button
//             onClick={handleSubmit} // Attach the submit handler
//             className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-blue-700 transition duration-300"
//             disabled={loading}
//           >
//             {loading ? 'Submitting...' : 'Subscribe'}
//           </button>
//           {error && <p className="text-red-500">{error}</p>}
//           {success && <p className="text-green-500">Subscription successful!</p>}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Home;














"use client";
import React, { useState, useEffect, useRef } from 'react';
import Card from './component/card';
import AppBar from './component/appar';
import Spacer from './component/spacer';
import EnergyProviderCard from './component/card2';
import Card3 from './component/card3';
import Card4 from './component/card4';
import Footer from './component/footer';
import SubscriptionSection from './component/form';
import gsap from 'gsap';
import { cardData, cardData3, cardData4 } from './component/data';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="loader"></div>
  </div>
);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const cardRef = useRef(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 20,
        duration: 2,
        ease: "power2.out",
      });
    }
  }, [loading]);


  useEffect(() => {
    if (!loading) {
      sectionRefs.current.forEach((section) => {
        if (section) {
          gsap.from(section, {
            opacity: 0,
            y: 20,
            duration: 3.0,  // Animation duration
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",  // Adjusted for slower start
              end: "top 10%",    // Adjusted for slower end
              scrub: 1,          // Smooth scrolling
              toggleActions: "play none none reverse",
              markers: true,
            }
          });
        }
      });
    }
  }, [loading]);
  

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col font-sans text-gray-800">
      <AppBar />
      <div
        className="relative h-auto sm:h-[600px] lg:h-[800px] bg-cover bg-center"
        style={{ backgroundImage: 'url(https://tse4.mm.bing.net/th?id=OIP.vDjfoBkKZ28exEwQOsjPcAHaE8&pid=Api&P=0&h=220)' }}
        ref={(el) => { sectionRefs.current[0] = el; }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <main className="flex items-center justify-center h-full relative p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-6xl mx-auto gap-4">
            <div className="flex flex-col items-start justify-center mb-20 p-8 bg-opacity-30 md:mb-0 rounded-lg">
              <h1 className="mb-4 font-bold text-white text-4xl sm:text-5xl text-start">
                Overcoming technology challenges: making the most of resources
              </h1>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
                  Read More
                </button>
                <button className="px-6 py-3 text-white rounded border-2 border-blue-500 hover:bg-blue-500 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center bg-transparent"></div>
          </div>
        </main>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-center"></div>
      </div>

      <div   ref={(el) => { sectionRefs.current[1] = el; }} className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto mt-[-5rem] px-4">
        <Card
          imageSrc="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/11.jpg"
          title="OIL EXTRACTION"
          description="As the world's largest green and clean energy specialist of the printing and typesetting industry."
        />
        <Card
          imageSrc="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/21.jpg"
          title="PIPELINES BUILDING"
          description="As the world's largest green and clean energy specialist of the printing and typesetting industry."
        />
        <Card
          imageSrc="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/31.jpg"
          title="OIL REFINEMENT"
          description="As the world's largest green and clean energy specialist of the printing and typesetting industry."
        />
      </div>

      <Spacer height="100px" />

      <div ref={(el) => { sectionRefs.current[2] = el; }} className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-6xl mx-auto gap-4 px-4">
        <div className="flex flex-col items-start justify-center p-10 bg-opacity-30 rounded-lg">
          <h1 className="mb-4 font-bold text-3xl text-start">Save The Planet!</h1>
          <div className="h-1 w-16 bg-blue-500 mb-4"></div>
          <p className="text-lg">
            Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit.
          </p>
        </div>
        <div className="flex items-center justify-center bg-transparent">
          <img src="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/CEO-d3.png" alt="CEO" className="w-full max-w-xs" />
        </div>
      </div>

      <Spacer height="100px" />

      <div ref={(el) => { sectionRefs.current[3] = el; }} className="text-center">
        <h1 className="text-3xl font-bold">We Provide Energy</h1>
        <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
        <p className="text-lg text-gray-400">
          Serving a variety of clients, including government agencies, homes, and offices.
        </p>
      </div>

      <Spacer height="100px" />

      <div
  ref={(el) => { sectionRefs.current[4] = el; }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl mx-auto mt-[-5rem] px-4"
>
  {cardData.map((data, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }} // Initial state
      animate={{ opacity: 1, y: 0 }} // Animation on mount
      transition={{ duration: 0.2, delay: index * 0.05 }} // Faster entrance
      whileHover={{ scale: 1.05, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)" }} // Slight shadow on hover
    >
      <EnergyProviderCard
        imageUrl={data.imageUrl}
        title={data.title}
        description={data.description}
      />
    </motion.div>
  ))}
</div>




      <Spacer height="100px" />

      <div ref={(el) => { sectionRefs.current[5] = el; }} className="bg-[#F8F9F9] py-8">
        <div className="text-center max-w-3xl mx-auto pt-9 px-4">
          <h1 className="text-3xl font-bold">Latest Projects</h1>
          <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-400">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 py-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto px-4">
        {cardData3.map((data, index) => (
          <div className="group" key={index}>
            <Card3
              imageUrl={data.imageUrl}
              title={data.title}
              subtitle={data.subtitle}
            />
          </div>
        ))}
      </div>



<div className="text-center mt-8">
  <Link href="/portfolio">
    <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-gray-700 transition duration-300">
      MORE PROJECTS
    </button>
  </Link>
</div>

      <Spacer height="100px" />

      <div className="bg-blue-400 h-72 w-full flex items-center justify-center">
        <h3 className="text-center text-white text-3xl max-w-2xl px-4">
          “ We help hardware startups integrate technology, scale and desirability without compromise ”
        </h3>
      </div>

      <div className="text-center max-w-3xl mx-auto pt-9">
        <h1 className="text-3xl font-bold">Our Latest News</h1>
        <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
        <p className="text-lg text-gray-400">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
        </p>
      </div>

      <div className="grid grid-cols-1 py-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto px-4">
        {cardData4.map((data, index) => (
          <div className="group" key={index}>
            <Card4
              imageUrl={data.imageUrl}
              title={data.title}
              subtitle={data.subtitle}
            />
          </div>
        ))}
      </div>

      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default Home;
