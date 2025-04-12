import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'
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
import { IoMdSend } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import '../App.css'

function Portfolio() {
    const [color, setColor] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isRotated, setIsRotated] = useState(false);




    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'contact'];
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
            imgSrc: '/mastermind.png',
            imgAlt: 'MasterMind - Academix',
            git: 'https://github.com/Shreyashthaware2003/MasterMind-Academix',
            project: 'https://master-mind-academix.vercel.app/',
            title: 'MasterMind - Academix',
            description: "A responsive full-stack course-selling platform built with the MERN stack. Users can browse, purchase, and learn through structured courses. Features include quizzes, chatbot support, and certificate generation. Admins can manage courses, lectures, and users via a secure dashboard.",
        },
        {
            imgSrc: '/foreverbuy.png',
            imgAlt: 'Forverbuy',
            git: 'https://github.com/Shreyashthaware2003/E-commerce-MERN-',
            project: 'https://forever-buy-one.vercel.app',
            title: 'Foreverbuy',
            description: "A full-stack fashion store built with the MERN stack. Users can browse, filter, and shop clothing by category and size. Includes cart, reviews, and responsive design. Admins can manage products, users, and orders.",
        },
    ];



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

    const handleDownload = () => {
        // URL of the resume file
        const resumeUrl = '/Resume1.pdf';

        // Triggering the download
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Shreyash_Thaware_Resume.pdf'; // File name to save
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up the element
    };


    return (
        <>
            <div className={`${color ? 'bg-black transition-all duration-300' : 'bg-white transition-all duration-300'} py-4 px-4`} style={{ fontFamily: "Poppins" }}>
                <div className='shadow-lg max-w-7xl mx-auto'>

                    {/* Fixed Navbar */}
                    <nav className={`fixed top-0 left-0 w-full py-4 z-50 ${color ? 'bg-black transition-all duration-300' : 'bg-white transition-all duration-300'} px-3`}>
                        <div className={`mx-auto max-w-7xl flex justify-between items-center px-6 h-14 md:h-24 rounded-md ${color ? 'bg-[#111212] transition-all duration-300' : 'bg-white shadow-lg transition-all duration-300'}`}>
                            <div className='flex justify-center items-center gap-1 md:gap-4'>
                                <img src="/hero.png" className='w-12' alt="" />
                                <Link to={'home'} smooth={true} offset={-100} duration={500} className={`${color ? 'text-white hover:text-[#67fd67] transition-all duration-300' : 'text-black hover:text-blue-600 transition-all duration-300'} text-sm md:text-lg font-bold tracking-widest uppercase transition-all duration-300 md:hover:-translate-y-1 cursor-pointer`}>Shreyash Thaware</Link>
                            </div>
                            <ul className={`hidden md:flex justify-center items-center gap-2 text-sm font-semibold shadow-lg py-2 px-2 rounded-md  ${color ? 'bg-[#0e0f0f] transition-all duration-300' : 'bg-white transition-all duration-300'} `}>
                                <Link to={'home'} smooth={true} offset={-120} duration={500}>
                                    <li className={`px-4 py-2 ${activeSection === 'home' ? (color ? 'bg-[#67fd67] text-black transition-all duration-300' : 'bg-blue-600 text-white transition-all duration-300') : (color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-700 hover:text-white')} rounded-md cursor-pointer transition-all duration-300`}>
                                        Home
                                    </li>
                                </Link>

                                <Link to={'about'} smooth={true} offset={-30} duration={500}>
                                    <li className={`px-4 py-2 ${activeSection === 'about' ? (color ? 'bg-[#67fd67] text-black' : 'bg-blue-600 text-white') : (color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-700 hover:text-white')} rounded-md cursor-pointer transition-all duration-300`}>
                                        About
                                    </li>
                                </Link>


                                <Link to={'projects'} smooth={true} offset={-40} duration={500}>
                                    <li className={`px-4 py-2 ${activeSection === 'projects' ? (color ? 'bg-[#67fd67] text-black' : 'bg-blue-600 text-white') : (color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-700 hover:text-white')} rounded-md cursor-pointer transition-all duration-300`}>
                                        Projects
                                    </li>
                                </Link>

                                <Link to={'contact'} smooth={true} offset={-20} duration={500}>
                                    <li className={`px-4 py-2 ${activeSection === 'contact' ? (color ? 'bg-[#67fd67] text-black' : 'bg-blue-600 text-white') : (color ? 'hover:bg-[#67fd67] hover:text-black text-white' : 'hover:bg-blue-700 hover:text-white')} rounded-md cursor-pointer transition-all duration-300`}>
                                        Contact
                                    </li>
                                </Link>
                            </ul>
                            {/* Mobile menu toggle */}
                            <div className='md:hidden flex items-center transition-all duration-300'>
                                {menuOpen ? "" : (
                                    <BiMenuAltRight
                                        onClick={() => setMenuOpen(true)}
                                        className={`cursor-pointer text-xl transition-all duration-300 ${color ? 'text-white' : 'text-black'}`}
                                    />
                                )}
                            </div>

                            {/* Mobile menu with transition */}
                            <div
                                className={`md:hidden fixed top-0 right-0 w-full h-screen z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                                    } ${color ? 'bg-[#1c1e1e] text-white' : 'bg-white text-black'} shadow-lg rounded-l-md py-6 `}
                            >
                                <div className='flex justify-between items-center'>
                                    <h1 className='absolute top-6 text-4xl left-8'>Menu</h1>
                                    <IoClose
                                        onClick={() => setMenuOpen(false)}
                                        className={`cursor-pointer text-2xl absolute right-8 top-8 ${color ? 'text-white' : 'text-black'}`}
                                    />
                                    
                                </div>
                                <hr className='relative top-12 border border-black' />
                                <ul className='flex flex-col gap-4 text-xl  font-medium  absolute top-28 px-4 uppercase tracking-wide'>
                                    <li
                                        className={`px-4 py-2 rounded-md cursor-pointer ${color
                                            ? 'hover:bg-[#67fd67] hover:text-black text-white'
                                            : 'hover:bg-blue-600 hover:text-white'
                                            }`}
                                    >
                                        <Link to='home' smooth={true} offset={-120} duration={500} onClick={() => setMenuOpen(false)}>
                                            Home
                                        </Link>
                                    </li>
                                    <li
                                        className={`px-4 py-2 rounded-md cursor-pointer ${color
                                            ? 'hover:bg-[#67fd67] hover:text-black text-white'
                                            : 'hover:bg-blue-600 hover:text-white'
                                            }`}
                                    >
                                        <Link to='about' smooth={true} offset={-20} duration={500} onClick={() => setMenuOpen(false)}>
                                            About
                                        </Link>
                                    </li>
                                    <li
                                        className={`px-4 py-2 rounded-md cursor-pointer ${color
                                            ? 'hover:bg-[#67fd67] hover:text-black text-white'
                                            : 'hover:bg-blue-600 hover:text-white'
                                            }`}
                                    >
                                        <Link to='projects' smooth={true} offset={-20} duration={500} onClick={() => setMenuOpen(false)}>
                                            Projects
                                        </Link>
                                    </li>
                                    <li
                                        className={`px-4 py-2 rounded-md cursor-pointer ${color
                                            ? 'hover:bg-[#67fd67] hover:text-black text-white'
                                            : 'hover:bg-blue-600 hover:text-white'
                                            }`}
                                    >
                                        <Link to='contact' smooth={true} offset={-20} duration={500} onClick={() => setMenuOpen(false)}>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>


                            {/* Dark Mode Toggle */}
                            <div className="hidden md:flex items-center ">
                                <label className="relative inline-flex items-center cursor-pointer ">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer "
                                        checked={color}
                                        onChange={() => setColor(!color)}
                                    />
                                    <div className={`w-11 h-6  bg-gray-200 rounded-full peer-focus:outline-none shadow-lg peer-checked:bg-black transition-all flex items-center justify-between px-1 border-2 ${color ? 'border-gray-700' : ''}`}>
                                        <FaSun className={`text-yellow-500 ${color ? 'opacity-100' : 'opacity-0'} transition-opacity text-xs`} />
                                        <FaMoon className={`text-black ${color ? 'opacity-0' : 'opacity-100'} transition-opacity text-xs`} />
                                        <div className={`absolute w-5 h-5 mx-[2px] bg-white rounded-full border border-gray-300 transition-transform peer-checked:translate-x-5 ${color ? 'right-0' : 'left-0'} `}></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </nav>

                    {/* Main Content */}
                    <div className={`pb-2 pt-24 flex flex-col  items-center rounded-md ${color ? 'bg-[#111212] transition-all duration-300' : 'bg-white shadow-lg transition-all duration-300'}`}>
                        {/* <h1 className={`${color ? 'text-white' : 'text-black'} text-4xl font-bold text-center`}>My Portfolio</h1> */}
                        <div id='home' className={`flex flex-col md:w-[900px]  md:gap-0 justify-center items-center tracking-wide py-4 md:py-20 ${color ? 'text-white transition-all duration-300' : 'text-black transition-all duration-300'}`}>
                            <div className='flex items-center justify-center'>
                                <img src="/hero.png" alt="Hero" className='w-56 h-auto md:w-auto' />
                            </div>
                            <div className=' text-sm md:text-base font-semibold px-6 py-6  md:px-24 flex flex-col justify-center items-center '>
                                <h2 className='text-xl md:text-2xl font-bold py-2 flex justify-center items-center md:block text-center'>Hello, I'm Shreyash Thaware</h2>
                                <p className='px-5 py-2 md:px-0 text-center max-w-md'>I am a passionate full stack web developer (MERN) with a focus on creating stunning pixel-perfect interactive websites.</p>
                                <div className='flex md:justify-start gap-4 py-6 px-5 md:px-0'>
                                    <a href="https://www.linkedin.com/in/shreyash-thaware-168718264/" target='_blank' className={`w-8 h-8 rounded-full shadow-lg bg-gray-100 text-lg hover:bg-blue-600 hover:text-white hover:scale-125 duration-300 flex justify-center items-center ${color ? 'text-black border border-gray-400' : ''} `}><FaLinkedinIn /></a>

                                    <a href="https://www.instagram.com/shrreyy.17/" target='_blank' className={`w-8 h-8 rounded-full shadow-lg bg-gray-100 text-lg hover:bg-pink-600 hover:text-white hover:scale-125 duration-300 flex justify-center items-center ${color ? 'text-black border border-gray-400' : ''}`}><FaInstagram className='font-bold' /></a>

                                    <a href="https://github.com/Shreyashthaware2003" target='_blank' className={`w-8 h-8 rounded-full shadow-lg bg-gray-100 text-lg hover:bg-black hover:text-white hover:scale-125 duration-300 flex justify-center items-center ${color ? 'text-black border border-gray-400' : ''}`}><FiGithub /></a>

                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shreyashthaware284@gmail.com" target='_blank' className={`w-8 h-8 rounded-full shadow-lg bg-gray-100 text-lg hover:bg-yellow-500 hover:text-white hover:scale-125 duration-300 flex justify-center items-center ${color ? 'text-black border border-gray-400' : ''}`}><MdMailOutline /></a>
                                </div>
                                <div className=' flex justify-center items-center gap-4'>
                                    <Link to={'contact'} smooth={true} offset={-80} duration={500} className={` flex justify-center items-center gap-2 w-fit text-center py-2 px-4 my-4 cursor-pointer hover:scale-105 duration-500 rounded-md font-semibold tracking-wider transition-all ${color ? "bg-[#67fd67] text-black" : " bg-blue-600 text-white"}`}>Contact <IoMdSend /></Link>

                                    <a href="/Resume1.pdf" download="Shreyash_Thaware_Resume.pdf" className=''>
                                        <button className={` flex justify-center items-center gap-2 font-semibold tracking-wide rounded-md py-2 px-4 w-fit  hover:scale-105 duration-500 ${color ? 'bg-[#67fd67] text-black' : 'bg-blue-600 text-white'} `}>
                                            Download CV <FiDownload />
                                        </button>
                                    </a>
                                </div>

                            </div>
                        </div>

                        {/* mouse */}
                        <div className="flex justify-center items-center">
                            {/* Mouse-like div */}
                            <div className={`relative w-6 h-10 border-2  rounded-full ${color ? "border-white transition-all duration-300" : "border-gray-800 transition-all duration-300"}`}>
                                {/* Inner animated dot */}
                                <div className={`absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 ${color ? "bg-white" : "bg-gray-800"} rounded-full animate-scroll`}></div>
                            </div>
                        </div>

                        {/* About Section */}
                        <div id='about' className='pt-16 w-full px-4'>
                            <div className='flex justify-center items-center gap-4 md:gap-6 py-8 md:px-20'>
                                <div className='line-before h-[1.6px] w-full bg-slate-300 '></div>
                                <h2 className={`text-xl md:text-2xl font-bold uppercase text-nowrap ${color ? 'text-white transition-all duration-300' : 'transition-all duration-300'}`}>About Me</h2>
                                <div className='line-after h-[1.6px] w-full bg-slate-300 '></div>
                            </div>
                            <div className='flex flex-col md:flex-row justify-center gap-20 px-4 md:px-32 py-6 md:py-16'>
                                <div className='md:w-[500px]'>
                                    <p className={`font-semibold ${color ? 'text-white transition-all duration-300' : 'transition-all duration-300'}`}>
                                        Hi, I'm <span className={`text-lg tracking-wider ${color ? 'text-green-500 transition-all duration-300' : 'text-blue-600 transition-all duration-300'}`}>Shreyash Thaware,</span> a passionate web developer committed to transforming ideas into interactive, user-focused digital experiences.With a background in modern web development technologies, I specialize in creating clean, responsive, and efficient websites and applications that not only function seamlessly but also offer intuitive user experiences.
                                        From full-stack development and UI/UX design to performance optimization, I’m dedicated to crafting solutions that not only meet but exceed client expectations.
                                        When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, or brainstorming fresh, creative ways to elevate my craft. Let’s work together to bring your vision to the digital world—innovative, impactful, and crafted with care.
                                        <br />
                                        <div className='py-2'>Skills: React, Node.js, JavaScript, HTML, CSS, Tailwind CSS, and more.</div>
                                    </p>
                                    <div className='flex gap-3 my-4'>
                                        <a href='https://www.linkedin.com/in/shreyash-thaware-168718264/' target='_blank' className='py-2 px-8 rounded-md font-semibold tracking-wide text-white bg-blue-600 flex justify-center items-center gap-1 hover:scale-105 duration-150'><FaLinkedin />Linkedin</a>
                                        <a href='https://mail.google.com/mail/?view=cm&fs=1&to=shreyashthaware284@gmail.com' target='_blank' className='py-2 px-8 rounded-md font-semibold tracking-wide text-white bg-red-600 flex justify-center items-center gap-1 hover:scale-105 duration-150'><IoMailUnread />Email</a>
                                    </div>
                                </div>

                                <div className='flex justify-center items-center'>
                                    <div className='w-[270px] h-[446px] bg-red-50 rounded-md border-2 border-gray-400'>
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
                                            <a href="/Resume1.pdf" download="Shreyash_Thaware_Resume.pdf" className='md:px-0 absolute bottom-5 left-16 md:left-[75px]'>
                                                <button className={` font-bold tracking-wide text-xs w-[126px] h-[46px] rounded-2xl shadow-md shadow-gray-500 hover:scale-105 duration-200 ${color ? 'bg-[#67fd67] text-black transition-all duration-300' : 'bg-blue-600 text-white transition-all duration-300'} `}>
                                                    Download
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Projects Section */}
                        <div id='projects' className='md:pt-16 px-4 w-full transition-all duration-300'>
                            <div className='flex justify-center items-center gap-6 py-20 md:px-20'>
                                <div className='line-before h-[1.6px] w-full bg-slate-300'></div>
                                <h2 className={`text-xl md:text-2xl font-bold uppercase ${color ? 'text-white transition-all duration-300' : 'transition-all duration-300'}`}>Projects</h2>
                                <div className='line-after h-[1.6px] w-full bg-slate-300'></div>
                            </div>

                            <div className='flex flex-col gap-12 md:gap-24 py-0 md:py-8 md:px-32'>
                                {project.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} gap-6 px-4`}
                                    >
                                        <div className='w-full md:w-1/2 transition-all duration-300'>
                                            <a
                                                href={item.project}
                                                target='_blank'
                                                className={`overflow-hidden ${color ? 'text-white border-gray-400' : 'text-black border-black'}`}
                                            >
                                                <img
                                                    src={item.imgSrc}
                                                    alt={item.imgAlt}
                                                    className='w-full h-full shadow-md'
                                                />
                                            </a>
                                        </div>
                                        <div className={`w-full md:w-1/2 px-4 flex flex-col gap-4 transition-all duration-300 ${color ? "text-white" : "text-black"}`}>
                                            <h3 className='text-lg md:text-2xl font-medium '>{item.title}</h3>
                                            <span className='text-sm md:text-base'>{item.description}</span>
                                            <div className='flex justify-between items-center font-semibold'>
                                                <span className='flex gap-2'>
                                                    <a href={item.git} target='_blank'>
                                                        <FiGithub className={`rounded-full hover:scale-110 duration-100 w-8 h-8 p-1 shadow-lg bg-white ${color ? 'text-black' : ''}`} />
                                                    </a>
                                                    <a href={item.project} target='_blank'>
                                                        <IoLink className={`rounded-full hover:scale-110 duration-100 w-8 h-8 p-1 shadow-lg bg-white ${color ? 'text-black' : ''}`} />
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* Contact Section */}
                        <div id='contact' className='pt-24 w-full px-4 transition-all duration-300'>
                            <div className='flex justify-center items-center gap-4 md:gap-6 py-8 md:px-20'>
                                <div className='line-before h-[1.6px] w-full bg-slate-300 '></div>
                                <h2 className={`text-xl md:text-2xl font-bold uppercase text-nowrap ${color ? 'text-white transition-all duration-300' : 'transition-all duration-300'}`}>Contact Me</h2>
                                <div className='line-after h-[1.6px] w-full bg-slate-300 '></div>
                            </div>
                            <form onSubmit={onSubmit} className=' flex justify-center items-center py-10 md:py-20 '>
                                <div className='flex flex-col md:flex-row justify-between  border shadow-lg md:w-[800px] py-6 md:py-10 px-8 rounded-md transition-all duration-300'>
                                    <div className='md:w-[300px]'>
                                        <h1 className={` ${color ? 'text-white transition-all duration-300' : 'text-black transition-all duration-300'} capitalize text-black text-2xl font-bold`}>let's get in touch</h1>
                                        <div className='flex justify-center'>
                                            <img src="/contact.svg" alt="" className='w-48 md:w-96 pt-8 md:py-6 transition-all duration-300' />
                                        </div>
                                    </div>
                                    <div className='md:w-[380px] pt-10 md:pt-20 space-y-8'>
                                        <input type="text" placeholder='Full Name' className={`text-black border-b py-1 px-1 border-blue-600 w-full ${color ? 'bg-[#111212fa] text-white border-green-400 transition-all duration-300' : 'transition-all duration-300'}`} />
                                        <input type="email" placeholder='Email' className={`text-black border-b py-1 px-1 border-blue-600 w-full ${color ? 'bg-[#111212fa] text-white border-green-400 transition-all duration-300' : 'transition-all duration-300'}`} />
                                        <textarea placeholder='Type your Message...' name="message" id="" rows={1} className={`text-black border-b py-1 px-1 border-blue-600 w-full ${color ? 'bg-[#111212fa] text-white border-green-400 transition-all duration-300' : 'transition-all duration-300'}`}></textarea>
                                        <button type='submit' className={`py-2 px-4 rounded-md shadow-lg hover:scale-105 duration-200 font-semibold ${color ? 'bg-[#67fd67] text-black transition-all duration-300' : 'bg-blue-600 text-white transition-all duration-300'}`}>Send</button>
                                    </div>
                                </div>
                            </form>
                            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
                        </div>

                        {/* Modal for Resume Image */}
                        {isOpen && (
                            <a className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all duration-300" target='_blank'>
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


                        <div className=''>
                            {/* Mobile Toggle Switch at the Bottom */}
                            <div className='md:hidden fixed bottom-10 right-10 flex justify-center py-2 order-2 order transition-all duration-300'>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={color}
                                        onChange={() => setColor(!color)}
                                    />
                                    <div className={`w-8 h-8 bg-white rounded-full peer-focus:outline-none shadow-lg peer-checked:bg-[#1c1e1e] transition-all flex items-center justify-center px-1 border-2 ${color ? 'border-gray-700 transition-all duration-300' : 'transition-all duration-300'}`}>
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

            </div>
        </>
    );
}

export default Portfolio;
