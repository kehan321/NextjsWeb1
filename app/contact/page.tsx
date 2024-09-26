"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '../component/supabaseClient';
import AppBar2 from '../component/appbar2';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showMap, setShowMap] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Insert data into Supabase
    const {error: insertError } = await supabase
      .from('feedback') // replace with your table name
      .insert([{ name, email, message }]);

    setLoading(false);

    if (insertError) {
      setError('Error submitting feedback: ' + insertError.message);
    } else {
      setSuccess('Feedback submitted successfully!');

      // Reset the form
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  // Show the map after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMap(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-6xl  text-black mx-auto font-serif p-6">
      <AppBar2 />
      <h1 className="text-4xl pt-20  font-bold text-center   md:mt-0 mb-8 text-gray-800">Get in Touch</h1>

      {/* Feedback Form */}
      <div className="bg-white text-black shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl text-black font-semibold mb-6">We&apos;d Love Your Feedback</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-black">
            <label className="block text-sm font-medium mb-2" htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text- font-medium mb-2" htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">Your Message</label>
            <textarea
              id="message"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
            disabled={loading}
          >
            {loading ? (
              <span className="loader"></span> // Add your loader style here
            ) : (
              'Submit Feedback'
            )}
          </button>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">{success}</p>}
      </div>

      {/* Loader */}
      {!showMap && (
        <div className="bg-white shadow-lg rounded-lg p-6 flex justify-center items-center h-64">
          <div className="loader"></div> {/* Add your loader style here */}
        </div>
      )}

      {/* Map */}
      {showMap && (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <div className="overflow-hidden rounded-lg h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095367!2d144.9537353153185!3d-37.81627997975166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f77f%3A0x5045675218ce6f0!2sVictoria%20Market!5e0!3m2!1sen!2sau!4v1615568229255!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}

      <div className="mt-10 text-center">
        <p className="text-gray-600">
          Have any questions? <span className="font-semibold">Contact us!</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
