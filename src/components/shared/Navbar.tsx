"use client"

import { Search, MapPin, Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import clsx from "clsx"
import SearchBox from "../home/SearchBox"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showSearchBox, setShowSearchBox] = useState(false)
  const [showScrollBox, setShowScrollBox] = useState(false)
  const searchBoxRef = useRef<HTMLDivElement>(null)

  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const showWhiteNavbar = !isHomePage || isScrolled || mobileMenuOpen

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 100)
      setShowScrollBox(scrollY > 500)
      
      // Close search box when scrolled to top
      if (scrollY === 0) {
        setShowSearchBox(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Close search box when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target as Node)) {
        setShowSearchBox(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Show search box on click
  const handleSearchClick = () => {
    setShowSearchBox(true)
    setShowScrollBox(true)
  }

  return (
    <header
      className={clsx(
        "w-full transition-all duration-300 ease-in-out px-5",
        showWhiteNavbar
          ? "fixed top-0 z-50 bg-white shadow-sm"
          : "absolute z-30 bg-transparent"
      )}
    >
      <div className="relative mx-auto flex h-[90px] max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={
              showWhiteNavbar
                ? "/logo/nav-logo-dark.png"
                : "/logo/nav-logo-light.png"
            }
            width={147}
            height={26}
            alt="Logo"
            priority
          />
        </Link>

        {/* Center Search or SearchBox */}
        <div className="absolute left-1/2 top-1/2 hidden sm:flex -translate-x-1/2 -translate-y-1/2 transform">
          {showSearchBox ? (
            <div className="w-[600px]" ref={searchBoxRef}>
              <SearchBox />
            </div>
          ) : (
            showWhiteNavbar && (
              <div
                className="flex items-center rounded-full shadow-sm bg-white cursor-pointer [box-shadow:0_20px_50px_rgba(0,0,0,0.3)] hover:[box-shadow:0_25px_60px_rgba(0,0,0,0.2)] ring-1 ring-gray-100 transition-shadow duration-300"
                onClick={() => {
                  if (showScrollBox) handleSearchClick();
                }}
              >
                <button className="rounded-l-full px-4 py-2 text-sm font-normal text-gray-600 hover:bg-gray-100 cursor-pointer">
                  Where
                </button>
                <div className="h-6 w-px bg-gray-200"></div>
                <button className="px-4 py-2 text-sm font-normal text-gray-600 hover:bg-gray-100 cursor-pointer">
                  When
                </button>
                <div className="h-6 w-px bg-gray-200"></div>
                <button className="px-4 py-2 text-sm font-normal text-gray-600 hover:bg-gray-100 cursor-pointer">
                  Who
                </button>
                <button className="h-8 w-8 rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700 cursor-pointer">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            )
          )}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/register"
            className={`text-sm font-medium ${showWhiteNavbar ? "text-black" : "text-white"}`}
          >
            Sign up
          </Link>
          <Link
            href="/login"
            className={`text-sm font-medium ${showWhiteNavbar ? "text-black" : "text-white"}`}
          >
            Login
          </Link>
          <button className="flex items-center rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">
            <MapPin className="mr-2 h-4 w-4" />
            List your boat
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${showWhiteNavbar ? "text-black" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${showWhiteNavbar ? "text-black" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={clsx(
          "sm:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white",
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 py-4 flex flex-col gap-4">
          <Link
            href="/register"
            className="text-sm font-medium text-gray-800 hover:text-blue-600"
          >
            Sign up
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium text-gray-800 hover:text-blue-600"
          >
            Login
          </Link>
          <button className="w-full flex items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">
            <MapPin className="mr-2 h-4 w-4" />
            List your boat
          </button>
        </div>
      </div>
    </header>
  )
}