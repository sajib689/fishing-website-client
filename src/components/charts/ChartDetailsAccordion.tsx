import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const ChartDetailsAccordion = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    interface AccordionItem {
        title: string;
        content: string;
    }

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionItems: AccordionItem[] = [
        {
            title: "What's included in the price?",
            content: "The price includes boat rental, fuel, fishing gear, and guide services. Food and drinks are not included unless specified."
        },
        {
            title: "Targeted Species",
            content: "We typically target species such as tarpon, snook, redfish, and trout depending on the season and conditions."
        },
        {
            title: "Boat Info",
            content: "Our boat is a 24-foot center console with a 250hp engine, equipped with GPS, fish finder, and all necessary safety equipment."
        },
        {
            title: "Trips and Prices",
            content: "Half-day trips start at $400 (4 hours), full-day trips at $600 (8 hours). Private charters available for groups up to 6 people."
        }
    ];

    return (
        <div className="max-w-2xl mx-auto">
            <h2 className="text-[14px] font-semibold mb-4 text-[#000000]">See the details</h2>

            <div className="space-y-2">
                {accordionItems.map((item, index) => (
                    <div key={index} className="border border-[#DADADA] rounded-lg overflow-hidden">
                        <button
                            className="flex justify-between items-center w-full p-4 text-left hover:bg-gray-50 transition-colors "
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="font-medium text-[#6C757D]">{item.title}</span>
                            <ChevronDown
                                className={`h-5 w-5 transition-transform  ${activeIndex === index ? 'transform rotate-180 ' : ''}`}
                            />
                        </button>

                        {activeIndex === index && (
                            <div className="p-4 bg-gray-50 border border-[#DADADA]">
                                <p className="text-gray-600">{item.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChartDetailsAccordion;