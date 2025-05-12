import CharterListings from "@/components/home/CharterListings"
import DestinationSearch from "@/components/home/DestinationCard"
import FishingHero from "@/components/home/FishingHero"
import FishingTripper from "@/components/home/FishingTripper"
import SearchHero from "@/components/home/SearchHero"
import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Navbar overlays SearchHero initially */}
      <div className="relative">
        <Navbar />
        <SearchHero />
      </div>

      {/* Rest of the content pushes page down so Navbar can change on scroll */}
   
        <FishingHero />
        <DestinationSearch />
        <FishingTripper />
        <CharterListings />
        <Footer/>
    </div>
  )
}
