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
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 20,
        duration: 5,
        ease: "power2.out",
      });
    }
  }, [loading]);




  if (loading) return <Loader />;

  return (
    <div className="flex flex-col  font-sans text-gray-800">
      <AppBar />
      <div
  className="relative h-auto sm:h-[600px] lg:h-[800px] bg-cover bg-center mt-20 md:mt-0" // Add mt-4 for mobile, md:mt-0 for larger screens
  style={{ backgroundImage: 'url(https://tse4.mm.bing.net/th?id=OIP.vDjfoBkKZ28exEwQOsjPcAHaE8&pid=Api&P=0&h=220)' }}
 
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
          <Link href="/about"> Read More </Link> 
          </button>
          <button className="px-6 py-3 text-white rounded border-2 border-blue-500 hover:bg-blue-500 transition">
            <Link href="/about"> Learn More </Link> 
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center bg-transparent"></div>
    </div>
  </main>
  <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-center"></div>
</div>

      <div    className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto mt-[-5rem] px-4">
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

      <div  className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-6xl mx-auto gap-4 px-4">
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

      <div  className="text-center">
        <h1 className="text-3xl font-bold">We Provide Energy</h1>
        <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
        <p className="text-lg text-gray-400">
          Serving a variety of clients, including government agencies, homes, and offices.
        </p>
      </div>

      <Spacer height="100px" />

      <div
  
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

      <div  className="bg-[#F8F9F9] py-8">
        <div className="text-center max-w-3xl mx-auto pt-9 px-4">
          <h1 className="text-3xl font-bold">Latest Projects</h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto mt-4 mb-4"></div>
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

      <div className="bg-blue-400 h-72 w-full flex items-center justify-center ">
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
