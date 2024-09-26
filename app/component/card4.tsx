// // components/Card3.tsx
// import React from 'react';

// interface Card4Props {
//   imageUrl: string;
//   title: string;
//   subtitle: string;
// }

// const Card4: React.FC<Card4Props> = ({ imageUrl, title, subtitle }) => {
//   return (
//     <div className="max-w-sm bg-white shadow-md  ">
//       <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-4 text-start">
//         <h2 className="text-xl font-semibold">{title}</h2>
//         <div className="h-1 w-20 bg-blue-500 mb-4"></div>

//         <p className="text-gray-600 text-sm">{subtitle}</p>
//       </div>
//       <div className="text-right mt-4">
//   <a href="#" className="text-blue-500 py-10 pe-2    hover:underline">
//     Read More
//   </a>
  
// </div>

//       {/* Horizontal Line */}
//       <div className="relative bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-blue-500 transition-transform duration-500 origin-center scale-x-0 group-hover:scale-x-100"></div>
//     </div>
//   );
// };

// export default Card4;





import React from 'react';

interface Card4Props {
  imageUrl: string;
  title: string;
  subtitle?: string; // Make this optional
}

const Card4: React.FC<Card4Props> = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="max-w-sm bg-white shadow-md overflow-hidden group">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4 text-start">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="h-1 w-20 bg-blue-500 mb-4"></div>
        <p className="text-gray-600 text-sm">
          {subtitle || "No additional information available"} {/* Fallback for subtitle */}
        </p>
      </div>
      <div className="text-right mt-4">
        <a 
          href="#" 
          className="text-blue-500 py-2 hover:underline" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>

      {/* Horizontal Line */}
      <div className="relative bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-blue-500 transition-transform duration-500 origin-center scale-x-0 group-hover:scale-x-100"></div>
    </div>
  );
};

export default Card4;
