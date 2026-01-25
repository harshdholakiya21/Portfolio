import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const goToPortfolio = () => {
    navigate('/Home');
  };

  // Generate random stars
  const stars = Array.from({ length: 30 }).map((_, i) => (
    <div
      key={i}
      className="absolute bg-white rounded-full opacity-30"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        filter: 'blur(0.5px)',
      }}
    ></div>
  ));

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-1/6 w-32 h-32 bg-blue-600 opacity-20 rounded-full blur-lg"></div>
      <div className="absolute bottom-16 right-1/5 w-28 h-28 bg-purple-800 opacity-20 rounded-full blur-xl"></div>
      <div className="absolute top-2/3 left-2/3 w-20 h-20 bg-yellow-400 opacity-15 rounded-full blur-md"></div>
      <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-pink-500 opacity-15 rounded-full blur-lg"></div>
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-green-400 opacity-15 rounded-full blur-md"></div>
      {/* Animated Pulse Circle */}
      <div className="absolute top-1/2 left-1/3 w-14 h-14 bg-cyan-400 opacity-20 rounded-full blur-lg animate-pulse"></div>
      {/* Dotted Border Ring */}
      <div className="absolute top-1/2 left-1/2 w-40 h-40 border-4 border-dotted border-gray-600 rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
      {/* Diagonal Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-5 transform rotate-6"></div>
      <div className="absolute bottom-10 left-0 w-full h-0.5 bg-white opacity-5 transform -rotate-6"></div>
      {/* Grid Overlay */}
      
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>
      {/* Star Dots */}
      {stars}
      {/* Glowing Ring Behind Content */}
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      {/* Vertical Line Accent */}
      <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white opacity-5 transform -translate-x-1/2"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen bg-black/70 text-gray-200 text-center font-sans px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-400">Discover my projects, skills, and experience.</p>
       <button
  className="bg-gray-600 hover:bg-gray-700 text-white py-3 px-8 rounded-full  transform hover:scale-105 text-lg font-semibold shadow"
  onClick={goToPortfolio}
>
  Enter Portfolio
</button>
      </div>
    </div>
  );
};

export default WelcomePage;