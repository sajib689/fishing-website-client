"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function FishingHero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="relative mt-28 sm:mt-24 md:mt-28 lg:mt-32 mb-16 sm:mb-20 md:mb-24 lg:mb-32 overflow-hidden rounded-xl sm:rounded-2xl ">
        {/* Background & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/fishing-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-auto min-h-[200px] sm:min-h-[245px] px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 gap-6 sm:gap-8">
          {/* Text */}
          <div className="text-white text-center md:text-left max-w-2xl w-full md:w-auto">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
              Welcome to FishingTripper!
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl opacity-90">
              This video explains a bit more about what we offer and how to book a private or shared charter through our site.
            </p>
          </div>

          {/* Video */}
          <div className="w-full sm:w-[400px] md:w-[350px] lg:w-[400px] h-40 sm:h-48 md:h-52 bg-white/90 rounded-lg overflow-hidden shadow-md flex items-center justify-center">
            {isPlaying ? (
              <video 
                className="w-full h-full object-cover" 
                controls 
                autoPlay
                playsInline
              >
                <source src="https://www.youtube.com/watch?v=0kVWwI6yMHA&list=PLHvd45IdmT50wjWBy0cSNq-HCKpHlFeiq&index=5" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <button
                onClick={() => setIsPlaying(true)}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 hover:bg-white transition-all duration-300 flex items-center justify-center group"
                aria-label="Play video"
              >
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}