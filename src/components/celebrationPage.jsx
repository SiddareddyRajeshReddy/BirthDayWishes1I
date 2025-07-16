import React from "react";

const CelebrationBackground = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-pink-300 to-purple-200">
      <div className="absolute top-10 left-5 w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-32 animate-float">
        <img src="/ballons.png" alt="Red Balloon" className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-8 w-14 h-18 sm:w-18 sm:h-22 md:w-20 md:h-28 animate-float delay-100">
        <img src="/ballons.png" alt="Blue Balloon" className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-2/5 w-14 h-18 sm:w-18 sm:h-22 md:w-20 md:h-28 animate-float delay-100">
        <img src="/ballons.png" alt="Blue Balloon" className="w-full h-full" />
      </div>
      <div className="absolute top-1/4 left-1/4 w-12 h-16 sm:w-16 sm:h-20 md:w-18 md:h-24 animate-float delay-200">
        <img src="/ballons.png" alt="Yellow Balloon" className="w-full h-full" />
      </div>
      <div className="absolute top-5 right-1/4 w-14 h-18 sm:w-18 sm:h-22 md:w-20 md:h-28 animate-float delay-100">
        <img src="/ballons.png" alt="Blue Balloon" className="w-full h-full" />
      </div>

      {/* Confetti */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-pink-400 w-2 h-2 rounded-full animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      {/* Sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 text-xl animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 4 + 3}s`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            ✨
          </div>
        ))}
      </div>


      <div className="relative z-10">
      </div>
    </div>
  );
};

export default CelebrationBackground;