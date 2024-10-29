import React from 'react'
import { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';

function Portfolio() {

    const [color, setColor] = useState(false)

    return (
        <>
            <div className={`${color ? 'bg-black' : 'bg-white'} py-4 `}>
                <div className={`mx-auto max-w-7xl flex justify-center ${color ? 'bg-[#1c1e1e]' : 'bg-white'} shadow-lg rounded-md`}>
                    {/* Navbar */}
                    <nav className='py-4 tracking-wider flex justify-between items-center w-full px-6 '>
                        <p className={`${color?'text-white':'text-black'} text-sm font-semibold`}>heyyy</p>
                        <ul className={`flex justify-center items-center gap-2 text-sm font-semibold bg-white shadow-lg py-2 px-2 rounded-md ${color ? 'bg-[#0e0f0f]' : 'bg-white'}`}>
                            <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600'} rounded-md hover:text-white cursor-pointer`}>Home</li>
                            <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600'} rounded-md hover:text-white cursor-pointer`}>Experience</li>
                            <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600'} rounded-md hover:text-white cursor-pointer`}>Projects</li>
                            <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600'} rounded-md hover:text-white cursor-pointer`}>About</li>
                        </ul>
                        {/* Toggle Switch */}
                        <div className="flex items-center">
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={color}
                                    onChange={() => setColor(!color)}
                                />
                                <div className={`w-11 h-6 bg-gray-200 rounded-full peer-focus:outline-none shadow-lg  peer-checked:bg-black transition-all flex items-center justify-between px-1 border-2 ${color?'border-gray-700':''} `}>
                                    {/* Sun and Moon Icons */}
                                    <FaSun className={`text-yellow-500 ${color ? 'opacity-100' : 'opacity-0'} transition-opacity text-xs`} />
                                    <FaMoon className={`text-black ${color ? 'opacity-0' : 'opacity-100'} transition-opacity text-xs`} />
                                    <div className={`absolute w-5 h-5 mx-[2px] bg-white rounded-full border border-gray-300 transition-transform peer-checked:translate-x-5 ${color ? 'right-0' : 'left-0'} `}></div>
                                </div>
                            </label>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Portfolio