import React, { useState , useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { IoLink } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Portfolio() {
    const [color, setColor] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const updateItemsPerPage = () => {
            setItemsPerPage(window.innerWidth <= 768 ? 1 : 3);
        };

        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

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
            imgAlt: 'iTech - Roots',
            git: '#',
            project: 'https://itech-roots.vercel.app/',
            title: 'iTech - Roots'
        },
        {
            imgSrc: '/doctor.png',
            imgAlt: 'CarePoint',
            git: '#',
            project: 'https://carepointt.vercel.app/',
            title: 'CarePoint'
        },
        {
            imgSrc: '/store.png',
            imgAlt: 'Quantum - Store',
            git: '#',
            project: 'https://quantum-storee1.vercel.app/',
            title: 'Quantum - Store'
        },
        {
            imgSrc: '/text.jpg',
            imgAlt: 'Text - Convertor',
            git: '#',
            project: 'https://text-convertor1.vercel.app/',
            title: 'Text - Convertor'
        },
        {
            imgSrc: '/itask.png',
            imgAlt: 'iTask - ToDo List',
            git: '#',
            project: 'https://todo-list-psi-cyan.vercel.app/',
            title: 'iTask - ToDo List'
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
                    <div className='py-24 flex flex-col  items-center'>
                        {/* <h1 className={`${color ? 'text-white' : 'text-black'} text-4xl font-bold text-center`}>My Portfolio</h1> */}
                        <div className={`grid md:grid-cols-2 md:w-[900px]  md:gap-0 justify-center items-center tracking-wide py-4 md:py-20 ${color ? 'text-white' : 'text-black'}`}>
                            <div className=' text-sm md:text-base font-semibold px-6 md:py-24 md:px-24 order-2 md:order-1 flex flex-col md:text-start md:w-[600px]'>
                                <h2 className='text-2xl font-bold py-2 flex justify-center md:block'>Hello,<br className='md:hidden' />  I'm Shreyash Thaware</h2>
                                <p className='px-5 md:px-0'>Dedicated to creating impactful tech projects!</p>
                                <div className='flex md:justify-start gap-4 py-6 px-5 md:px-0'>
                                    <a href="" className={`w-8 h-8 rounded-full shadow-lg bg-gray-100 text-lg hover:bg-blue-600 hover:text-white hover:scale-125 duration-300 flex justify-center items-center ${color ? 'text-black border border-gray-400' : ''} `}><FaLinkedinIn /></a>
                                    <a href="" className={`w-8 h-8 rounded-full shadow-lg bg-gray-100 text-lg hover:bg-pink-600 hover:text-white hover:scale-125 duration-300 flex justify-center items-center ${color ? 'text-black border border-gray-400' : ''}`}><FaInstagram className='font-bold' /></a>
                                    <a href="" className={`w-8 h-8 rounded-full shadow-lg bg-gray-100 text-lg hover:bg-black hover:text-white hover:scale-125 duration-300 flex justify-center items-center ${color ? 'text-black border border-gray-400' : ''}`}><FiGithub /></a>
                                </div>
                                <a href="/Resume1.pdf" download="Shreyash_Thaware_Resume.pdf" className='px-5 md:px-0'>
                                    <button className={`bg-blue-600  font-bold text-xl w-[126px] h-[46px] rounded-2xl shadow-md shadow-gray-500 hover:scale-105 duration-200 ${color ? 'bg-[#67fd67] text-black' : 'text-white'} `}>
                                        Resume
                                    </button>
                                </a>
                            </div>
                            <div className='flex items-center justify-center order-1 md:order-2'>
                                <img src="/hero.png" alt="Hero" className='w-56 h-auto md:w-auto' />
                            </div>
                        </div>

                        {/* Projects Section with Pagination */}
                        <div className='text-center py-8'>
                            <div className='flex justify-center items-center gap-6 py-8  md:px-10'>
                                <div className='line-before h-[1.5px] w-full bg-slate-300 '></div>
                                <h2 className={`text-2xl font-bold uppercase ${color ? 'text-white' : ''}`}>Projects</h2>
                                <div className='line-after h-[1.5px] w-full bg-slate-300 '></div>
                            </div>
                            <div className='flex flex-wrap justify-center gap-4 py-4'>
                                {currentProjects.map((item, index) => (
                                    <a href={item.project} target='_blank' key={index} className={`flex flex-col  mx-2 md:mx-0 border-2 border-black rounded-md ${color ? 'text-white border-gray-400' : 'text-black'}`}>
                                        <img src={item.imgSrc} alt={item.imgAlt} className='w-96 md:h-[185px] object-cover rounded-t-md' />
                                        <div className='flex justify-between items-center px-4 py-2  font-semibold'>
                                            <span className='flex gap-2'>
                                                <a href={item.git}><FiGithub className={`rounded-full hover:scale-110 duration-100 w-8 h-8 py-2 shadow-lg bg-white ${color ? 'text-black' : ''}`} /></a>
                                                <a href={item.project}><IoLink className={`rounded-full hover:scale-110 duration-100 w-8 h-8 py-2 shadow-lg bg-white ${color ? 'text-black' : ''}`} /></a>
                                            </span>
                                            {item.title}
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <div className='flex justify-center mt-4 gap-2'>
                                {/* <button onClick={goToPreviousPage} disabled={currentPage === 1} className={`cursor-pointer  w-4 h-4 bg-gray-300 rounded-full ${color ? 'bg-gray-300' : 'bg-blue-500 shadow-lg border-2 border-black'} `}></button>
                                <span className='text-sm'>{currentPage} / {totalPages}</span>
                                <button onClick={goToNextPage} disabled={currentPage === totalPages} className={`cursor-pointer  w-4 h-4 bg-gray-300 rounded-full ${color ? 'bg-red-500' : 'bg-black shadow-lg border-2 border-black'} `}></button>
                                 */}
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <div
                                        key={index}
                                        className={`w-4 h-4 rounded-full cursor-pointer ${index + 1 === currentPage ? 'bg-blue-500' : 'bg-gray-300'}`}
                                        onClick={() => setCurrentPage(index + 1)}
                                    ></div>
                                ))}
                            </div>
                        </div>
                        {/* Mobile Toggle Switch at the Bottom */}
                        <div className='md:hidden fixed bottom-10 right-10 flex justify-center py-2'>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={color}
                                    onChange={() => setColor(!color)}
                                />
                                <div className={`w-8 h-8 bg-gray-200 rounded-full peer-focus:outline-none shadow-lg peer-checked:bg-black transition-all flex items-center justify-center px-1 border-2 ${color ? 'border-gray-700' : ''}`}>
                                    {color ? (
                                        <FaSun className="text-yellow-500 text-xl" />
                                    ) : (
                                        <FaMoon className="text-black text-xl" />
                                    )}
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Portfolio;
