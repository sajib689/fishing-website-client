import React from 'react';
import { Search } from "lucide-react";
const SearchBox = () => {
    
    return (
        // Beautiful Floating Search Form
        <div>
            <div className="absolute z-20 left-1/2 bottom-[-70px] sm:bottom-[-50px] md:bottom-[-40px] w-full max-w-md sm:max-w-4xl transform -translate-x-1/2 px-4">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 backdrop-blur-md bg-white/90 border border-gray-200 shadow-xl p-5 sm:p-0 rounded-2xl sm:rounded-full">
                    {/* Input Fields */}
                    <div className="flex flex-col sm:flex-row flex-1 w-full divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                        {[
                            { label: "Where", placeholder: "Search destinations" },
                            { label: "Date", placeholder: "Select date" },
                            { label: "Who", placeholder: "How many guests?" },
                            { label: "Type", placeholder: "Private or shared?" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex-1 px-4 py-3 flex flex-col justify-center"
                            >
                                <label className="text-sm font-medium text-[#474747] mb-1 ps-5">
                                    {item.label}
                                </label>
                                <input
                                    type="text"
                                    placeholder={item.placeholder}
                                    className="w-full bg-transparent border-none text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-0 ps-5"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Search Button */}
                    <div className="flex justify-center items-center px-4 py-3 sm:px-5">
                        <button className="h-12 w-full sm:w-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition cursor-pointer">
                            <Search className="h-5 w-5" />
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;