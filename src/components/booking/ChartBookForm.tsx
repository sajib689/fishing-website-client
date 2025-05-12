"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPinIcon } from "lucide-react"
import Link from "next/link"

export default function ChartBookForm() {
    const [paymentMethod, setPaymentMethod] = useState<string | null>(null)
    const [termsChecked, setTermsChecked] = useState(false)

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 mt-20 md:mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Booking Form */}
                <div className="lg:col-span-2">
                    <div className="space-y-6">
                        {/* Personal Details Section */}
                        <div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold mb-1">
                                Enter your details
                            </h2>

                            <p className="text-[16px] text-[#878787] mb-4">
                                We just need a few details to get your Fishing Tripper day booked.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                        First name*
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        placeholder="Enter your first name"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E0E0E0] focus:border-[#E0E0E0]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Last name*
                                    </label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        placeholder="Enter your last name"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E0E0E0] focus:border-[#E0E0E0]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email address*
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E0E0E0] focus:border-[#E0E0E0]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                                        Mobile number*
                                    </label>
                                    <input
                                        id="mobile"
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E0E0E0] focus:border-[#E0E0E0]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-start">
                            <input
                                id="terms"
                                type="checkbox"
                                checked={termsChecked}
                                onChange={(e) => setTermsChecked(e.target.checked)}
                                className="h-6 w-6 text-[#3D53F5] focus:ring-[#3D53F5] border-[#3D53F5] rounded mt-1"
                            />

                            <label htmlFor="terms" className="ml-2 block text-[18px] text-[#9E9E9E]">
                                By providing us with your email address, you confirm that we can use it to share your booking information with you and to send marketing collateral.
                            </label>
                        </div>

                        {/* Payment Section */}
                        <div>
                            <div className="flex justify-between">
                                <div>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] mb-4 text-[#242424] font-bold">
                                        Payment details
                                    </h2>


                                </div>
                                <div className="flex ml-2 space-x-1">
                                    {["1", "2", "3", "4", "5"].map((card) => (
                                        <button
                                            key={card}
                                            type="button"
                                            className={`w-8 h-5 rounded border flex items-center justify-center ${paymentMethod === card ? "border-blue-500 bg-blue-50" : "border-gray-300"
                                                }`}
                                            onClick={() => setPaymentMethod(card)}
                                        >
                                            <Image
                                                src={`/payments/${card === 'google' ? 'google-pay' : card}.png`}
                                                alt={card}
                                                width={60}
                                                height={60}
                                                className="object-contain w-28 h-28"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">


                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div className="mb-4">
                                    <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">
                                        Choose payment method
                                    </label>
                                    <div className="flex">
                                        <select
                                            id="paymentMethod"
                                            className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E0E0E0] focus:border-[#E0E0E0] appearance-none"
                                            value={paymentMethod || ''}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        >
                                            <option value="">Select payment method</option>
                                            <option value="visa">Visa</option>
                                            <option value="mastercard">Mastercard</option>
                                            <option value="amex">American Express</option>
                                            <option value="apple">Apple Pay</option>
                                            <option value="google">Google Pay</option>
                                        </select>

                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                        Card number
                                    </label>
                                    <input
                                        id="cardNumber"
                                        type="text"
                                        placeholder="Enter your 16 digit card number"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E0E0E0] focus:border-[#E0E0E0]"
                                    />
                                </div>

                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                                        Expiry date
                                    </label>
                                    <input
                                        id="expiryDate"
                                        type="text"
                                        placeholder="MM/YY"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E0E0E0] focus:border-[#E0E0E0]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="securityCode" className="block text-sm font-medium text-gray-700 mb-1">
                                        Security code
                                    </label>
                                    <input
                                        id="securityCode"
                                        type="text"
                                        placeholder="CVV"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E0E0E0] focus:border-[#E0E0E0]"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                                <div>
                                    <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700 mb-1">
                                        Name on card
                                    </label>
                                    <input
                                        id="nameOnCard"
                                        type="text"
                                        placeholder="Enter your name as it appears on card"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E0E0E0] focus:border-[#E0E0E0]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="billingCountry" className="block text-sm font-medium text-gray-700 mb-1">
                                        Billing country
                                    </label>
                                    <input
                                        id="billingCountry"
                                        type="text"
                                        placeholder="E.g United States"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E0E0E0] focus:border-[#E0E0E0]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                                <div>
                                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                                        ZIP/Postal code
                                    </label>
                                    <input
                                        id="zipCode"
                                        type="text"
                                        placeholder="Enter your ZIP/Postal code"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E0E0E0] focus:border-[#E0E0E0]"
                                    />
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/chartconfirm"
                            className="w-full bg-[#FF9500] hover:bg-[#FF9500] cursor-pointer text-white font-medium py-3 px-6 rounded-full transition-colors"
                        >
                            Book now
                        </Link>
                    </div>
                </div>

                {/* Right Column - Booking Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                        <div className="relative h-48 w-full">
                            <Image
                                src="/charts/chart1.png"
                                alt="Person on watercraft"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="p-4 space-y-4">
                            <h3 className="text-lg font-medium">Deep Sea Fishing Adventure</h3>
                            <div className="flex items-center text-sm text-gray-600">
                                <MapPinIcon className="w-4 h-4 text-orange-500 mr-1" />
                                <span>Florida</span>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium mb-2">Plan details:</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Trip date:</span>
                                        <span>10/04/2025</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Group size:</span>
                                        <span>4 people</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Booking type:</span>
                                        <span>Private booking</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium mb-2">Payment terms:</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Price:</span>
                                        <span className="font-medium">$900</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Deposit to pay today:</span>
                                        <span className="font-medium">$80</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Pay on the day:</span>
                                        <span className="font-medium">$720</span>
                                    </div>
                                </div>
                            </div>

                            <a href="#" className="inline-block text-sm text-blue-600 hover:underline">
                                Payment terms and conditions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}