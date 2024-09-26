import React from 'react';
import AppBar from '../component/appar';

const About = () => {
  return (

    <div className="max-w-6xl mx-auto font-serif p-6">
      <AppBar/>
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Left Column */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-300 text-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            At [Your Company Name], our mission is to provide innovative solutions that enhance the quality of life for our customers. We strive to lead in our industry while making a positive impact on the community.
          </p>
          <h3 className="text-xl font-medium mb-2">Core Values</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Customer-Centric</li>
            <li>Sustainability</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in [Year], [Your Company Name] has grown from a small startup to a trusted leader in the [industry]. Our journey has been defined by a commitment to excellence and a passion for innovation.
          </p>
          <p>
            Today, we serve thousands of customers across the globe, and we are continuously evolving to meet the needs of our clients.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img 
              src="https://tse1.mm.bing.net/th?id=OIP.5GCTAxFtUkLw77H7pHAiGgHaF-&pid=Api&P=0&h=220" 
              alt="John Doe" 
              className="w-32 h-32 mx-auto rounded-full mb-4" 
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img 
              src="https://tse1.mm.bing.net/th?id=OIP.iIqUKwcBIzN48P4srNSUtAHaFW&pid=Api&P=0&h=220" 
              alt="Jane Smith" 
              className="w-32 h-32 mx-auto rounded-full mb-4" 
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-500">CTO</p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img 
              src="https://tse3.mm.bing.net/th?id=OIP.fdt6nuIfUcxJPd-eWKkhsgHaFj&pid=Api&P=0&h=220" 
              alt="Alice Johnson" 
              className="w-32 h-32 mx-auto rounded-full mb-4" 
            />
            <h3 className="text-xl font-semibold">Alice Johnson</h3>
            <p className="text-gray-500">CMO</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us in Our Journey</h2>
        <p className="text-gray-600 mb-6">
          Interested in learning more? Contact us or follow us on our social media channels to stay updated.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
