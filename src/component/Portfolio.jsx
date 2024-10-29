import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

function Portfolio() {
    const [color, setColor] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className={`${color ? 'bg-black' : 'bg-white'} py-4 px-4`}>
                {/* Fixed Navbar */}
                <nav className={`fixed top-0 left-0 w-full py-4 shadow-lg z-50 ${color ? 'bg-black' : 'bg-white'} px-6`}>
                    <div className={`mx-auto max-w-7xl flex justify-between items-center px-6 h-14 md:h-24 rounded-md ${color?'bg-[#1c1e1e]':'bg-white'}`}>
                        <a href='' className={`${color ? 'text-white' : 'text-black'} text-sm font-semibold`}>heyyy</a>
                        <ul className={`hidden md:flex justify-center items-center gap-2 text-sm font-semibold shadow-lg py-2 px-2 rounded-md ${color ? 'bg-[#0e0f0f]' : 'bg-white'}`}>
                            <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-white text-white' : 'hover:bg-blue-600'} rounded-md hover:text-white cursor-pointer`}>Home</li>
                            <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600'} rounded-md hover:text-white cursor-pointer`}>Experience</li>
                            <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600'} rounded-md hover:text-white cursor-pointer`}>Projects</li>
                            <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600'} rounded-md hover:text-white cursor-pointer`}>About</li>
                        </ul>

                        {/* Mobile menu */}
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
                            <ul className={`absolute top-20 right-4 shadow-lg rounded-md text-sm font-semibold py-4 px-6 flex flex-col gap-2 ${color ? 'bg-[#1c1e1e] text-white' : 'text-black'} z-50`}>
                                <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600'} rounded-md hover:text-white cursor-pointer`}>Home</li>
                                <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600'} rounded-md hover:text-white cursor-pointer`}>Experience</li>
                                <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600'} rounded-md hover:text-white cursor-pointer`}>Projects</li>
                                <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600'} rounded-md hover:text-white cursor-pointer`}>About</li>
                            </ul>
                        )}
                        {/* Toggle Switch */}
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

                <hr className='border-[1px] mx-6 border-gray-600 rounded-md mt-16 md:mt-24' />

                {/* Main Content */}
                <div className={`grid md:grid-cols-2 gap-8 md:gap-0 justify-center items-center tracking-wide py-16 md:p-0 ${color ? 'text-white' : 'text-black'}`}>
                    <div className='text-sm md:text-base font-semibold px-6 md:py-24 md:px-24 order-2 md:order-1 '>
                        <h1 className='text-xl font-bold py-1'>Myself,</h1>
                        <h1 className='text-3xl md:text-4xl font-bold py-1'>Shreyash Thaware.</h1>
                        <p className='py-2 md:py-1'>I am a motivated and resourceful individual dedicated to harnessing my skills in technology to develop projects that leave a lasting impact. I'm eager to collaborate and explore new horizons in the tech space!</p>
                    </div>
                    <div className='flex items-center justify-center order-1 md:order-2'>
                        <img src="/hero.png" alt="" className='w-56 h-auto md:w-auto ' />
                    </div>
                </div>

                {/* Tech Stack */}
                <div className={`py-16 ${color ? 'text-white' : 'text-black'}`}>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='line-before h-[1.5px] w-full bg-slate-300 mx-4'></div>
                        <h1 className='text-nowrap text-2xl font-bold uppercase'>Tech stack</h1>
                        <div className='line-after h-[1.5px] w-full bg-slate-300 mx-4'></div>
                      
                    </div>
                </div>

                {/* Mobile Toggle Switch at the Bottom */}
                <div className='md:hidden fixed bottom-20 right-10 flex justify-center py-2'>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={color}
                            onChange={() => setColor(!color)}
                        />
                        <div className={`w-8 h-8 bg-gray-200 rounded-full peer-focus:outline-none shadow-lg peer-checked:bg-black transition-all flex items-center justify-center px-1 border-2 ${color ? 'border-gray-700' : ''}`}>
                            {/* Sun and Moon Icons */}
                            <div className='md:hidden flex items-center'>
                                {color ? (
                                    <FaSun className={`cursor-pointer text-xl ${color ? 'text-yellow-500' : 'text-white'}`} />
                                ) : (
                                    <FaMoon className={`cursor-pointer text-xl ${color ? 'text-white' : 'text-black'}`} />
                                )}
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
