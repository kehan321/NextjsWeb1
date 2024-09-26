// pages/portfolio.tsx
import React from 'react';
import AppBar from '../component/appar';
import AppBar2 from '../component/appbar2';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A web application that helps users manage their tasks efficiently.',
      imageUrl: 'https://via.placeholder.com/400x300.png?text=Project+One',
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'An e-commerce platform that allows users to buy and sell products online.',
      imageUrl: 'https://via.placeholder.com/400?text=Project+Two',
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'A mobile app that connects users with local service providers.',
      imageUrl: 'https://via.placeholder.com/400?text=Project+Three',
      link: '#',
    },
    {
      title: 'Project Four',
      description: 'A social media platform for sharing and discovering new content.',
      imageUrl: 'https://via.placeholder.com/400?text=Project+Four',
      link: '#',
    },
    {
      title: 'Project Five',
      description: 'An educational platform providing online courses for various subjects.',
      imageUrl: 'https://via.placeholder.com/400?text=Project+Five',
      link: '#',
    },
    {
      title: 'Project Six',
      description: 'A fitness application that tracks your workouts and diet.',
      imageUrl: 'https://via.placeholder.com/400?text=Project+Six',
      link: '#',
    },
    {
      title: 'Project Seven',
      description: 'A travel booking site that offers the best deals on flights and hotels.',
      imageUrl: 'https://via.placeholder.com/400?text=Project+Seven',
      link: '#',
    },
    {
      title: 'Project Eight',
      description: 'A personal finance tool that helps users manage their budgets.',
      imageUrl: 'https://via.placeholder.com/400?text=Project+Eight',
      link: '#',
    },
    {
      title: 'Project Nine',
      description: 'A recipe sharing app that connects food enthusiasts.',
      imageUrl: 'https://via.placeholder.com/400?text=Project+Nine',
      link: '#',
    },
    {
      title: 'Project Ten',
      description: 'A local event discovery app that keeps you updated on happenings around you.',
      imageUrl: 'https://via.placeholder.com/400?text=Project+Ten',
      link: '#',
    },
  ];

  return (
    <div className="container mx-auto p-6">
        <AppBar2/>
      <h1 className="text-4xl font-bold text-center text-black  pt-20 mb-6">Our Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold  text-black mb-2">{project.title}</h2>
              <p className='text-gray-500'>{project.description}</p>
              <a href={project.link} className="text-blue-500  hover:underline mt-2 block">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
