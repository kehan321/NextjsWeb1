// pages/index.tsx
import React from 'react';
import Card from './component/card';
import AppBar from './component/appar';
import Spacer from './component/spacer';
import EnergyProviderCard from './component/card2';
import Card3 from './component/card3';
import Card4 from './component/card4';
import Footer from './component/footer';


const Home = () => {
  const cardData = [
    {
      imageUrl: "https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon11.jpg",
      title: "Awesome Employees",
      description: "Our services are so awesome of passages of Lerem ipsum available"
    },
    {
      imageUrl: "https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon81.jpg",
      title: "Maximum Power",
      description: "Our services are so awesome of passages of Lerem ipsum available"
    },
    {
      imageUrl: "https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon71.jpg",
      title: "Oil Resources",
      description: "Our services are so awesome of passages of Lerem ipsum available"
    },
    {
      imageUrl: "https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon61.jpg",
      title: "Continues Development",
      description: "Our services are so awesome of passages of Lerem ipsum available"
    },
    {
      imageUrl: "https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon51.jpg",
      title: "Chimical Analysis",
      description: "We provide excellent support and resources for our clients."
    },
    {
      imageUrl: "https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon31.jpg",
      title: "We Think About The Consumer",
      description: "We provide excellent support and resources for our clients."
    },
    {
      imageUrl: "https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon41.jpg",
      title: "We Think About The Consumer",
      description: "We provide excellent support and resources for our clients."
    },
    {
      imageUrl: "https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/icon9.jpg",
      title: "We Care About Environment",
      description: "We provide excellent support and resources for our clients."
    },
  ];

  const cardData3 = [
    {
      imageUrl: 'https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2013/06/8555736073_8cde64941a_b-380x254.jpg',
      title: 'Frozen Trees In A Lake',
      subtitle: 'DESIGN-NTERIOR-OFFICE',
    },
    {
      imageUrl: 'https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2015/11/3884986065_549b96eff4_z1-380x254.jpg',
      title: 'Consectetur adipiscing',
      subtitle: 'DESIGN-NTERIOR-OFFICE',
    },
    {
      imageUrl: 'https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2013/06/8555736073_8cde64941a_b-380x254.jpg',
      title: 'Frozen Trees In A Lake',
      subtitle: 'DESIGN-NTERIOR-OFFICE',
    },
  ];

  const cardData4 = [
    {
      imageUrl: 'https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2014/08/8555735563_846457fcc5_b.jpg',
      title: 'Dignissim phasellus ultrices tellus',
      subtitle: 'Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed.',
    },
    {
      imageUrl: 'https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2014/08/8555736997_53252a5258_b.jpg',
      title: 'Excepteur sint occaecat cupidatat',
      subtitle: 'Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed.',
    },
    {
      imageUrl: 'https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2014/08/stock-photo-oil-pump-jacks-at-sunset-sky-background-toned-316001336.jpg',
      title: 'Aenean nonummy hendrerit mauris',
      subtitle: 'Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed.',
    },
  ];

  return (
    <div className="flex flex-col">
      <AppBar />
      <div
        className="relative h-64 sm:h-80 lg:h-96 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://tse4.mm.bing.net/th?id=OIP.vDjfoBkKZ28exEwQOsjPcAHaE8&pid=Api&P=0&h=220)' }}
      >
        <main className="flex items-center justify-center h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-6xl mx-auto gap-4">
            <div className="flex flex-col items-start justify-center mb-20 p-8 bg-opacity-30 rounded-lg">
              <h1 className="mb-4 font-semibold text-white text-3xl sm:text-5xl text-start">
                Overcoming technology challenges: making the most of resources
              </h1>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
                  Read More
                </button>
                <button className="px-4 py-2 text-white rounded border-2 border-blue-500 hover:bg-blue-500 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center bg-transparent"></div>
          </div>
        </main>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-center"></div>
      </div>

      {/* Cards Section */}
      <div className=" relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto mt-[-5rem]">
        <Card
          imageSrc="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/11.jpg"
          title="OIL EXTRACTION"
          description="As the world's largest green and clean energy specialist of the printing and typesetting industry."
        />
        <Card
          imageSrc="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/21.jpg"
          title="PIPELINES BUILDING"
          description="As the world's largest green and clean energy specialist of the printing and typesetting industry."
        />
        <Card
          imageSrc="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/31.jpg"
          title="OIL REFINEMENT"
          description="As the world's largest green and clean energy specialist of the printing and typesetting industry."
        />
      </div>

      <Spacer height='100px' />

      <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-6xl mx-auto gap-4">
        <div className="flex flex-col items-start justify-center p-10 bg-opacity-30 rounded-lg">
          <h1 className="mb-4 font-semibold text-2xl text-start">Save The Planet!</h1>
          <div className="h-1 w-16 bg-blue-500 mb-4"></div>
          <p>
            Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit.
          </p>
        </div>
        <div className="flex items-center justify-center bg-transparent">
          <img src="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/CEO-d3.png" alt="CEO" className="w-full max-w-xs" />
        </div>
      </div>

      <Spacer height='100px' />

      <div className="text-center">
        <h1 className="text-2xl font-bold">We Provide Energy</h1>
        <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
        <p className="text-md text-gray-400">Serving a variety of clients, including government agencies, homes, and offices.</p>
      </div>

      <Spacer height='100px' />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl mx-auto mt-[-5rem]">
        {cardData.map((data, index) => (
          <EnergyProviderCard 
            key={index} 
            imageUrl={data.imageUrl} 
            title={data.title} 
            description={data.description} 
          />
        ))}
      </div>

      <Spacer height='100px' />

      <div style={{ backgroundColor: '#F8F9F9', padding: '2rem' }} className='py-8'>
        <div className="text-center max-w-3xl mx-auto pt-9">
          <h1 className="text-2xl font-bold">Latest Projects</h1>
          <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 py-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto">
        {cardData3.map((data, index) => (
          <div className="group" key={index}>
            <Card3 
              imageUrl={data.imageUrl} 
              title={data.title} 
              subtitle={data.subtitle} 
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-gray-700 transition duration-300">
          MORE PROJECTS
        </button>
      </div>

      <Spacer height='100px' />

      <div className='bg-blue-400 h-72 w-screen flex items-center justify-center'>
        <h3 className='text-center text-white text-2xl w-[900px]'>“ We help hardware startups integrate technology, scale and desirability without compromise ”</h3>
      </div>

      <div className="text-center max-w-3xl mx-auto pt-9">
        <h1 className="text-2xl font-bold">Our Latest News</h1>
        <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
        <p className="text-xl text-gray-400">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
        </p>
      </div>

      <div className="grid grid-cols-1 py-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto">
        {cardData4.map((data, index) => (
          <div className="group" key={index}>
            <Card4 
              imageUrl={data.imageUrl} 
              title={data.title} 
              subtitle={data.subtitle} 
            />
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: '#F8F9F9', padding: '2rem' }} className='py-10 my-5'>
        <div className="text-center max-w-3xl mx-auto pt-9">
          <h1 className="text-2xl font-bold">Get Latest Offers</h1>
          <div className="h-1 w-16 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">
            Sed odio orci, fringilla nec dolor et, euismod auctor mauris. Curabitur semper dui diam, nec accumsan mauris consequat sed.
          </p>
        </div>

        <div className="flex py-10 items-center justify-center space-x-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-blue-700 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
