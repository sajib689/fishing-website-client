'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import ChartDetailsAccordion from './ChartDetailsAccordion';

const ChartDetailsCarousel = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 mt-10 md:mt-20">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {/* Carousel Section with removed hover colors */}
                <div className="w-full overflow-hidden">
                    <Carousel
                        showArrows
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        interval={3000}
                        className="rounded-lg"
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <button
                                    type="button"
                                    onClick={onClickHandler}
                                    title={label}
                                    className="absolute left-2 top-1/2 z-10 -translate-y-1/2  p-2 rounded-full shadow-md transition-all"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button
                                    type="button"
                                    onClick={onClickHandler}
                                    title={label}
                                    className="absolute right-2 top-1/2 z-10 -translate-y-1/2  p-2 rounded-full shadow-md transition-all"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white cursor-pointer"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            )
                        }
                    >
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="relative mx-auto"
                                style={{
                                    width: '100%',
                                    maxWidth: '760px',
                                    height: 'calc(100vw * 0.8)', // 80% of viewport width on mobile
                                    maxHeight: '760px' // Max height on larger screens
                                }}
                            >
                                <Image
                                    src={`/charts/chart${item}.png`}
                                    alt={`Chart ${item}`}
                                    width={720}
                                    height={720}
                                    className="object-cover w-full h-full rounded-lg"
                                    priority={item === 1}
                                    sizes="(max-width: 768px) 100vw, 760px"
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>

                {/* Content Section */}
                <div className="w-full">
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>Flamingo Everglades trip</h1>
                    <p className='text-base text-gray-600 mt-3'>
                        Brief description goes here over two lines. Brief description goes here over two lines.
                        Brief description goes here over two lines. Brief description goes here. Brief description
                        goes here over two lines. Brief description goes here over two lines.
                    </p>

                    <div className='border-b border-gray-200 my-5'></div>

                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
                        <div className='flex items-center gap-4'>
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                                <Image
                                    src="/charts/chart-man.jpg"
                                    alt="Captain"
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <h1 className='text-gray-900 font-semibold text-base sm:text-lg'>
                                    Captain <span className='text-gray-600'>Tom Jones</span>
                                </h1>
                            </div>
                        </div>
                        <div className="flex items-center text-sm sm:text-base">
                            <MapPin className="h-5 w-5 text-orange-500 mr-1" />
                            <span className="text-gray-600">Florida</span>
                        </div>
                    </div>

                    <div className='border-b border-gray-200 my-5'></div>

                    <div>
                        <h1 className='text-sm font-bold text-gray-900'>Key features:</h1>
                        <div className='flex flex-wrap gap-3 mt-3'>
                            <div className='flex items-center border border-blue-100 bg-blue-50 rounded-full px-3 py-1 gap-1 text-sm'>
                                <Image src='/charts/1.png' width={16} height={16} alt='price icon' />
                                <span>£800 for full private boat booking</span>
                            </div>
                            <div className='flex items-center border border-blue-100 bg-blue-50 rounded-full px-3 py-1 gap-1 text-sm'>
                                <Image src='/charts/2.png' width={16} height={16} alt='time icon' />
                                <span>8 Hours</span>
                            </div>
                            <div className='flex items-center border border-blue-100 bg-blue-50 rounded-full px-3 py-1 gap-1 text-sm'>
                                <Image src='/charts/3.png' width={16} height={16} alt='people icon' />
                                <span>Up to 8 people</span>
                            </div>
                        </div>
                    </div>

                    <div className='border-b border-gray-200 my-5'></div>

                    <ChartDetailsAccordion />
                </div>
            </div>
        </div>
    );
};

export default ChartDetailsCarousel;