"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react" // Using Lucide menu icon
import Image from "next/image"

interface MenuItem {
  key: string
  label: React.ReactNode
  icon?: React.ReactNode
  children?: MenuItem[]
}

interface ReusableLayoutProps {
  items: MenuItem[]
  children: React.ReactNode
}

const ReusableLayout = ({ items, children }: ReusableLayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedKey, setSelectedKey] = useState("1")

  const handleMenuClick = (key: string) => {
    setSelectedKey(key)
    setMobileMenuOpen(false)
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      {/* Header */}
      <header className="h-30 bg-[#0037FF] flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center justify-center">
          {/* Replace with your actual logo */}
          <div className="w-40 h-16 bg-gray-200 flex items-center justify-center">
            <Image src='/logo/dash-logo.png' width={200} height={70} alt="logo"/>
          </div>
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Replace with your custom avatar component */}
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">A</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center p-2"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" /> {/* Lucide menu icon */}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 bg-[#0037FF] text-white p-6 overflow-y-auto">
          <nav>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => handleMenuClick(item.key)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                      selectedKey === item.key 
                        ? 'bg-[#0024A7] text-white' 
                        : 'hover:bg-[#0024A7]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon && <span>{item.icon}</span>}
                      <span>{item.label}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-white p-6 shadow-lg">
            <nav>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => handleMenuClick(item.key)}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                        selectedKey === item.key 
                          ? 'bg-green-100 text-green-800' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {item.icon && <span>{item.icon}</span>}
                        <span>{item.label}</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReusableLayout