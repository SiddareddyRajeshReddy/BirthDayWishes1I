import React, { useState, useRef, useEffect } from "react";
import CuteWishButton from "./cuteButton";

const photos = [
  {
    image: "/i2.jpg",
    audio: "/kunbomma.mp3",
    caption: "Never Ending 👍"
  },
  {
    image: "/i3.jpg",
    audio: "/prana.mp3",
    caption: "The Traditional"
  },
  {
    image: "/i4.jpg",
    audio: "/nana.mp3",
    caption: "one of my fav - sorry, song bagokapothe"
  },
  {
    image: "/i5.jpg",
    audio: "/andham.mp3",
    caption: "😊😊😊"
  },
  {
    image: "/i1.jpg",
    audio: "/tn.mp3",
    caption: "Nee Recommendation nuvvu pampina photoKe"
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
    const timer = setTimeout(() => setLoaded(false), 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

const goToNext = () => {
  if (isPlaying !== null) {
    audioRefs.current[isPlaying].pause();
    setIsPlaying(null);
  }
  setCurrentIndex((prev) => (prev + 1) % (photos.length - 2));
};

const goToPrev = () => {
  if (isPlaying !== null) {
    audioRefs.current[isPlaying].pause();
    setIsPlaying(null);
  }
  setCurrentIndex((prev) => (prev === 0 ? photos.length - 3 : prev - 1));
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
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-pink-300 to-purple-200 p-4">
      {/* Balloons */}
      {[...Array(10)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-12 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24 animate-float"
          style={{
            top: `${i % 2 === 0 ? '10%' : '20%'}`,
            left: `${10 + (i * 8)}%`,
            animationDelay: `${i * 100}ms`,
            transform: `rotate(${Math.random() * 30 - 15}deg)`
          }}
        >
          <img 
            src="/ballons.png" 
            alt="Balloon" 
            className="w-full h-full object-contain"
          />
        </div>
      ))}

      {/* Confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Title */}
        <div className="text-center mb-6 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-teal-600 bg-white/90 px-6 py-2 rounded-full shadow-lg">
            HappY BirthDay
          </h1>
          <h2 className="text-2xl md:text-3xl mt-2 text-teal-600 bg-white/90 px-6 py-2 rounded-full shadow-lg">
            T Indhuu Reddy Garuu
          </h2>
        </div>

        {/* Photo Gallery */}
        <div className="w-full max-w-6xl flex items-center justify-center relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 md:-left-4 z-20 bg-white/90 hover:bg-white text-purple-600 font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
          >
            ❮
          </button>

          <div className={`flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full transition-opacity duration-300 ${loaded ? 'opacity-70' : 'opacity-100'}`}>
            {visiblePhotos.map((photo, index) => {
              // Create a temporary image to check dimensions
              const img = new Image();
              img.src = photo.image;
              const isPortrait = img.height > img.width;
              
              return (
                <div
                  key={`${currentIndex}-${index}`}
                  className={`relative group bg-white border-4 md:border-8 border-white rounded-xl md:rounded-2xl overflow-hidden shadow-xl flex ${
                    isPortrait ? 'flex-col portrait-aspect' : 'flex-row landscape-aspect'
                  }`}
                  style={{
                    width: 'clamp(250px, 80vw, 350px)',
                    height: isPortrait ? 'clamp(350px, 70vh, 450px)' : 'clamp(250px, 50vh, 350px)',
                    flex: '0 0 auto'
                  }}
                >
                  {/* Hidden audio element */}
                  <audio
                    ref={el => audioRefs.current[index] = el}
                    src={photo.audio}
                    onEnded={() => setIsPlaying(null)}
                  />

                  {/* Image container with proper aspect ratio */}
                  <div className={`relative ${
                    isPortrait ? 'w-full h-full' : 'w-full h-full'
                  } overflow-hidden`}>
                    <img
                      src={photo.image}
                      alt={photo.caption}
                      className={`absolute inset-0 ${
                        isPortrait ? 'w-full h-full object-cover' : 'w-full h-full object-contain'
                      } transition-transform duration-500 group-hover:scale-105`}
                      style={{
                        objectPosition: 'center'
                      }}
                    />
                  </div>

                  {/* Audio button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAudio(index);
                    }}
                    className={`absolute top-2 right-2 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all ${
                      isPlaying === index ? 'bg-purple-600 text-white' : 'bg-white/90 text-purple-600 hover:bg-white'
                    } shadow-md`}
                  >
                    {isPlaying === index ? '⏸️' : '▶️'}
                  </button>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-center">
                    <p className="text-white font-bold text-sm md:text-base">
                      {photo.caption}
                    </p>
                    <p className="text-white/80 text-xs md:text-sm mt-1">
                      {currentIndex + index + 1}/{photos.length}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={goToNext}
            className="absolute right-0 md:-right-4 z-20 bg-white/90 hover:bg-white text-purple-600 font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
          >
            ❯
          </button>
        </div>

        {/* Mobile indicators */}
        <div className="flex gap-2 mt-6 md:hidden">
          {photos.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i >= currentIndex && i < currentIndex + 3 ? 'bg-teal-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Navigation Button */}
        <div className="mt-8 md:mt-12">
          <CuteWishButton 
            msg={"Click me after enjoying this page's music"} 
            link={"/wishes"} 
          />
        </div>
      </div>
    </div>
  );
};

export default CelebrationBackground;