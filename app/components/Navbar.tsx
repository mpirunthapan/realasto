"use client";
import React from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const navLinks = [
        { name: "Home", path: "#home" },
        { name: "Properties", path: "#properties" },
        { name: "Contact", path: "#contact" },
    ];

    return (
        <nav className='w-full bg-transparent'>
            <div className='max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <span className='self-center text-2xl font-bold text-white'>
                    Realasto
                </span>
            <button
                    onClick={() => setIsOpen(!isOpen)}
                    type='button'
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 cursor-pointer"
                    aria-controls='navbar-default'
                    aria-expanded={isOpen}
                >
                    <span className='sr-only'>Open main menu</span>
                    <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    >
                    {isOpen ? (
                        <path 
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M6 18L18 6M6 6l12 12'
                        />
                    ) : (
                        <path 
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    )}
                </svg>
            </button>

            <div 
            className={`${
                isOpen ? "block" : "hidden"
            } w-full lg:w-auto lg:block`}
            >
            <ul className='font-medium flex flex-col p-4 mt-4 border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent'>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.path}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 px-3 text-white rounded-sm hover:bg-white/10 lg:hover:bg-transparent lg:hover:text-yellow-400 transition-colors duration-200"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
            </div>


        </nav>


    )
}

export default Navbar
