import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="relative w-full min-h-screen bg-[#ffcdea] flex flex-col justify-between overflow-x-hidden">
            <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-300 text-xl animate-sparkle"
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
       <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-blue-400 w-2 h-2 rounded-full animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>
            <div className="flex flex-col items-center pt-4 px-2 sm:pt-8">
                <div className="flex justify-around w-full mb-4">
                    <div className="flex justify-around items-center w-[50%] flex-wrap lg:flex-nowrap">
                        <img
                            src="/ballons.png"
                            className="w-20 sm:w-28 md:w-36 lg:w-44 object-contain animate-float"
                            alt="Balloons"
                        />
                        <img
                            src="/ballons.png"
                            className="w-20 sm:w-28 md:w-36 lg:w-44 object-contain animate-float"
                            alt="Balloons"
                        />
                    </div>
                    <div className="flex justify-around items-center w-[50%] flex-wrap lg:flex-nowrap">
                        <img
                            src="/ballons.png"
                            className="w-20 sm:w-28 md:w-36 lg:w-44 object-contain scale-x-[-1] animate-float"
                            alt="Balloons"
                        />
                        <img
                            src="/ballons.png"
                            className="w-20 sm:w-28 md:w-36 lg:w-44 object-contain scale-x-[-1] animate-float"
                            alt="Balloons"
                        />
                    </div>
                </div>
                <div className="relative w-full max-w-[90vw] md:max-w-md mx-auto flex justify-center">
                    <svg
                        viewBox="0 0 500 150"
                        className="w-[280px] h-[120px] xs:w-[320px] xs:h-[140px] sm:w-[380px] sm:h-[160px] md:w-[450px] md:h-[180px]"
                    >
                        <path
                            id="curve"
                            d="M 50,120 A 200,60 0 1 1 450,120"
                            fill="transparent"
                        />
                        <text className="text-[28px] xs:text-[32px] sm:text-[36px] md:text-[40px] font-bold">
                            <textPath
                                xlinkHref="#curve"
                                startOffset="50%"
                                textAnchor="middle"
                                fill="#7e22ce"
                                dominantBaseline="middle"
                            >
                                HEY IT'S JULY 18TH!
                            </textPath>
                        </text>
                    </svg>
                </div>
                <Link
                    to="/celeb"
                    className= "relative inline-block px-8 py-3 bg-[#ff6b9e] hover:bg-[#ff4d88] hover:scale-105 transform duration-1000 text-white rounded-full shadow-lg font-bold text-lg fuzzy-bubbles-bold border-2 border-white border-dashed text-center animate-pulse"
                >
                    <span className="relative z-10">🎉 Click mee! INDHU JII🎊</span>
                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center text-xl">
                        🎂
                    </span>
                    <span className="absolute -bottom-2 -left-2 w-6 h-6 bg-red-300 rounded-full flex items-center justify-center text-sm">
                        💃
                    </span>
                </Link>

                <div className="flex justify-center items-center gap-4 sm:gap-8 mt-8 mb-8 w-[100%] flex-wrap">
                    <img
                        src="/godavari.jpg"
                        className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] border-4 border-white rounded-2xl animate-float"
                        alt="Character 1"
                    />
                    <img
                        src="/doremon.png"
                        className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] object-contain animate-float"
                        alt="Character 1"
                    />
                    <img
                        src="/shinchan.png"
                        className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] object-contain animate-bounce"
                        alt="Character 2"
                    />
                    <img
                        src="/shinall.png"
                        className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] object-contain animate-floatr"
                        alt="Character 1"
                    />
                    <img
                        src="/mithunam.jpeg"
                        className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] border-4 border-white rounded-2xl animate-floatr"
                        alt="Character 1"
                    />
                </div>
            </div>
            <div className="flex justify-between items-center px-4 pb-4 sm:pb-8 ">
                <img
                    src="/giftbox.png"
                    className="w-16 sm:w-20 md:w-24 lg:w-32 object-contain animate-bounce"
                    alt="Gift box"
                />
                <p className="text-[#7e22ce] rounded-full font-bold text-lg sm:text-3xl fuzzy-bubbles-bold text-center animate-bounce">WELCOMEEE TO YOUR 20'S</p>
                <img
                    src="/giftbox.png"
                    className="w-16 sm:w-20 md:w-24 lg:w-32 object-contain animate-bounce"
                    alt="Gift box"
                />
            </div>
        </div>
    );
};

export default Home;