import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { IoLink } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { IoMailUnread } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { GiClick } from "react-icons/gi";

function Portfolio() {
    const [color, setColor] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);



    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'projects', 'about', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop - 160) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    // Modal functionality
    const handleImageClick = () => {
        setSelectedImage('/Resume.png'); // Set the image source for the modal
        setIsOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsOpen(false); // Close the modal
        setSelectedImage(null); // Clear the selected image
    };

    // Form
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "42e4dcd2-d506-402f-aaf5-c70cda16083b");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const data = await res.json();

            if (data.success) {
                toast.success("Form submitted! Thanks for reaching out.");
                event.target.reset(); // Clears the form inputs
            } else {
                toast.error("Failed to submit form. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            console.error("Submission error:", error);
        }
    };


    return (
        <>
            <div className={`${color ? 'bg-black' : 'bg-white'} py-4 px-4`}>
                <div className='shadow-lg max-w-7xl mx-auto'>

                    {/* Fixed Navbar */}
                    <nav className={`fixed top-0 left-0 w-full py-4 z-50 ${color ? 'bg-black' : 'bg-white'} px-6`}>
                        <div className={`mx-auto max-w-7xl flex justify-between items-center px-6 h-14 md:h-24 rounded-md ${color ? 'bg-[#111212]' : 'bg-white shadow-lg'}`}>
                            <a href='#' className={`${color ? 'text-white' : 'text-black'} text-base md:text-2xl font-bold tracking-wider`}>Web <br /> Developer</a>
                            <ul className={`hidden md:flex justify-center items-center gap-2 text-sm font-semibold shadow-lg py-2 px-2 rounded-md ${color ? 'bg-[#0e0f0f]' : 'bg-white'}`}>
                                <a href="#home">
                                    <li className={`px-4 py-2 ${activeSection === 'home' ? (color ? 'bg-[#67fd67] text-black' : 'bg-blue-500 text-white') : (color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600 hover:text-white')} rounded-md cursor-pointer`}>
                                        Home
                                    </li>
                                </a>

                                <a href="#projects">
                                    <li className={`px-4 py-2 ${activeSection === 'projects' ? (color ? 'bg-[#67fd67] text-black' : 'bg-blue-500 text-white') : (color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600 hover:text-white')} rounded-md cursor-pointer`}>
                                        Projects
                                    </li>
                                </a>

                                <a href="#about">
                                    <li className={`px-4 py-2 ${activeSection === 'about' ? (color ? 'bg-[#67fd67] text-black' : 'bg-blue-500 text-white') : (color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600 hover:text-white')} rounded-md cursor-pointer`}>
                                        About
                                    </li>
                                </a>


                                <a href="#contact">
                                    <li className={`px-4 py-2 ${activeSection === 'contact' ? (color ? 'bg-[#67fd67] text-black' : 'bg-blue-500 text-white') : (color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600 hover:text-white')} rounded-md cursor-pointer`}>
                                        Contact
                                    </li>
                                </a>
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
                                    <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600 hover:text-white'} rounded-md cursor-pointer`}>
                                        <a href="#home">Home</a>
                                    </li>
                                    <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600 hover:text-white'} rounded-md cursor-pointer`}>
                                        <a href="#projects">Projects</a>
                                    </li>
                                    <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600 hover:text-white'} rounded-md cursor-pointer`}>
                                        <a href="#about">About</a>
                                    </li>
                                    <li className={`px-4 py-2 ${color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-600 hover:text-white'} rounded-md cursor-pointer`}>
                                        <a href="#contact">Contact</a>
                                    </li>
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
                    <div className={`pb-2 pt-24 flex flex-col  items-center ${color ? 'bg-[#111212]' : 'bg-white shadow-lg'}`}>
                        {/* <h1 className={`${color ? 'text-white' : 'text-black'} text-4xl font-bold text-center`}>My Portfolio</h1> */}
                        <div id='home' className={`grid md:grid-cols-2 md:w-[900px]  md:gap-0 justify-center items-center tracking-wide py-4 md:py-20 ${color ? 'text-white' : 'text-black'}`}>
                            <div className=' text-sm md:text-base font-semibold px-6 md:py-24 md:px-24 order-2 md:order-1 flex flex-col md:text-start md:w-[600px]'>
                                <h2 className='text-2xl font-bold py-2 flex justify-center md:block'>Hello,<br className='md:hidden' />  I'm Shreyash Thaware</h2>
                                <p className='px-5 md:px-0'>Dedicated to creating impactful tech projects!</p>
                                <div className='flex md:justify-start gap-4 py-6 px-5 md:px-0'>
                                    <a href="" className={`w-8 h-8 rounded-full shadow-lg bg-gray-100 text-lg hover:bg-blue-600 hover:text-white hover:scale-125 duration-300 flex justify-center items-center ${color ? 'text-black border border-gray-400' : ''} `}><FaLinkedinIn /></a>
                                    <a href="" className={`w-8 h-8 rounded-full shadow-lg bg-gray-100 text-lg hover:bg-pink-600 hover:text-white hover:scale-125 duration-300 flex justify-center items-center ${color ? 'text-black border border-gray-400' : ''}`}><FaInstagram className='font-bold' /></a>
                                    <a href="" className={`w-8 h-8 rounded-full shadow-lg bg-gray-100 text-lg hover:bg-black hover:text-white hover:scale-125 duration-300 flex justify-center items-center ${color ? 'text-black border border-gray-400' : ''}`}><FiGithub /></a>
                                    <a href="" className={`w-8 h-8 rounded-full shadow-lg bg-gray-100 text-lg hover:bg-yellow-500 hover:text-white hover:scale-125 duration-300 flex justify-center items-center ${color ? 'text-black border border-gray-400' : ''}`}><MdMailOutline /></a>
                                </div>
                                <a href="/Resume1.pdf" download="Shreyash_Thaware_Resume.pdf" className='px-5 md:px-0'>
                                    <button className={` font-bold text-xl w-[126px] h-[46px] rounded-2xl shadow-md shadow-gray-500 hover:scale-105 duration-200 ${color ? 'bg-[#67fd67] text-black' : 'bg-blue-600 text-white'} `}>
                                        Resume
                                    </button>
                                </a>
                            </div>
                            <div className='flex items-center justify-center order-1 md:order-2'>
                                <img src="/hero.png" alt="Hero" className='w-56 h-auto md:w-auto' />
                            </div>
                        </div>

                        {/* Projects Section with Pagination */}
                        <div id='projects' className='md:pt-16'>
                            <div className='flex justify-center items-center gap-6 py-20  md:px-10'>
                                <div className='line-before h-[1.6px] w-full bg-slate-300 '></div>
                                <h2 className={`text-2xl font-bold uppercase ${color ? 'text-white' : ''}`}>Projects</h2>
                                <div className='line-after h-[1.6px] w-full bg-slate-300 '></div>
                            </div>
                            <div className='flex flex-wrap justify-center gap-4 py-8'>
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
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <div
                                        key={index}
                                        className={`w-4 h-4 rounded-full cursor-pointer ${index + 1 === currentPage
                                            ? color ? 'bg-green-500 border-2 shadow-white' : 'bg-blue-500 border-2 border-black ' : 'bg-gray-300'
                                            }`}
                                        onClick={() => setCurrentPage(index + 1)}
                                    ></div>
                                ))}
                            </div>
                        </div>


                        {/* About Section */}
                        <div id='about' className='pt-16 w-full'>
                            <div className='flex justify-center items-center gap-4 md:gap-6 py-8 md:px-20'>
                                <div className='line-before h-[1.6px] w-full bg-slate-300 '></div>
                                <h2 className={`text-xl md:text-2xl font-bold uppercase text-nowrap ${color ? 'text-white' : ''}`}>About Me</h2>
                                <div className='line-after h-[1.6px] w-full bg-slate-300 '></div>
                            </div>
                            <div className='flex flex-col md:flex-row justify-center gap-20 px-4 md:px-32 py-6 md:py-16'>
                                <div className='md:w-[500px]'>
                                    <p className={`font-semibold ${color ? 'text-white' : ''}`}>
                                        Hi, I'm <span className={`text-lg tracking-wider ${color ? 'text-green-500' : 'text-blue-600'}`}>Shreyash Thaware,</span> a passionate web developer committed to transforming ideas into interactive, user-focused digital experiences.With a background in modern web development technologies, I specialize in creating clean, responsive, and efficient websites and applications that not only function seamlessly but also offer intuitive user experiences.
                                        From full-stack development and UI/UX design to performance optimization, I’m dedicated to crafting solutions that not only meet but exceed client expectations.
                                        When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, or brainstorming fresh, creative ways to elevate my craft. Let’s work together to bring your vision to the digital world—innovative, impactful, and crafted with care.
                                        <br />
                                        <div className='py-2'>Skills: React, Node.js, JavaScript, HTML, CSS, Tailwind CSS, and more.</div>
                                    </p>
                                    <div className='flex gap-3 my-4'>
                                        <a href='' className='py-2 px-8 rounded-md font-semibold tracking-wide text-white bg-blue-600 flex justify-center items-center gap-1 hover:scale-105 duration-150'><FaLinkedin />Linkedin</a>
                                        <a href='' className='py-2 px-8 rounded-md font-semibold tracking-wide text-white bg-red-600 flex justify-center items-center gap-1 hover:scale-105 duration-150'><IoMailUnread />Email</a>
                                    </div>
                                </div>

                                <div className='flex justify-center'>
                                    <div className='w-[270px] bg-red-50 rounded-md border-2 border-gray-400'>
                                        <div className='bg-black rounded-t-md py-6 flex items-center gap-1 px-4 '>
                                            <span className='rounded-full w-3 h-3 bg-red-500 '></span>
                                            <span className='rounded-full w-3 h-3 bg-yellow-500'></span>
                                            <span className='rounded-full w-3 h-3 bg-green-500'></span>
                                            <div className='text-white text-xs font-semibold tracking-wider flex w-[200px]  justify-end'>
                                                <span className='flex items-center justify-center gap-2'>Click to preview <GiClick className='transform rotate-[35deg]' /></span>
                                            </div>
                                        </div>
                                        <div className=' relative'>
                                            <img
                                                src="/Resume.png"
                                                alt="Resume"
                                                className='rounded-b-md object-cover cursor-pointer w-96 '
                                                onClick={handleImageClick} // Add onClick event to open modal
                                            />
                                            <a href="/Resume1.pdf" download="Shreyash_Thaware_Resume.pdf" className='px-5 md:px-0 absolute bottom-5 left-14 md:left-[75px]'>
                                                <button className={` font-bold tracking-wide text-xs w-[126px] h-[46px] rounded-2xl shadow-md shadow-gray-500 hover:scale-105 duration-200 ${color ? 'bg-[#67fd67] text-black' : 'bg-blue-600 text-white'} `}>
                                                    Download
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div id='contact' className='pt-16 w-full px-4'>
                            <div className='flex justify-center items-center gap-4 md:gap-6 py-8 md:px-20'>
                                <div className='line-before h-[1.6px] w-full bg-slate-300 '></div>
                                <h2 className={`text-xl md:text-2xl font-bold uppercase text-nowrap ${color ? 'text-white' : ''}`}>Contact Me</h2>
                                <div className='line-after h-[1.6px] w-full bg-slate-300 '></div>
                            </div>
                            <form onSubmit={onSubmit} className=' flex justify-center items-center py-10 md:py-20 '>
                                <div className='flex flex-col md:flex-row justify-between  border shadow-lg md:w-[800px] py-6 md:py-10 px-8 rounded-md'>
                                    <div className='md:w-[300px]'>
                                        <h1 className={` ${color ? 'text-white' : 'text-black'} capitalize text-black text-2xl font-bold`}>let's get in touch</h1>
                                        <div className='flex justify-center'>
                                            <img src="/contact.svg" alt="" className='w-48 md:w-96 pt-8 md:py-6' />
                                        </div>
                                    </div>
                                    <div className='md:w-[380px] pt-10 md:pt-20 space-y-8'>
                                        <input type="text" placeholder='Full Name' className={`text-black border-b py-1 px-1 border-blue-600 w-full ${color ? 'bg-[#111212fa] text-white border-green-400' : ''}`} />
                                        <input type="email" placeholder='Email' className={`text-black border-b py-1 px-1 border-blue-600 w-full ${color ? 'bg-[#111212fa] text-white border-green-400' : ''}`} />
                                        <textarea placeholder='Type your Message...' name="message" id="" rows={1} className={`text-black border-b py-1 px-1 border-blue-600 w-full ${color ? 'bg-[#111212fa] text-white border-green-400' : ''}`}></textarea>
                                        <button type='submit' className={`py-2 px-4 rounded-md shadow-lg hover:scale-105 duration-200 font-semibold ${color ? 'bg-[#67fd67] text-black' : 'bg-blue-600 text-white'}`}>Send</button>
                                    </div>
                                </div>
                            </form>
                            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false}  />
                        </div>

                        {/* Modal for Resume Image */}
                        {isOpen && (
                            <a className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" target='_blank'>
                                <div className="relative">
                                    <img src={selectedImage} alt="Resume" className="w-[360px] md:w-[500px]" />
                                    <button
                                        onClick={closeModal}
                                        className="absolute top-4 right-4 bg-white rounded-full p-2 text-black"
                                    >
                                        <IoClose />
                                    </button>
                                </div>
                            </a>
                        )}



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
            </div >
        </>
    );
}

export default Portfolio;
