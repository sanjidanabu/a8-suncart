import React from 'react';
import { FaSun, FaWater, FaLeaf, FaApple, FaGoogle, FaAmazon, FaMicrosoft } from 'react-icons/fa';

const ExtraCard = () => {
  const summerTips = [
    {
      id: 1,
      title: "Skincare",
      desc: "Use SPF 50+ sunscreen and lightweight moisturizer to protect your skin.",
      icon: <FaSun className="text-yellow-500 text-3xl" />,
    },
    {
      id: 2,
      title: "Hydration",
      desc: "Drink at least 3-4 liters of water daily to keep your body cool.",
      icon: <FaWater className="text-blue-500 text-3xl" />,
    },
    {
      id: 3,
      title: "Fresh Diet",
      desc: "Include seasonal fruits like watermelon and cucumber in your meals.",
      icon: <FaLeaf className="text-green-500 text-3xl" />,
    },
  ];

  const topBrands = [
    { id: 1, name: "Apple", icon: <FaApple /> },
    { id: 2, name: "Google", icon: <FaGoogle /> },
    { id: 3, name: "Amazon", icon: <FaAmazon /> },
    { id: 4, name: "Microsoft", icon: <FaMicrosoft /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16 mt-8">
      
     
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
           Summer Care Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {summerTips.map((tip) => (
            <div 
              key={tip.id} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <div className="mb-4">{tip.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-600">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

     
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
           Top Brands
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {topBrands.map((brand) => (
            <div 
              key={brand.id} 
              className="flex items-center justify-center p-8 bg-gray-50 rounded-xl border border-dashed border-gray-300 hover:bg-gray-100 transition-colors group"
            >
              <div className="text-4xl text-gray-400 group-hover:text-blue-600 transition-colors mr-3">
                {brand.icon}
              </div>
              <span className="text-xl font-medium text-gray-700">{brand.name}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ExtraCard;