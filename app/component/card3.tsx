// components/Card3.tsx
import React from 'react';

interface Card3Props {
  imageUrl: string;
  title: string;
  subtitle: string;
}

const Card3: React.FC<Card3Props> = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="max-w-sm bg-white shadow-md  ">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      {/* Horizontal Line */}
      <div className="relative bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-blue-500 transition-transform duration-500 origin-center scale-x-0 group-hover:scale-x-100"></div>
    </div>
  );
};

export default Card3;
