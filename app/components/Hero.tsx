"use client";
import React from 'react'
import Navbar from './Navbar'
import { ArrowRight } from 'lucide-react';
import {motion} from "framer-motion"

const Hero = () => {
    const handleScrollToProperties = () => {
        const section = document.getElementById("properties");
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            id='home'
            className="bg-[url(/images/header-bg.jpg)] relative h-screen bg-cover bg-center"
        >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col h-full">
        <Navbar />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center grow text-center text-white px-6"
            >
            <h1 className="text-5xl font-bold">Find Your Perfect Home</h1>
            <p className="mt-4 text-lg mb-6">
                Discover luxury properties in prime locations
            </p>
            <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleScrollToProperties}
                className="flex items-center justify-center gap-2 px-6 py-2 font-medium bg-yellow-500 text-gray-900 rounded-2xl cursor-pointer w-fit mx-auto transition-all shadow-[3px_3px_0px_black] hover:shadow-none"
            >
                View Properties <ArrowRight size={20} />
            </motion.button>
            </motion.div>
        </div>
    </div>
    )
}

export default Hero
