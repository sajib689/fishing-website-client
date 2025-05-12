'use client'
import React, { useState } from 'react';
import ChartDetailsCarousel from './ChartDetailsCarousel';
import { Clock, MapPin, Users } from 'lucide-react';
import Link from 'next/link';
// import { Charter } from '@/types/chart';
import Image from 'next/image';
const charters = [
    {
        id: 1,
        title: "Deep Sea Fishing Adventure",
        description: "Experience the thrill of deep sea fishing in the beautiful waters of Florida. Perfect for beginners and experienced anglers alike. All equipment provided.",
        image: "/charts/chart1.png",
        price: 800,
        duration: 2,
        capacity: 8,
        location: "Florida",
        type: "Private Group",
        depositPolicy: "Deposit non refundable",
        icon: '/charts/1.png'
    },
    {
        id: 2,
        title: "Coastal Fishing Experience",
        description: "Enjoy a day of coastal fishing in the scenic Tampa Bay area. Great for families and groups looking to catch a variety of fish species in calm waters.",
        image: "/charts/chart2.png",
        price: 800,
        duration: 2,
        capacity: 8,
        location: "Tampa Bay",
        type: "Private Group",
        depositPolicy: "Deposit non refundable",
        icon: '/charts/2.png'
    },
    // {
    //     id: 3,
    //     title: "Reef Fishing Expedition",
    //     description: "Discover the abundant marine life around Florida's beautiful reefs. This charter offers a unique opportunity to catch exotic fish species in crystal clear waters.",
    //     image: "/charts/chart3.png",
    //     price: 800,
    //     duration: 2,
    //     capacity: 8,
    //     location: "Florida",
    //     type: "Private Group",
    //     depositPolicy: "Deposit non refundable",
    //     icon: '/charts/3.png'
    // },
];
const ChartDetails = () => {
    const [selectedDate, setSelectedDate] = useState('10th September 2025');
    const [selectedGroup, setSelectedGroup] = useState('4 people');

    const tripOptions = [
        { date: '10th September 2025', group: '4 people' },
        { date: '11th September 2025', group: '4 people' },
        { date: '12th September 2025', group: '6 people' }
    ];
    return (
        <div>
            <div>
                <ChartDetailsCarousel />
                <div className="max-w-7xl mx-auto mt-32 mb-32 px-5 sm:px-6 lg:px-8">
                    {/* section area */}
                    <div className="max-w-sm ">
                        {/* Heading */}
                        <h1 className="text-2xl font-bold text-gray-800 mb-6">Select your trip</h1>

                        {/* Location and date info */}
                        <div className="bg-blue-50 p-4 rounded-lg mb-6">
                            <p className="text-lg font-medium text-[#242424]">
                                Florida / {selectedDate} / {selectedGroup}
                            </p>
                        </div>

                        {/* Trip table with dropdowns */}
                        <div className="rounded-lg overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Trip Date
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Group size
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="p-2">
                                            <select
                                                value={selectedDate}
                                                onChange={(e) => setSelectedDate(e.target.value)}
                                                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                                            >
                                                {tripOptions.map((option, index) => (
                                                    <option key={`date-${index}`} value={option.date}>
                                                        {option.date}
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                        <td className="px-2 p-2">
                                            <select
                                                value={selectedGroup}
                                                onChange={(e) => setSelectedGroup(e.target.value)}
                                                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                                            >
                                                {tripOptions.map((option, index) => (
                                                    <option key={`group-${index}`} value={option.group}>
                                                        {option.group}
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* charter section */}
                    <div className="space-y-6">
                        {charters.map((charter) => (
                            <div key={charter.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden p-4">
                                <div className="flex flex-col md:flex-row">
                                    {/* Charter Image */}
                                    <div className="md:w-1/3 h-64 md:h-auto relative">
                                        <Image
                                            src={charter.image || "/placeholder.svg"}
                                            alt={charter.title}
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                    </div>

                                    {/* Charter Details */}
                                    <div className="w-full md:w-2/3 p-4 sm:p-6">
                                        {/* Title & Reserve Row */}
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                                            <h3 className="text-xl sm:text-2xl font-semibold">{charter.title}</h3>
                                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                                                <div className="flex items-center text-sm sm:text-base">
                                                    <MapPin className="h-5 w-5 text-orange-500 mr-1" />
                                                    <span className="text-gray-600">{charter.location}</span>
                                                </div>
                                                <Link
                                                    href='/chartbookform'
                                                    className="bg-[#FF9500] hover:bg-[#e68300] text-white text-sm sm:text-base px-4 py-2 rounded-md transition-colors"
                                                >
                                                    Reserve now
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 mt-3 sm:mt-4 mb-4 text-sm sm:text-base">
                                            {charter.description}
                                        </p>

                                        {/* Key Features */}
                                        <div className="mb-4">
                                            <h4 className="font-medium mb-2 text-sm sm:text-base">Key features:</h4>
                                            <div className="flex flex-wrap gap-3">
                                                <div className="flex items-center bg-blue-50 text-[#242424] px-3 py-1 rounded-full border border-[#0037FF40] text-sm">
                                                    <Image src={charter.icon} width={16} height={16} alt="icon" className="mr-1" />
                                                    <span>{charter.type}</span>
                                                </div>
                                                <div className="flex items-center bg-blue-50 text-[#242424] px-3 py-1 rounded-full border border-[#0037FF40] text-sm">
                                                    <Clock className="h-4 w-4 mr-1 text-[#0037FF]" />
                                                    <span>{charter.duration} Hours</span>
                                                </div>
                                                <div className="flex items-center bg-blue-50 text-[#242424] px-3 py-1 rounded-full border border-[#0037FF40] text-sm">
                                                    <Users className="h-4 w-4 mr-1 text-[#0037FF]" />
                                                    <span>Up to {charter.capacity} people</span>
                                                </div>
                                                <div className="flex items-center bg-blue-50 text-[#242424] px-3 py-1 rounded-full border border-[#0037FF40] text-sm">
                                                    <Image src={charter.icon} width={16} height={16} alt="icon" className="mr-1" /><span>{charter.depositPolicy}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartDetails;