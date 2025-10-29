"use client";
import React from "react";
import { servicesData } from "../data/data";
import { Home, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, JSX.Element> = {
    home: <Home className="w-10 h-10 text-yellow-400" />,
    zap: <Zap className="w-10 h-10 text-yellow-400" />,
    "shield-check": <ShieldCheck className="w-10 h-10 text-yellow-400" />,
};

const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center px-6"
        >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Why Choose Realasto
            </h2>
            <p className="text-gray-600 mb-12">
            Your trusted partner in finding the perfect property
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
                <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                <div className="flex justify-center mb-4">
                    <motion.div
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-yellow-100 rounded-full p-4"
                    >
                    {iconMap[service.icon]}
                    </motion.div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                </motion.div>
            ))}
            </div>
        </motion.div>
        </section>
    );
};

export default Services;
