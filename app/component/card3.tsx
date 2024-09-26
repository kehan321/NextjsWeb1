import React from 'react';

interface Card3Props {
  imageUrl: string;
  title: string;
  subtitle?: string; // Make this optional
}

const Card3: React.FC<Card3Props> = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="max-w-sm w-full bg-white shadow-md overflow-hidden group mx-auto">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover md:h-56 lg:h-64" 
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
        <p className="text-gray-600 md:text-lg">
          {subtitle || "No additional information available"} {/* Fallback for subtitle */}
        </p>
      </div>
      {/* Horizontal Line */}
      <div className="relative bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-blue-500 transition-transform duration-500 origin-center scale-x-0 group-hover:scale-x-100"></div>
    </div>
  );
};

export default Card3;
