import React from "react";
import pattern1 from '../assets/vector1.png';
import pattern2 from '../assets/vector2.png';
function HeroArea({ inProgressCount, resolvedCount }) {
    return(
        <div className="grid grid-cols-2 gap-6 mb-8">
       
       {/* In-Progress Card */}
      <div className="relative overflow-hidden rounded-md bg-gradient-to-r from-[#8B5CF6] to-[#9333EA] p-6 text-white shadow-sm h-32 flex flex-col items-center justify-center">
        <img 
          src={pattern1}  
          alt="" 
          className="absolute top-0 left-0 h-full w-auto opacity-50 mix-blend-screen pointer-events-none" 
        />
        <img 
          src={pattern2} 
          alt="" 
          className="absolute top-0 right-0 h-full w-auto opacity-50 mix-blend-screen pointer-events-none" 
        />
        <h3 className="text-sm font-medium mb-1 relative z-10">In-Progress</h3>
        <p className="text-4xl font-bold relative z-10">{inProgressCount}</p>
      </div>

      {/* Resolved Card */}
      <div className="relative overflow-hidden rounded-md bg-gradient-to-r from-[#34D399] to-[#059669] p-6 text-white shadow-sm h-32 flex flex-col items-center justify-center">
        <img 
          src={pattern1} 
          alt="" 
          className="absolute top-0 left-0 h-full w-auto opacity-50 mix-blend-screen pointer-events-none" 
        />
        <img 
          src={pattern2} 
          alt="" 
          className="absolute top-0 right-0 h-full w-auto opacity-50 mix-blend-screen pointer-events-none" 
        />
        <h3 className="text-sm font-medium mb-1 relative z-10">Resolved</h3>
        <p className="text-4xl font-bold relative z-10">{resolvedCount}</p>
      </div>
    </div>
    );
}

export default HeroArea;