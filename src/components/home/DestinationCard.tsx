
import Image from "next/image";

export default function DestinationSearch() {
  // JSON data for the destinations
  const destinations = [
    {
      id: 1,
      name: "Key West",
      flag: "🇺🇸",
      chartersCount: 12,
      imageUrl: "/destination/destination1.jpg",
      avatarBgColor: "bg-green-600",
      avatarText: "T"
    },
    {
      id: 2,
      name: "Miami",
      flag: "🇺🇸",
      chartersCount: 24,
      imageUrl: "/destination/destination2.jpg",
      avatarBgColor: "bg-gray-900",
      avatarText: "M"
    },
    {
      id: 3,
      name: "Tampa Bay",
      flag: "🇺🇸",
      chartersCount: 7,
      imageUrl: "/destination/destination3.jpg",
      avatarBgColor: "bg-blue-900",
      avatarText: "T"
    }
  ];

  return (
  <div className="max-w-7xl mx-auto mt-10 mb-10 sm:mb-8 md:mb-10 lg:mb-24 xl:mb-32 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 lg:py-12">

      <h1 className="text-2xl font-bold mb-6">Search our destinations</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {destinations?.map(destination => (
          <div key={destination.id} className="overflow-hidden shadow-md rounded-lg">
            <div className="relative h-72">
              <Image
                src={destination.imageUrl}
                alt={`${destination.name} view`}
                layout="fill"
                className="object-cover"
              />
              
             
            </div>
            <div className="pt-4 px-4">
              <div className="flex items-center mb-2">
                <h2 className="text-xl font-semibold">{destination.name}</h2>
                <span className="ml-2">{destination.flag}</span>
              </div>
              <p className="text-gray-700">{destination.chartersCount} Charters</p>
            </div>
            <div className="text-sm text-gray-500 pt-0 px-4 pb-4">Enter some content here...</div>
          </div>
        ))}
      </div>
    </div>
  );
}
