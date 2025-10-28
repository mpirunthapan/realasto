"use client";
import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
    const handleScrollToProperties = () => {
    const section = document.getElementById("properties");
        if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            className="bg-[url(/images/header-bg.jpg)] relative h-screen bg-cover bg-center"
        >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content including Navbar */}
        <div className="relative z-10 flex flex-col h-full">
            <Navbar />

            <div className="flex flex-col items-center justify-center grow text-center text-white px-6">
            <h1 className="text-5xl font-bold">Find Your Perfect Home</h1>
            <p className="mt-4 text-lg">
                Discover luxury properties in prime locations
            </p>
            <button
                onClick={handleScrollToProperties}
                className="mt-6 px-6 py-3 bg-yellow-500 rounded-full text-white hover:bg-yellow-600 transition cursor-pointer"
            >
                View Properties
            </button>
            </div>
        </div>
    </div>
    )
}

export default Hero
