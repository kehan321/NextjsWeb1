// pages/services.tsx
import React from 'react';
import AppBar from '../component/appar';
import AppBar2 from '../component/appbar2';



const servicesData = [
  {
    title: "Business Consulting",
    description: "Expert analysis and strategic advice to optimize your business processes and drive growth.",
    icon: "🧠",
  },
  {
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business needs and enhance productivity.",
    icon: "💻",
  },
  {
    title: "Digital Marketing Strategies",
    description: "Comprehensive marketing solutions including SEO, PPC, and social media to boost your online presence.",
    icon: "📈",
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics and reporting services.",
    icon: "📊",
  },
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud services to streamline operations and improve collaboration.",
    icon: "☁️",
  },
  {
    title: "Cybersecurity Services",
    description: "Robust security measures to protect your business from digital threats and data breaches.",
    icon: "🔒",
  },
  {
    title: "User Experience Design",
    description: "Crafting intuitive and engaging user experiences for websites and applications.",
    icon: "🎨",
  },
  {
    title: "IT Support & Maintenance",
    description: "24/7 technical support and proactive maintenance to ensure your systems run smoothly.",
    icon: "🛠️",
  },
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud services to streamline operations and improve collaboration.",
    icon: "☁️",
  },
  {
    title: "Cybersecurity Services",
    description: "Robust security measures to protect your business from digital threats and data breaches.",
    icon: "🔒",
  },
  {
    title: "User Experience Design",
    description: "Crafting intuitive and engaging user experiences for websites and applications.",
    icon: "🎨",
  },
  {
    title: "IT Support & Maintenance",
    description: "24/7 technical support and proactive maintenance to ensure your systems run smoothly.",
    icon: "🛠️",
  },
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud services to streamline operations and improve collaboration.",
    icon: "☁️",
  },
  {
    title: "Cybersecurity Services",
    description: "Robust security measures to protect your business from digital threats and data breaches.",
    icon: "🔒",
  },
  {
    title: "User Experience Design",
    description: "Crafting intuitive and engaging user experiences for websites and applications.",
    icon: "🎨",
  },
  {
    title: "IT Support & Maintenance",
    description: "24/7 technical support and proactive maintenance to ensure your systems run smoothly.",
    icon: "🛠️",
  },
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud services to streamline operations and improve collaboration.",
    icon: "☁️",
  },
  {
    title: "Cybersecurity Services",
    description: "Robust security measures to protect your business from digital threats and data breaches.",
    icon: "🔒",
  },
  {
    title: "User Experience Design",
    description: "Crafting intuitive and engaging user experiences for websites and applications.",
    icon: "🎨",
  },
  {
    title: "IT Support & Maintenance",
    description: "24/7 technical support and proactive maintenance to ensure your systems run smoothly.",
    icon: "🛠️",
  },
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud services to streamline operations and improve collaboration.",
    icon: "☁️",
  },
  {
    title: "Cybersecurity Services",
    description: "Robust security measures to protect your business from digital threats and data breaches.",
    icon: "🔒",
  },
  {
    title: "User Experience Design",
    description: "Crafting intuitive and engaging user experiences for websites and applications.",
    icon: "🎨",
  },
  {
    title: "IT Support & Maintenance",
    description: "24/7 technical support and proactive maintenance to ensure your systems run smoothly.",
    icon: "🛠️",
  },
];

const Services = () => {
  return (
    <div className="container text-black mx-auto p-6">
      <AppBar2/>
      <h1 className="text-4xl font-bold text-center text-black pt-20 mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 flex flex-col items-center">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-black mb-2 text-center">{service.title}</h2>
            <p className="text-gray-600  text-gray-500 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
