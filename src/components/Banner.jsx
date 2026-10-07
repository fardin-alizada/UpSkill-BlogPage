import React from 'react';

export default function Banner() {
  return (
    <div className="w-full bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 rounded-3xl shadow-md px-8 sm:px-12 lg:px-16 py-14 sm:py-16 lg:py-20 overflow-hidden">
          
          {/* Decorative sparkles */}
          <div className="absolute top-6 right-12 text-white text-2xl opacity-70 pointer-events-none">+</div>
          <div className="absolute top-12 right-20 text-white text-xl opacity-60 pointer-events-none">✦</div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 leading-tight">
              Don't wait — take the next step toward your brighter future.
            </h2>
            
            <p className="text-white text-base sm:text-lg mb-8 sm:mb-10 opacity-95 font-medium leading-relaxed">
              Your journey begins with one simple action today
            </p>
            
            <button className="bg-white text-cyan-500 px-7 sm:px-9 py-3 sm:py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base shadow-sm">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}