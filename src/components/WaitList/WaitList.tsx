"use client"

import Image from "next/image"
import { useState } from "react"

export default function WaitlistPage() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Email submitted:", email)
        setEmail("")
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] rounded-xl overflow-hidden shadow-xl">
                {/* Left side - Blue background with form */}
                <div className="bg-blue-600 p-6 sm:p-8 flex flex-col">
                    {/* Logo */}
                    <div className="mb-8 sm:mb-12">
                        <Image 
                            src='/logo/nav-logo-light.png' 
                            width={195} 
                            height={70} 
                            alt='logo'
                            className="h-auto w-[160px] sm:w-[195px]"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center mx-auto w-full max-w-md">
                        <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight mb-3 sm:mb-4">
                            Sign up today to join our waitlist!
                        </h2>
                        <p className="text-blue-100 text-lg sm:text-xl mb-6 sm:mb-8">
                            Launching soon... Complete online booking platform for Private and Shared Charters.
                        </p>

                        {/* Form */}
                        <div className="bg-white rounded-lg p-5 sm:p-6 shadow-lg">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-base sm:text-lg font-semibold text-gray-900 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 transition-colors text-gray-700"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 text-lg"
                                >
                                    Join the waitlist
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Right side - Image */}
                <div className="hidden md:block relative">
                    <Image
                        src="/waitlist/waitlist-img.jpg"
                        alt="People fishing on a boat at sea"
                        fill
                        className="object-cover"
                        priority
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}