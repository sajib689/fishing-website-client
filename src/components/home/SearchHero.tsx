"use client";

import SearchBox from "./SearchBox";



export default function SearchHero() {
  return (
    <div className="relative w-full min-h-[700px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[550px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/nav-banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-20 text-center text-white">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl mt-20">
          Plan Your Perfect Day on the Water
        </h1>
        <p className="mb-8 max-w-2xl text-sm sm:text-base md:text-lg">
          Find the best fishing charters, expert captains,
          <br className="hidden sm:block" />
          and unforgettable adventures—tailored to you.
          <br className="hidden sm:block" />
          Join a group fishing charter or hire a private boat.
        </p>
      </div>

     <SearchBox/>

    </div>
  );
}
