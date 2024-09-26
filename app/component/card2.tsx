// import React from 'react';

// interface EnergyProviderCardProps {
//   imageUrl: string;
//   title: string;
//   description: string;
// }

// const EnergyProviderCard: React.FC<EnergyProviderCardProps> = ({ imageUrl, title, description }) => {
//   return (
//     <div className="max-w-sm mx-auto bg-white ">
//       <div className="flex justify-center mt-4">
//         <img 
//           src={imageUrl} 
//           alt={title} 
//           className="h-24 w-24 rounded-full" 
//         />
//       </div>
//       <div className="py-3 text-center text-base">
//         <h1 className="">{title}</h1>

//         <p className="text-gray-400 text-sm">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default EnergyProviderCard;




import React from 'react';

interface EnergyProviderCardProps {
  imageUrl: string;
  title: string;
  description?: string; // Make this optional
}

const EnergyProviderCard: React.FC<EnergyProviderCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex justify-center mt-4">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-24 w-24 rounded-full" 
        />
      </div>
      <div className="py-3 text-center text-base">
        <h1 className="font-bold">{title}</h1>
        <p className="text-gray-400 text-sm">
          {description || "No description available"} {/* Fallback for description */}
        </p>
      </div>
    </div>
  );
};

export default EnergyProviderCard;
