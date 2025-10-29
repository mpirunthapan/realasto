"use client";
import React, {useState} from 'react'
import { propertiesData } from "../data/data";
import {MapPin, Bed, Bath, Maximize} from 'lucide-react';
import Image from 'next/image';
import { motion } from "framer-motion";

const Properties = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const filteredProperties = propertiesData.filter((property) => {
        const searchTerm = search.toLowerCase();
        const isBedSearch = searchTerm.includes("bed");
        const isBathSearch = searchTerm.includes("bath");

        if (isBedSearch) {
            const number = searchTerm.match(/\d+/)?.[0];
            return number ? property.beds === number : true;
        }

        if (isBathSearch) {
            const number = searchTerm.match(/\d+/)?.[0];
            return number ? property.baths === number : true;
        }

        return (
            property.name.toLowerCase().includes(searchTerm) ||
            property.price.toLowerCase().includes(searchTerm) ||
            property.location.toLowerCase().includes(searchTerm) ||
            property.sqft.toLowerCase().includes(searchTerm)
        );
    });

    const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProperties = filteredProperties.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const changePage = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
        pages.push(1);
        if (currentPage > 3) pages.push("...");
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);
        for (let i = start; i <= end; i++) pages.push(i);
        if (currentPage < totalPages - 2) pages.push("...");
        pages.push(totalPages);
        }
        return pages;
    };

    return (
        <section id="properties" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                className="text-3xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                >
                Featured Properties
                </motion.h2>

                <motion.p
                className="text-gray-600 mb-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                >
                Handpicked exclusive listings just for you
                </motion.p>

                <motion.div
                className="mb-10 max-w-lg mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                >
                <input
                    type="text"
                    placeholder="Search by name, price, location, sqft, beds, baths..."
                    value={search}
                    onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                    }}
                    className="w-full px-4 py-3 border rounded-full shadow-sm focus:ring-4 focus:ring-blue-300 focus:border-blue-400 transition-all duration-300 text-gray-900"
                />
                </motion.div>

                <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                {currentProperties.map((property, index) => (
                    <motion.div
                    key={property.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.03, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                    <div className="relative">
                        <Image
                        src={property.image}
                        alt={property.name}
                        width={600}
                        height={400}
                        className="w-full h-56 object-cover"
                        />
                        <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 font-semibold text-xs px-3 py-1 rounded-full">
                        {property.type}
                        </span>
                    </div>

                    <div className="p-5 text-left">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {property.price}
                        </h3>
                        <p className="text-gray-700 font-medium">{property.name}</p>

                        <div className="flex items-center text-gray-600 mt-2">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{property.location}</span>
                        </div>

                        <div className="flex justify-between items-center text-gray-600 mt-4 border-t pt-3">
                        <div className="flex items-center space-x-1">
                            <Bed size={16} />
                            <span className="text-sm">{property.beds} Beds</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Bath size={16} />
                            <span className="text-sm">{property.baths} Baths</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Maximize size={16} />
                            <span className="text-sm">{property.sqft}</span>
                        </div>
                        </div>
                    </div>
                    </motion.div>
                ))}
                </motion.div>

                <motion.div
                className="flex justify-center mt-10 space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                >
                {getPageNumbers().map((page, index) =>
                    typeof page === "number" ? (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => changePage(page)}
                        className={`px-4 py-2 rounded-md cursor-pointer font-medium ${
                        currentPage === page
                            ? "bg-blue-600 text-white"
                            : "bg-white border text-gray-700 hover:bg-gray-100"
                        } transition-all duration-300`}
                    >
                        {page}
                    </motion.button>
                    ) : (
                    <span key={index} className="px-3 py-2 text-gray-500">
                        {page}
                    </span>
                    )
                )}
                </motion.div>
            </div>
        </section>
    )
}

export default Properties
