"use client";
import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react';
import {motion} from "framer-motion"
import Hero from './components/Hero'
import Services from './components/Services'
import Properties from './components/Properties'
import PreContact from './components/PreContact'
import Contact from './components/Contact'
import Footer from './components/Footer'


const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  },[]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
    <Hero />
    <Services />
    <Properties />
    <PreContact />
    <Contact />
    <Footer />

    {isVisible && (
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
        className="fixed bottom-6 right-6 bg-yellow-500 text-gray-900 p-3 rounded-full shadow-lg hover:bg-yellow-400 transition-all cursor-pointer"
      >
        <ArrowUp size={24} />
      </motion.button>
    )}

    </>
  )
}

export default Page
