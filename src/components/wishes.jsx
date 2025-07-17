import React, { useState, useEffect } from 'react';
import CuteWishButton from './cuteButton';
const BirthdayWishes = () => {
  const [isFlickering, setIsFlickering] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showEffects, setShowEffects] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  
  useEffect(() => {
    const birthdaySong = new Audio('/birthdaySong.mp3');
    
    const handleSongEnd = () => {
      setAudioPlaying(false);
    };

    birthdaySong.addEventListener('ended', handleSongEnd);
    
    return () => {
      birthdaySong.removeEventListener('ended', handleSongEnd);
      birthdaySong.pause();
    };
  }, []);

  const handleCakeClick = () => {
    if (audioPlaying) return;
    
    setIsFlickering(true);
    setAudioPlaying(true);
    
    const birthdaySong = new Audio('/birthdaySong.mp3');
    birthdaySong.play().catch(e => console.log("Audio play failed:", e));
    
    setTimeout(() => {
      setIsFlickering(false);
      setShowText(true);
      setShowEffects(true);
    }, 3000);
  };

  return (
    <div className="birthday-container">
        {showEffects&&<CuteWishButton msg={"For songs and images"} link={"/celeb"}/>}
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

      <h1 className='flicker'>Happy Birthday!</h1>
      
      <div 
        className={`cake ${isFlickering ? 'flicker' : ''} ${showEffects&&'animate-bounce'}`}
        onClick={handleCakeClick}
      >
        {showEffects||<p className='text-pink-500 fuzzy-bubbles-bold text-xl'>Click mee</p>}
        <img 
          src="/bk.png" 
          alt="Birthday Cake"
        />
      </div>
      
      {showText && (
        <div className="message">
          <p className="celebrate">🎉 🎂 🎈</p>
        </div>
      )}

      {/* Effects that appear after click */}
      {showEffects && (
        <>
          <div className="celebration-gif">
            <img 
              src="/dance.gif"  // Replace with your celebration GIF
              alt="Celebration"
              className="gif-image"
            />
          </div>
          <div className="extra-image">
            <img 
              src="/danceVideo.gif"  // Replace with your additional image
              alt="Birthday Wish"
              className="wish-image"
            />
          </div>
          <div className="celebration-gif2">
            <img 
              src="/dab.gif"  // Replace with your celebration GIF
              alt="Celebration"
              className="gif-image"
            />
          </div>
          <div className="extra-image2">
            <img 
              src="/dan.gif"  // Replace with your celebration GIF
              alt="Celebration"
              className="gif-image"
            />
          </div>
        </>
      )}

      <style jsx>{`
        .birthday-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
          text-align: center;
          background: #ffcdea;
          overflow: hidden;
        }
        
        h1 {
          font-size: clamp(2rem, 8vw, 3.5rem);
          font-weight: bold;
          color: #d23369;
          margin-bottom: 2rem;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
          z-index: 2;
        }
        
        .cake {
          margin: 2rem;
          cursor: pointer;
          transition: transform 0.3s ease;
          z-index: 2;
        }
        
        .cake:hover {
          transform: scale(1.05);
        }
        
        .cake img {
          max-width: min(300px, 80vw);
          height: auto;
          border-radius: 8px;   
        }
        
        .flicker {
          animation: flicker 0.3s infinite;
        }
        
        .message {
          margin-top: 2rem;
          font-size: clamp(1.2rem, 4vw, 1.8rem);
          color: #d23369;
          animation: fadeIn 1.5s ease-out;
          z-index: 2;
        }
        
        .celebrate {
          display: inline-block;
          margin-top: 1rem;
          font-size: 1.5em;
          animation: bounce 1s infinite;
        }
        
        .celebration-gif {
          position: absolute;
          bottom: 20px;
          right: 20px;
          z-index: 3;
          animation: fadeIn 1s ease-out;
        }
        .celebration-gif2 {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 3;
          animation: fadeIn 1s ease-out;
        }
        .extra-image {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 3;
          animation: fadeIn 1s ease-out;
        }
        .extra-image2 {
          position: absolute;
          bottom: 20px;
          left: 20px;
          z-index: 3;
          animation: fadeIn 1s ease-out;
        }
        .gif-image {
          max-width: min(150px, 30vw);
          height: auto;
          border-radius: 8px;
        }
        
        .wish-image {
          max-width: min(200px, 40vw);
          height: auto;
          border-radius: 8px;
        }
        
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes confettiFall {
          0% { transform: translateY(-10vh) rotate(0deg); }
          100% { transform: translateY(110vh) rotate(360deg); }
        }
        
        @keyframes sparkleTwinkle {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @media (max-width: 768px) {
          .cake img {
            max-width: 70vw;
          }
          
          .message {
            margin-top: 1.5rem;
          }
          
          .celebration-gif {
            bottom: 10px;
            right: 10px;
          }
          .celebration-gif2 {
            top: 10px;
            right: 10px;
          }
          
          .extra-image {
            top: 10px;
            left: 10px;
          }
            .extra-image2 {
            bottom: 10px;
            left: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default BirthdayWishes;