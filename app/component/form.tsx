import React, { useState } from 'react';
import { supabase } from './supabaseClient';



const SubscriptionSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Simple validation
    if (!name || !email) {
      alert('Please fill in both fields');
      setLoading(false); // Stop loading
      return;
    }

    // Insert data into Supabase
    const { data, error: insertError } = await supabase
      .from('subscriptions') // your table name
      .insert([{ name, email }]);

    setLoading(false); // Stop loading

    if (insertError) {
      alert('Error adding subscription: ' + insertError.message);
    } else {
      // Reset form and show success alert
      setName('');
      setEmail('');
      alert('Subscription successful!');
    }
  };

  return (
    <div className="bg-[#F8F9F9] py-10 my-5">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Get Latest Offers</h1>
        <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
        <p className="text-lg text-gray-400">
          Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row py-10 items-center justify-center space-x-0 sm:space-x-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-md p-3 mb-4 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-md p-3 mb-4 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
        />
        <button 
          type="submit" 
          className={`bg-blue-500 text-white rounded-md px-6 py-2 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`} 
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default SubscriptionSection;
