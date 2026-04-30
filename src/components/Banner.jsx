import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      
      <Image
        src="/banner.jpg" 
        alt="Summer Sale Banner"
        fill
        className="object-cover"
        priority
      />

      
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/60 to-transparent flex items-center">
        
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          <div className="max-w-xl space-y-6">
            
           
            <div className="inline-block bg-white text-orange-600 px-4 py-1 rounded-full font-bold text-sm uppercase tracking-wider animate-bounce">
              Hot Deals 🔥
            </div>

            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight animate__animated animate__bounceInDown animate__delay-2s">
              Summer Sale <br />
              <span className="text-orange-200">50% OFF</span>
            </h1>

            
            <p className="text-lg md:text-xl text-gray-100 max-w-md ">
              Dont miss out on our biggest sale of the season. Grab your favorites before they are gone!
            </p>

           
            <div className="flex gap-4">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-100 transition shadow-lg">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition">
                Learn More
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;