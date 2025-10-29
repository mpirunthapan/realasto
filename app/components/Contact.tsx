"use client";
import React from 'react'
import {motion} from "framer-motion"
import {Mail, MapPin, Phone} from "lucide-react"

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-20 bg-gray-50"
            >
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                
                <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Get In Touch
                </h2>
                <p className="text-gray-600 mb-8">
                    Have a question or want to schedule a viewing? Contact us!
                </p>

                <div className="space-y-5 text-gray-700">
                    <div className="flex items-center gap-3">
                    <MapPin className="text-yellow-500" />
                    <span>Manikka Idaikkadr Road, Idaikkadu, Atchuvely</span>
                    </div>

                    <div className="flex items-center gap-3">
                    <Mail className="text-yellow-500" />
                    <span>contact@realasto.com</span>
                    </div>

                    <div className="flex items-center gap-3">
                    <Phone className="text-yellow-500" />
                    <span>(076) 680-8474</span>
                    </div>
                </div>
                </motion.div>

                <motion.form
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white shadow-xl rounded-2xl p-8 space-y-5"
                >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us 💬</h2>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    👋 Hi! My name is...
                    </label>
                    <input
                    type="text"
                    id="name"
                    className="w-full mt-1 p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    placeholder="Your name...."
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    📧 You can reach me at...
                    </label>
                    <input
                    type="email"
                    id="email"
                    className="w-full mt-1 p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    placeholder="you@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    💭 Here’s what I’d like to say...
                    </label>
                    <textarea
                    id="message"
                    rows={4}
                    className="w-full mt-1 p-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    placeholder="Type your message here..."
                    ></textarea>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg shadow-md hover:bg-yellow-400 transition-all cursor-pointer"
                >
                    🚀 Send Message
                </motion.button>
                </motion.form>
            </div>
            </section>
    )
}

export default Contact
