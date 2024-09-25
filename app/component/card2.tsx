import React from 'react';

interface EnergyProviderCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const EnergyProviderCard: React.FC<EnergyProviderCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="max-w-sm mx-auto bg-white ">
      <div className="flex justify-center mt-4">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-24 w-24 rounded-full" 
        />
      </div>
      <div className="py-3 text-center text-base">
        <h1 className="">{title}</h1>

        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default EnergyProviderCard;
