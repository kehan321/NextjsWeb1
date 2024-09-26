// app/card/Card.tsx
import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white">
      <img src={imageSrc} alt={title} className="w-full h-50 object-cover" />
      <div className="p-4 flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="h-1 w-9 bg-blue-500 mb-4"></div>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

export default Card;
