"use client";
import React from 'react'
import { ArrowRight } from 'lucide-react'
import {motion} from "framer-motion"

const PreContact = () => {
    return (
        <section className='py-20 bg-indigo-950'>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto text-center px-6"
            >
                <h2 className="text-3xl font-bold text-white mb-2">
                    Ready to Find Your Dream Home?
                </h2>
                <p className="text-white mb-12">
                    Let our expect team guide you through every step of your property journey
                </p>
                <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 px-6 py-2 font-medium bg-yellow-500 text-gray-900 rounded-2xl cursor-pointer w-fit mx-auto transition-all shadow-[3px_3px_0px_black] hover:shadow-none"
                >
                    Get Started Today <ArrowRight size={20} />
                </motion.button>
            </motion.div>
        </section>
    )
}

export default PreContact
