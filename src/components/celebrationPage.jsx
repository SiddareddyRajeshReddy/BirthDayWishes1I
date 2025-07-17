import React, { useState, useRef, useEffect } from "react";
import CuteWishButton from "./cuteButton";
const photos = [
  { 
    image: "/godavari.jpg",
    audio: "/Adigaa.mp3",
    caption: "Godavari Memories"
  },
  { 
    image: "/shinall.png",
    audio: "/Asalelaa.mp3",
    caption: "Shinall Trip"
  },
  { 
    image: "/mithunam.jpeg",
    audio: "/Asalelaa.mp3",
    caption: "Mithunam Celebration"
  },

];

const CelebrationBackground = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const audioRefs = useRef([]);
  const visiblePhotos = photos.slice(currentIndex, currentIndex + 3);

  useEffect(() => {
    setLoaded(true);
    const timer = setTimeout(() => setLoaded(false), 1000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (photos.length - 2));
    setIsPlaying(null);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 3 : prev - 1));
    setIsPlaying(null);
  };

  const toggleAudio = (index) => {
    if (isPlaying === index) {
      audioRefs.current[index].pause();
      setIsPlaying(null);
    } else {
      if (isPlaying !== null) {
        audioRefs.current[isPlaying].pause();
      }
      audioRefs.current[index].currentTime = 0;
      audioRefs.current[index].play();
      setIsPlaying(index);
    }
  };

  return (
    <>
    
    <div className=" flex items-center flex-col relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-pink-300 to-purple-200 p-[20px]">
             <CuteWishButton msg={"clkk mee, after u enjoy the page"} link={"/wishes"}/>
     <div className="absolute top-10 left-5 w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-32 animate-float">
        <img src="/ballons.png" alt="Red Balloon" className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-8 w-14 h-18 sm:w-18 sm:h-22 md:w-20 md:h-28 animate-float delay-100">
        <img src="/ballons.png" alt="Blue Balloon" className="w-full h-full" />
      </div>
      <div className="absolute top-20 right-1/2 w-14 h-18 sm:w-18 sm:h-22 md:w-20 md:h-28 animate-float delay-100">
        <img src="/ballons.png" alt="Blue Balloon" className="w-full h-full" />
      </div>
      <div className="absolute top-5 left-1/4 w-12 h-16 sm:w-16 sm:h-20 md:w-18 md:h-24 animate-float delay-200">
        <img src="/ballons.png" alt="Yellow Balloon" className="w-full h-full" />
      </div>
      <div className="absolute top-5 right-1/4 w-14 h-18 sm:w-18 sm:h-22 md:w-20 md:h-28 animate-float delay-100">
        <img src="/ballons.png" alt="Blue Balloon" className="w-full h-full" />
      </div>
      <div className="absolute bottom-10 left-5 w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-32 animate-float">
        <img src="/ballons.png" alt="Red Balloon" className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 right-8 w-14 h-18 sm:w-18 sm:h-22 md:w-20 md:h-28 animate-float delay-100">
        <img src="/ballons.png" alt="Blue Balloon" className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 right-1/2 w-14 h-18 sm:w-18 sm:h-22 md:w-20 md:h-28 animate-float delay-100">
        <img src="/ballons.png" alt="Blue Balloon" className="w-full h-full" />
      </div>
      <div className="absolute bottom-5 right-1/4 w-12 h-16 sm:w-16 sm:h-20 md:w-18 md:h-24 animate-float delay-200">
        <img src="/ballons.png" alt="Yellow Balloon" className="w-full h-full" />
      </div>
      <div className="absolute bottom-5 left-1/4 w-14 h-18 sm:w-18 sm:h-22 md:w-20 md:h-28 animate-float delay-100">
        <img src="/ballons.png" alt="Blue Balloon" className="w-full h-full" />
      </div>

      {/* Confetti */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
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
      {/* Photos Section */}
      <div className="w-screen h-screen flex flex-col justify-center items-center z-10 px-4 py-8 relative">
        <div className="flex w-full items-center justify-center relative">
          <button
            onClick={goToPrev}
            className="absolute left-2 md:left-4 z-20 bg-white/80 hover:bg-white text-purple-600 font-bold rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all"
          >
            ❮
          </button>

          <div className={`flex flex-wrap w-full md:w-[80%] items-center justify-around gap-4 md:gap-8 transition-all duration-300 mt-15 ${loaded ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            {visiblePhotos.map((photo, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="relative group bg-white border-8 border-white rounded-[20px] overflow-hidden shadow-2xl shadow-blue-300 flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-purple-400"
                style={{
                  transform: `rotate(${Math.random() * 10 - 5}deg)`,
                  width: 'clamp(180px, 30vw, 280px)',
                  height: 'clamp(220px, 35vh, 350px)'
                }}
              >
                {/* Hidden audio element */}
                <audio 
                  ref={el => audioRefs.current[index] = el} 
                  src={photo.audio} 
                  onEnded={() => setIsPlaying(null)}
                />
                
                {/* Image with loading animation */}
                <img
                  src={photo.image}
                  alt={photo.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                />
                
                {/* Audio button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleAudio(index);
                  }}
                  className={`absolute top-2 right-2 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all ${isPlaying === index ? 'bg-purple-600 text-white' : 'bg-white/90 text-purple-600 hover:bg-white'}`}
                >
                  {isPlaying === index ? '⏸️' : '▶️'}
                </button>
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:p-4">
                  <p className="text-white font-bold text-sm md:text-base text-center">
                    {photo.caption}
                  </p>
                  <p className="text-white/80 text-xs md:text-sm text-center">
                    {currentIndex + index + 1}/{photos.length}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 z-20 bg-white/80 hover:bg-white text-purple-600 font-bold rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all"
          >
            ❯
          </button>
        </div>

        {/* Mobile indicators */}
        <div className="flex gap-2 mt-4 md:hidden">
          {photos.map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full ${i >= currentIndex && i < currentIndex + 3 ? 'bg-white' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default CelebrationBackground;