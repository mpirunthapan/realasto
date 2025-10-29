"use client";
import React from "react";
import { servicesData } from "../data/data";
import { Home, Zap, ShieldCheck } from "lucide-react";

const iconMap: Record<string, JSX.Element> = {
    home: <Home className="w-10 h-10 text-yellow-400" />,
    zap: <Zap className="w-10 h-10 text-yellow-400" />,
    "shield-check": <ShieldCheck className="w-10 h-10 text-yellow-400" />,
};

const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Why Choose Realasto
            </h2>
            <p className="text-gray-600 mb-12">
            Your trusted partner in finding the perfect property
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => (
                <div
                key={service.id}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                <div className="flex justify-center mb-4">
                    <div className="bg-yellow-100 rounded-full p-4">
                    {iconMap[service.icon]}
                    </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Services;
