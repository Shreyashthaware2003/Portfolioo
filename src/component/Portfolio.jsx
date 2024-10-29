import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { IoLink } from "react-icons/io5";

function Portfolio() {
    const [color, setColor] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    

    const project = [
        {
            imgSrc: '/spotify.jpg',
            imgAlt: 'Spotify - Clone',
            git: '#',
            project: 'https://spotify-clonee1.vercel.app/',
            title: 'Spotify - Clone'
        },
        {
            imgSrc: '/itech.jpg',
            imgAlt: 'Spotify - Clone',
            git: '#',
            project: 'https://spotify-clonee1.vercel.app/',
            title: 'Spotify - Clone'
        },
        {
            imgSrc: '/doctor.png',
            imgAlt: 'Spotify - Clone',
            git: '#',
            project: 'https://spotify-clonee1.vercel.app/',
            title: 'Spotify - Clone'
        },
        {
            imgSrc: '/store.png',
            imgAlt: 'Spotify - Clone',
            git: '#',
            project: 'https://spotify-clonee1.vercel.app/',
            title: 'Spotify - Clone'
        },
        {
            imgSrc: '/text.jpg',
            imgAlt: 'Spotify - Clone',
            git: '#',
            project: 'https://spotify-clonee1.vercel.app/',
            title: 'Spotify - Clone'
        },
        {
            imgSrc: '/itask.png',
            imgAlt: 'Spotify - Clone',
            git: '#',
            project: 'https://spotify-clonee1.vercel.app/',
            title: 'Spotify - Clone'
        },

    ];

    const totalPages = Math.ceil(project.length / itemsPerPage);
    const currentProjects = project.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const goToNextPage = () => {
        setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    return (
        <>
            <div className={`${color ? 'bg-black' : 'bg-white'} py-4 px-4`}>
                <div className='shadow-lg max-w-7xl mx-auto'>

                    {/* Fixed Navbar */}
                    <nav className={`fixed top-0 left-0 w-full py-4 z-50 ${color ? 'bg-black' : 'bg-white'} px-6`}>
                        <div className={`mx-auto max-w-7xl flex justify-between items-center px-6 h-14 md:h-24 rounded-md ${color ? 'bg-[#1c1e1e]' : 'bg-white shadow-lg'}`}>
                            <a href='#' className={`${color ? 'text-white' : 'text-black'} text-sm font-semibold`}>heyyy</a>
                            <ul className={`hidden md:flex justify-center items-center gap-2 text-sm font-semibold shadow-lg py-2 px-2 rounded-md ${color ? 'bg-[#0e0f0f]' : 'bg-white'}`}>
                                <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600 hover:text-white'} rounded-md cursor-pointer`}>Home</li>
                                <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600 hover:text-white'} rounded-md cursor-pointer`}>Experience</li>
                                <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600 hover:text-white'} rounded-md cursor-pointer`}>Projects</li>
                                <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600 hover:text-white'} rounded-md cursor-pointer`}>About</li>
                            </ul>

                            {/* Mobile menu toggle */}
                            <div className='md:hidden flex items-center'>
                                {menuOpen ? (
                                    <IoClose
                                        onClick={() => setMenuOpen(false)}
                                        className={`cursor-pointer text-xl ${color ? 'text-white' : 'text-black'}`}
                                    />
                                ) : (
                                    <BiMenuAltRight
                                        onClick={() => setMenuOpen(true)}
                                        className={`cursor-pointer text-xl ${color ? 'text-white' : 'text-black'}`}
                                    />
                                )}
                            </div>
                            {menuOpen && (
                                <ul className={`absolute top-20 right-4 shadow-lg rounded-md text-sm font-semibold py-4 px-6 flex flex-col gap-2 ${color ? 'bg-[#1c1e1e] text-white' : 'text-black bg-white'} z-50`}>
                                    <li className='cursor-pointer'>Home</li>
                                    <li className='cursor-pointer'>Experience</li>
                                    <li className='cursor-pointer'>Projects</li>
                                    <li className='cursor-pointer'>About</li>
                                </ul>
                            )}

                            {/* Dark Mode Toggle */}
                            <div className="hidden md:flex items-center">
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={color}
                                        onChange={() => setColor(!color)}
                                    />
                                    <div className={`w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none shadow-lg peer-checked:bg-black transition-all flex items-center justify-between px-1 border-2 ${color ? 'border-gray-700' : ''}`}>
                                        <FaSun className={`text-yellow-500 ${color ? 'opacity-100' : 'opacity-0'} transition-opacity text-xs`} />
                                        <FaMoon className={`text-black ${color ? 'opacity-0' : 'opacity-100'} transition-opacity text-xs`} />
                                        <div className={`absolute w-5 h-5 mx-[2px] bg-white rounded-full border border-gray-300 transition-transform peer-checked:translate-x-5 ${color ? 'right-0' : 'left-0'} `}></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </nav>

                    {/* Main Content */}
                    <div className='py-16'>
                        <h1 className={`${color ? 'text-white' : 'text-black'} text-4xl font-bold text-center`}>My Portfolio</h1>
                        <div className={`grid md:grid-cols-2 gap-8 justify-center items-center tracking-wide py-16 ${color ? 'text-white' : 'text-black'}`}>
                            <div className='text-sm md:text-base font-semibold px-6 md:py-24 md:px-24'>
                                <h2 className='text-2xl font-bold py-2'>Hello, I'm Shreyash Thaware</h2>
                                <p className='py-2'>Dedicated to creating impactful tech projects!</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <img src="/hero.png" alt="Hero" className='w-56 h-auto md:w-auto' />
                            </div>
                        </div>

                        {/* Projects Section with Pagination */}
                        <div className='text-center py-8'>
                            <h2 className='text-2xl font-bold uppercase'>Projects</h2>
                            <div className='flex flex-wrap justify-center gap-8 py-4'>
                                {currentProjects.map((item, index) => (
                                    <a href={item.project} target='_blank' key={index} className={`flex flex-col border-2 border-black rounded-md ${color ? 'text-white' : 'text-black'}`}>
                                        <img src={item.imgSrc} alt={item.imgAlt} className='w-80 object-cover' />
                                        <div className='flex justify-between items-center px-4 py-2 capitalize font-semibold'>
                                            <span className='flex gap-2'>
                                                <a href={item.git}><FiGithub className='rounded-full w-8 h-8 py-2 shadow-lg bg-white' /></a>
                                                <a href={item.project}><IoLink className='rounded-full w-8 h-8 py-2 shadow-lg bg-white' /></a>
                                            </span>
                                            {item.title}
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <div className='flex justify-center mt-4 gap-2'>
                                <button onClick={goToPreviousPage} disabled={currentPage === 1} className={`cursor-pointer  w-4 h-4 bg-gray-300 rounded-full ${color ? 'bg-gray-300' : 'bg-blue-500 shadow-lg border-2 border-black'} `}></button>
                                {/* <span className='text-sm'>{currentPage} / {totalPages}</span> */}
                                <button onClick={goToNextPage} disabled={currentPage === totalPages} className={`cursor-pointer  w-4 h-4 bg-gray-300 rounded-full ${color ? 'bg-red-500' : 'bg-black shadow-lg border-2 border-black'} `}></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
