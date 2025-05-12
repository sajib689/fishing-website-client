import { ShoppingBag, ThumbsUp, Users } from 'lucide-react';
import React from 'react';

const FishingTripper = () => {
  const data = {
    title: "WHY CHOOSE FISHING TRIPPER?",
    subTitle: "Experience Fishing Like Never Before",
    description:
      "Planning your fishing adventure has never been easier. With flexible options, top-rated captains, and seamless booking, we make sure your trip is tailored just for you. Whether you're a seasoned angler or a first-timer, we've got everything you need for an unforgettable experience on the water.",
    cards: [
      {
        id: 1,
        title: "Private Charters",
        icon: "ShoppingBag" as keyof typeof iconMap,
        description:
          "Book the entire boat for you and your group. Perfect for family trips, celebrations, or focused fishing excursions.",
      },
      {
        id: 2,
        title: "Shared Charters",
        icon: "Users" as keyof typeof iconMap,
        description:
          "Join other anglers for an affordable group trip. Meet fellow fishing enthusiasts and share the adventure.",
      },
      {
        id: 3,
        title: "No customer fees",
        icon: "ThumbsUp" as keyof typeof iconMap,
        description:
          "There are no hidden fees or commissions when you book through FishingTripper.",
      },
    ],
  };

  const iconMap = {
    ShoppingBag: <ShoppingBag className="text-white w-5 h-5" />,
    ThumbsUp: <ThumbsUp className="text-white w-5 h-5" />,
    Users: <Users className="text-white w-5 h-5" />,
  };

  return (
    <div className="bg-blue-600 text-white py-16 max-w-full mx-auto mt-32 mb-32 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="uppercase text-sm font-medium tracking-wider mb-4">{data?.title}</h2>
          <h1 className="text-3xl sm:text-4xl font-[400] mb-6">{data?.subTitle}</h1>
          <p className="max-w-3xl mx-auto text-center text-lg sm:text-xl">{data?.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.cards?.map((card) => (
            <div
              key={card.id}
             className="bg-white rounded-xl p-6 text-gray-800 [box-shadow:0_20px_50px_rgba(0,0,0,0.6)] hover:[box-shadow:0_25px_60px_rgba(0,0,0,0.5)] ring-1 ring-gray-100 transition-shadow duration-300 flex flex-col justify-between"

            >
              <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center mb-4">
                {iconMap[card?.icon]}
              </div>
              <h3 className="font-bold text-lg mb-3">{card?.title}</h3>
              <p className="text-base sm:text-lg">{card?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FishingTripper;
