import React from 'react';
import { Link } from 'react-router-dom';

const CuteWishButton = ({msg,link}) => {
  return (
    <Link 
      to={link} 
      className="z-10 relative inline-block px-8 py-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 
                text-white font-bold animate-bounce"
    >
      <span className="relative z-10 flex items-center justify-center gap-3 text-center">
        {msg}
        <span className="text-2xl">🎂</span> 
      </span>
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-200 text-xl opacity-0 group-hover:opacity-100 transition-all duration-1000"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-up ${Math.random() * 3 + 2}s infinite`
            }}
          >
            🥰
          </span>
        ))}
      </div>
    </Link>
  );
};

export default CuteWishButton