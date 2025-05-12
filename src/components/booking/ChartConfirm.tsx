import Image from "next/image"
import Link from "next/link"


export default function ChartConfirm() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 mt-20 md:mt-20">
            {/* Confirmation Header */}
            <div className="space-y-2 bg-[#F5F5F5] p-6 rounded-lg">
                <div className="flex items-center gap-3">
                    {/* <div className="bg-green-100 p-2 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div> */}
                    <h1 className="text-2xl md:text-2xl font-semibold text-gray-800">
                        Your Fishing Trip is Confirmed!
                    </h1>
                </div>
                <p className="text-gray-700">
                    Thanks for booking with us! We&#39;ve sent the full details to your email at{" "}
                    <Link href="mailto:email@example.com" className="text-blue-600 underline hover:text-blue-800">
                        email@example.com
                    </Link>
                    . If you don&#39;t see it, check your spam folder or contact us.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-5">
                {/* Left Column - Confirmation Details */}
                <div className="space-y-8">




                    {/* What's Next Section */}
                    <div className="space-y-2 bg-white p-6 rounded-lg ">
                        <h2 className="text-[32px] font-semibold flex items-start gap-2 text-[#242424]">

                            Key booking details
                        </h2>
                        <div className="space-y-3 list-none  text-gray-700">
                            <p><span className="font-semibold">Trip Name: </span>Trolling and Dolphin Trip.</p>
                            <p><span className="font-semibold">Date & Time:</span> 12th September 2025, 4 PM.</p>
                            <p><span className="font-semibold">Meeting Point:</span> Marina Bay, Florida. Coordinates from google maps API goes here</p>
                            <p><span className="font-semibold">Participants:</span> 4 people.</p>
                            <p><span className="font-semibold">Booking Reference Number:</span> #12345.</p>
                        </div>
                    </div>
                    <div className="space-y-4 bg-white p-6 rounded-lg ">
                        <h2 className="text-[32px] font-semibold flex items-center gap-2 text-[#242424]">

                            What next?
                        </h2>
                        <div className="space-y-3 list-none  text-gray-700">
                            <li>Arrive 15 minutes early at Marina Bay, Florida.
                                Bring sunscreen, snacks, and any fishing gear you prefer.</li>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-1 bg-white p-6 rounded-lg">
                        <h2 className="text-[32px] font-semibold flex items-center gap-2">
                            Any questions?
                        </h2>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3">
                            <div className="flex items-center gap-2">
                                <p>Contact us at </p>
                                <Link
                                    href="mailto:support@example.com"
                                    className="text-blue-600 underline hover:text-blue-800"
                                >
                                    support@example.com
                                </Link>
                            </div>

                            <div className="flex items-center gap-2">
                                or
                                <Link
                                    href="tel:+18001234567"
                                    className="text-blue-600 underline hover:text-blue-800"
                                >
                                    +1 (800) 123-4567
                                </Link>
                            </div>
                        </div>
                    </div>


                    {/* CTA Buttons */}
                    <div className="ps-5">
                        <Link href='/' className="bg-[#FF9500] hover:bg-[#FF9500] text-white font-medium rounded-md px-6 py-3 flex-1 transition-colors">
                            View Booking Details
                        </Link>

                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative h-[400px] md:h-[600px] rounded-xl overflow-hidden shadow-lg mt-6">
                    <Image
                        src="/charts/chart1.png" // Replace with your actual image path
                        alt="Fishing trip at Marina Bay"
                        fill
                        className="object-cover"
                        priority
                    />

                </div>
            </div>
        </div>
    )
}