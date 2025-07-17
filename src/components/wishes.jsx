import React, { useState, useEffect, useRef } from 'react';
import CuteWishButton from './cuteButton';

const BirthdayWishes = () => {
  const [isFlickering, setIsFlickering] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showEffects, setShowEffects] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  
  const birthdaySongRef = useRef(null);

  useEffect(() => {
    birthdaySongRef.current = new Audio('/birthdaySong.mp3');
    
    const handleSongEnd = () => setAudioPlaying(false);
    birthdaySongRef.current.addEventListener('ended', handleSongEnd);
    
    return () => {
      birthdaySongRef.current.pause();
      birthdaySongRef.current.currentTime = 0;
      birthdaySongRef.current.removeEventListener('ended', handleSongEnd);
    };
  }, []);

  const handleCakeClick = () => {
    if (audioPlaying) return;
    
    setIsFlickering(true);
    setAudioPlaying(true);
    birthdaySongRef.current.play().catch(e => console.log("Audio play failed:", e));
    
    setTimeout(() => {
      setIsFlickering(false);
      setShowText(true);
      setShowEffects(true);
    }, 3000);
  };

  return (
    <div className="birthday-container">
      {showEffects && <CuteWishButton msg={"For songs and images"} link={"/celeb"}/>}
      
      {/* Confetti */}
      <div className="confetti-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`
            }}
          />
        ))}
      </div>

      {/* Sparkles */}
      <div className="sparkles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="sparkle"
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

      <h1 className="birthday-title">Happy Birthday JI!</h1>
      
      <div 
        className={`cake ${isFlickering ? 'flicker' : ''} ${showEffects && 'bounce'}`}
        onClick={handleCakeClick}
      >
        {showEffects || <p className="click-me">Click mee</p>}
        <img 
          src="/bk.png" 
          alt="Birthday Cake"
          className="cake-image"
        />
      </div>
      
      {showText && (
        <div className="message-container fuzzy-bubbles-regular">
          <div className="message-box">
            <p className="personal-message text-blue-500">
              Heyy Indhuu🤗, Mannny Moreee Happpy returnss of the dayyy🥳, Happpy 20's, the ICSE girl😎, Sleeping beautyy😴💤, Chala kindness😊, Best Humor😎nadhi kuda anuko😌, ekkuva care😊, super FrndsGang, someone said it true "Kundhanapu" bomme nuvvu ✨, konchem allari🙃, Konchem attitude for good😅. Neeku telvadhu raa nuvvu chana manchi ammayivi{"(u r good)"} and andhanga kuda untav😅😌. Keep that smillee up, keep more storiess that brings our smile up tooo, stay connected😎, yeaa I am jealous. 
            </p>
            <div className="signature">
              <p>Once Again Happiest birthday</p>
              <p>Thala for a reason</p>
              <p>Telangana pori for a reason</p>
              <p>Me Being cringgy, sometimes it's okay🤣😅</p>
            </div>
          </div>
        </div>
      )}

      {/* Effects that appear after click */}
      {showEffects && (
        <>
          <div className="celebration-gif">
            <img src="/dance.gif" alt="Celebration" className="gif-image"/>
          </div>
          <div className="extra-image">
            <img src="/danceVideo.gif" alt="Birthday Wish" className="wish-image"/>
          </div>
          <div className="celebration-gif2">
            <img src="/dab.gif" alt="Celebration" className="gif-image"/>
          </div>
          <div className="extra-image2">
            <img src="/dan.gif" alt="Celebration" className="gif-image"/>
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
          background: linear-gradient(135deg, #ffcce6, #f9f9f9);
          overflow: hidden;
        }
        
        .birthday-title {
          font-size: clamp(2rem, 8vw, 3.5rem);
          font-weight: bold;
          color: #d23369;
          margin-bottom: 2rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
          z-index: 2;
          padding: 0 20px;
        }
        
        .cake {
          margin: 2rem;
          cursor: pointer;
          transition: transform 0.3s ease;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .cake:hover {
          transform: scale(1.05);
        }
        
        .cake-image {
          max-width: min(300px, 80vw);
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(210, 51, 105, 0.3);
        }
        
        .click-me {
          color: #d23369;
          font-family: 'Comic Sans MS', cursive, sans-serif;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          font-weight: bold;
        }
        
        .message-container {
          margin: 2rem auto;
          width: 90%;
          max-width: 800px;
          z-index: 2;
        }
        
        .message-box {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 8px 32px rgba(210, 51, 105, 0.2);
          border: 2px solid rgba(210, 51, 105, 0.15);
          animation: fadeIn 1.5s ease-out;
        }
        
        .personal-message {
          font-size: clamp(1rem, 1.2vw, 1.3rem);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          text-align: left;
        }
        
        .signature {
          font-size: clamp(1.2rem, 1.5vw, 1.5rem);
          color: #d23369;
          font-style: italic;
          text-align: right;
          line-height: 1.8;
        }
        
        .signature p {
          margin: 0.5rem 0;
        }
        
        /* Celebration elements */
        .celebration-gif {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 3;
          animation: fadeIn 1s ease-out;
        }
        
        .celebration-gif2 {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 3;
          animation: fadeIn 1s ease-out;
        }
        
        .extra-image {
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 3;
          animation: fadeIn 1s ease-out;
        }
        
        .extra-image2 {
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 3;
          animation: fadeIn 1s ease-out;
        }
        
        .gif-image {
          width: min(150px, 25vw);
          height: auto;
          border-radius: 8px;
          border: 2px solid rgba(255, 255, 255, 0.7);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .wish-image {
          width: min(200px, 35vw);
          height: auto;
          border-radius: 8px;
          border: 2px solid rgba(255, 255, 255, 0.7);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        /* Animations */
        .flicker {
          animation: flicker 0.3s infinite;
        }
        
        .bounce {
          animation: bounce 1s infinite;
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
          50% { transform: translateY(-10px); }
        }
        
        /* Confetti and sparkles */
        .confetti-container, .sparkles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }
        
        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          animation: confettiFall linear infinite;
        }
        
        .sparkle {
          position: absolute;
          animation: sparkleTwinkle ease-in-out infinite;
        }
        
        @keyframes confettiFall {
          0% { transform: translateY(-10vh) rotate(0deg); }
          100% { transform: translateY(110vh) rotate(360deg); }
        }
        
        @keyframes sparkleTwinkle {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .message-box {
            padding: 1.5rem;
            border-radius: 15px;
          }
          
          .personal-message {
            font-size: 1rem;
          }
          
          .signature {
            font-size: 1.1rem;
          }
          
          .celebration-gif,
          .celebration-gif2,
          .extra-image,
          .extra-image2 {
            width: 80px !important;
          }
        }
        
        @media (min-width: 1200px) {
          .message-box {
            padding: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BirthdayWishes;