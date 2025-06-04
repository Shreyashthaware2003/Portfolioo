import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { IoSunnyOutline, IoMoonOutline, IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { CiMail, CiLocationOn } from "react-icons/ci";
import { GiClick } from "react-icons/gi";
import { FiDownload, FiGithub, FiLinkedin, FiInstagram, FiMail, FiExternalLink, FiPhone } from "react-icons/fi";
import { FaHtml5, FaCss3, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import blog from './assets/blog.jpg';
import store from './assets/store.jpg';
import cms from './assets/cms.jpg';
import Resume from './assets/Resume.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking a nav link (for mobile)
  const handleLinkClick = () => setMenuOpen(false);

  // reach me
  useEffect(() => {
    if (showModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [showModal]);

  // resume image
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  const handleImageClick = () => {
    setSelectedImage(Resume); // Set the image source for the modal
    setIsOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsOpen(false); // Close the modal
    setSelectedImage(null); // Clear the selected image
  };


  const nav = [
    { text: "About", to: 'about' },
    { text: "Skills", to: 'skills' },
    { text: "Projects", to: 'projects' },
  ];

  const social = [
    {
      icon: <FiGithub />,
      link: 'https://github.com/Shreyashthaware2003'
    },
    {
      icon: <FiMail />,
      link: "https://mail.google.com/mail/u/0/?fs=1&to=shreyashthaware284@gmail.com&tf=cm"
    },
    {
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/shreyash-thaware-168718264/"
    },
    {
      icon: <FiInstagram />,
      link: "https://www.instagram.com/shrreyy.17/"
    },
  ];

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", bg: "bg-red-500", icon: <FaHtml5 /> },
        { name: "CSS", bg: "bg-blue-500", icon: <FaCss3 /> },
        { name: "JavaScript", bg: "bg-yellow-400", icon: <TbBrandJavascript /> },
        { name: "Bootstrap", bg: "bg-purple-600", icon: <FaBootstrap /> },
        { name: "Tailwind CSS", bg: "bg-blue-500", icon: <RiTailwindCssFill /> },
        { name: "React JS", bg: "bg-[#0A192F]", icon: <RiTailwindCssFill /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", bg: "bg-green-600", icon: <FaNodeJs /> },
        { name: "Express", bg: "bg-gray-700", icon: <SiExpress /> },
        { name: "MongoDB", bg: "bg-green-500", icon: <SiMongodb /> },
      ],
    },
    {
      title: "Other Tools",
      skills: [
        { name: "Postman", bg: "bg-orange-600", icon: <SiPostman /> },
        { name: "Git", bg: "bg-red-500", icon: <FaGitAlt /> },
        { name: "GitHub", bg: "bg-gray-900", icon: <FaGithub /> },
        { name: "VS Code", bg: "bg-indigo-500", icon: <VscVscode /> },
      ],
    },
  ];

  const project = [
    {
      img: store,
      title: 'Forever Buy',
      description: 'A full-stack fashion store built with the MERN stack. Users can browse, filter, and shop clothing by category and size. Includes cart, reviews, and responsive design. Admins can manage products, users, and orders.',
      live: "https://forever-buy-one.vercel.app/",
      github: 'https://github.com/Shreyashthaware2003/E-commerce-MERN-',
      skills: [
        {
          name: 'React.js',
        },
        {
          name: 'Node.js',
        },
        {
          name: 'Express.js',
        },
        {
          name: 'Tailwind CSS'
        },
      ],
      features: [
        {
          feature: "User authentication with JWT",

        },
        {
          feature: "Admin dashboard for data management"
        },

      ]
    },
    {
      img: blog,
      title: 'Blogger',
      description: 'A full-stack fashion store built with the MERN stack. Users can browse, filter, and shop clothing by category and size. Includes cart, reviews, and responsive design. Admins can manage products, users, and orders.',
      live: "https://blogger-sigma-nine.vercel.app/",
      github: 'https://github.com/Shreyashthaware2003/Blogger-Nextjs-',
      skills: [
        {
          name: 'React.js',
        },
        {
          name: 'Node.js',
        },
        {
          name: 'Express.js',
        },
        {
          name: 'Next.js',
        },
        {
          name: 'Tailwind CSS'
        },
      ],
      features: [
        {
          feature: "Create, Read, Update, Delete (CRUD) Posts",

        },
        {
          feature: "Image Upload Support for blog posts"
        },
        {
          feature: "Categorized Blogs (Tech, Travel, Lifestyle)"
        },
        {
          feature: "User Dashboard to manage own blogs"
        },

      ]
    },
    {
      img: cms,
      title: 'MasterMind Academix',
      description: 'A responsive full-stack course-selling platform built with the MERN stack. Users can browse, purchase, and learn through structured courses. Admins can manage courses, lectures, and users via a secure dashboard.',
      live: "https://master-mind-academix.vercel.app/",
      github: 'https://github.com/Shreyashthaware2003/MasterMind-Academix',
      skills: [
        {
          name: 'React.js',
        },
        {
          name: 'Node.js',
        },
        {
          name: 'Express.js',
        },
        {
          name: 'Daisy UI'
        },
        {
          name: 'Tailwind CSS'
        },
      ],
      features: [
        {
          feature: "Course Listing with filtering by category & level",

        },
        {
          feature: "Video Lectures embedded for each course module"
        },
        {
          feature: "Add & Attempt Quizzes for each course"
        },
        {
          feature: "Secure API Routes (JWT protected)"
        },

      ]
    }
  ];

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
      <div className={`${darkMode ? 'bg-white text-black' : 'bg-black text-white'} transition-all duration-300  px-4 cursor-default`}>
        <div className='max-w-4xl mx-auto py-10'>

          {/* Navbar */}
          <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg transition-all duration-300 ${darkMode ? 'bg-white/70' : ' bg-black/60'}`}>
            <div className="max-w-4xl mx-auto px-4 flex justify-between items-center py-4">
              {/* Logo / Brand */}
              <div className="font-bold text-xl select-none">Shreyash Thaware</div>
              {/* Desktop nav */}
              <ul className="hidden md:flex items-center gap-6">
                {nav.map((item, index) => (
                  <li key={index}>
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className={`${darkMode
                        ? "hover:bg-gray-200 duration-200"
                        : "hover:bg-[#27272a] duration-200"
                        } px-3 py-2 rounded-md flex items-center cursor-pointer`}
                      onClick={handleLinkClick}
                    >
                      {item.text}
                    </ScrollLink>
                  </li>
                ))}
              </ul>

              {/* Right side buttons */}
              <div className="hidden md:flex items-center gap-4 transition-all duration-300">
                <div
                  className={`${darkMode
                    ? "hover:bg-gray-200  duration-200"
                    : "hover:bg-[#27272a] duration-200"
                    } px-3 py-2 rounded-md flex items-center gap-4 cursor-pointer`}
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className={`${darkMode
                    ? "bg-black text-white hover:bg-[#27272a] duration-200"
                    : "bg-white text-black hover:bg-gray-200 duration-200"
                    } px-3 py-1 rounded-md cursor-pointer`}
                >
                  Reach Me
                </button>
              </div>

              {/* Hamburger menu for mobile */}
              <div className="md:hidden flex items-center gap-2">
                <div
                  className={`${darkMode
                    ? "hover:bg-[#27272a] duration-200"
                    : "hover:bg-gray-200 duration-200"
                    } p-2 rounded-md cursor-pointer`}
                  onClick={() => setDarkMode(!darkMode)}
                  aria-label="Toggle Dark Mode"
                >
                  {darkMode ? <IoMoonOutline size={18} /> : <IoSunnyOutline size={18} />}
                </div>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className={`focus:outline-none`}
                  aria-label="Toggle Menu"
                >
                  <IoMdMenu size={18} />
                </button>
              </div>
            </div>

            <ul
              className={`md:hidden fixed top-0 right-0 h-screen w-full
      transform transition-transform duration-300 ease-in-out z-40
      ${darkMode ? "bg-white text-black" : "bg-black text-white"}
      ${menuOpen ? "translate-x-0" : "translate-x-full"}
    `}
            >
              <div className='flex justify-between items-center py-5 px-6 border-b'>
                <h1 className='text-2xl'>Menu</h1>
                <IoClose
                  onClick={() => setMenuOpen(false)}
                  className={`cursor-pointer text-2xl absolute right-4  ${darkMode ? 'text-black' : 'text-white'}`}
                />
              </div>
              {nav.map((item, index) => (
                <li key={index}>
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={`block px-6 py-3 cursor-pointer ${darkMode ? "hover:bg-[#27272a]" : "hover:bg-gray-200"
                      }`}
                    onClick={() => {
                      handleLinkClick();
                      setMenuOpen(false); // close menu on link click
                    }}
                  >
                    {item.text}
                  </ScrollLink>
                </li>
              ))}
              <li className="px-6 py-3">
                <button
                  onClick={() => {
                    setShowModal(true);
                    setMenuOpen(false);
                  }}
                  className={`${darkMode
                    ? "bg-black text-white hover:bg-[#27272a] duration-200"
                    : "bg-white text-black hover:bg-gray-200 duration-200"
                    } px-3 py-2 rounded-md cursor-pointer`}
                >
                  Reach Me
                </button>
              </li>
            </ul>

          </nav>

          {/* Modal Overlay with blur */}
          {showModal && (
            <div
              className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md p-4"
            >
              <div className="flex relative flex-col sm:flex-row sm:flex-nowrap gap-4 w-full md:max-w-3xl p-6">
                {/* Main Modal Box */}
                <div
                  className={`w-full sm:w-[90%]  rounded-xl border shadow-lg p-4 sm:p-6 relative overflow-y-auto max-h-[90vh] ${darkMode
                    ? "bg-white text-black border-gray-200"
                    : "bg-[#27272a] text-white border-gray-800"
                    }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-6 hidden md:inline">
                      <h3 className={`text-xl font-semibold ${darkMode ? 'text-black' : 'text-white'}`}>Get In Touch</h3>
                      <div className="space-y-4">
                        {/* Email */}
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-200 text-black' : 'bg-[#27272a] text-white'}`}>
                            <FiMail />
                          </div>
                          <div>
                            <p className={`text-sm ${darkMode ? 'text-black' : 'text-white'}`}>Email</p>
                            <a className={`font-medium hover:underline ${darkMode ? 'text-black' : 'text-white'}`} href="mailto:shreyashthaware284@gmail.com">
                              shreyashthaware284@gmail.com
                            </a>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-200 text-black' : 'bg-[#27272a] text-white'}`}>
                            <FiPhone />
                          </div>
                          <div>
                            <p className={`text-sm ${darkMode ? 'text-black' : 'text-white'}`}>Phone</p>
                            <a className={`font-medium hover:underline ${darkMode ? 'text-black' : 'text-white'}`} href="tel:8459220920">
                              +91 84592 20920
                            </a>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-200 text-black' : 'bg-[#27272a] text-white'}`}>
                            <CiLocationOn />
                          </div>
                          <div>
                            <p className={`text-sm ${darkMode ? 'text-black' : 'text-white'}`}>Location</p>
                            <p className={`font-medium ${darkMode ? 'text-black' : 'text-white'}`}>Nagpur, India</p>
                          </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-200 text-black' : 'bg-[#27272a] text-white'}`}>
                            <FiLinkedin />
                          </div>
                          <div>
                            <p className={`text-sm ${darkMode ? 'text-black' : 'text-white'}`}>LinkedIn</p>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`font-medium hover:underline ${darkMode ? 'text-black' : 'text-white'}`}
                              href="https://www.linkedin.com/in/shreyash-thaware-168718264/"
                            >
                              linkedin.com/in/shreyash-thaware
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className={`${darkMode ? 'text-black' : 'text-white'}`}>
                      <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                      <form className="space-y-4" onSubmit={onSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Name Field */}
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm">Name</label>
                            <input
                              id="name"
                              name="name"
                              placeholder="Your name"
                              required
                              className={`w-full h-10 px-3 py-2 text-base rounded-md border focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-200' : 'border-white'}`}
                            />
                          </div>

                          {/* Email Field */}
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Your email"
                              required
                              className={`w-full h-10 px-3 py-2 text-base rounded-md border focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-200' : 'border-white'}`}
                            />
                          </div>
                        </div>

                        {/* Message Field */}
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm">Message</label>
                          <textarea
                            id="message"
                            name="message"
                            placeholder="Your message"
                            rows="5"
                            required
                            className={`w-full px-3 py-2 text-base rounded-md border focus:outline-none focus:ring-2 ${darkMode ? 'border-gray-200' : 'border-white'}`}
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          className={`w-full h-10 px-4 py-2 rounded-md font-medium text-sm transition-colors focus:outline-none focus:ring-2 cursor-pointer ${darkMode
                            ? 'bg-black text-white hover:bg-[#27272a]'
                            : 'bg-white text-black hover:bg-gray-200'
                            }`}
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                  <Toaster position="bottom-right" autoClose={3000} hideProgressBar={false} />
                </div>

                {/* Close Button */}
                <div className="absolute -right-3 md:right-14">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className={`p-2 rounded-full cursor-pointer ${darkMode
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-[#27272a] text-white hover:bg-[#27272a]"
                      }`}
                  >
                    <IoClose />
                  </button>
                </div>
              </div>
            </div>

          )}



          {/* About Section */}
          <div id='about' className='flex flex-col md:flex-row justify-between items-center pt-14 py-10 gap-6 md:gap-12'>
            <div className='flex flex-col gap-4 max-w-lg'>
              <div className='flex flex-col flex-nowrap gap-1'>
                <span className='text-3xl md:text-4xl font-bold'>Shreyash Thaware</span>
                <span className='text-[#a1a1aa] text-lg md:text-xl'>Software Engineer</span>
              </div>
              <div className='flex flex-wrap items-center gap-4'>
                <Link to={'https://mail.google.com/mail/u/0/?fs=1&to=shreyashthaware284@gmail.com&tf=cm'} className='flex items-center gap-1 text-[#a1a1aa] hover:underline text-sm md:text-base'><CiMail className='text-lg' />shreyashthaware284@gmail.com</Link>
                <span className='flex items-center gap-1 text-[#a1a1aa] text-sm md:text-base'><CiLocationOn className='text-lg' />Nagpur, India</span>
              </div>
              <p className='text-sm md:text-base leading-relaxed text-[#a1a1aa]'>
                I’m a passionate Full Stack Web Developer (MERN) with a strong focus on building pixel-perfect, responsive, and dynamic web applications. I love crafting clean, scalable code and designing seamless user experiences that not only look great but also perform efficiently. Whether it’s developing robust backend systems or designing intuitive front-end interfaces, I enjoy bringing ideas to life through technology.
              </p>
              <div className='flex flex-nowrap items-center my-4 gap-3'>
                <a
                  href="./src/assets/Shreyash_Thaware_MERN.pdf"
                  download="Shreyash_Thaware_Resume.pdf"
                  className={`${darkMode
                    ? "bg-black text-white hover:bg-[#27272a] duration-200"
                    : "bg-white text-black hover:bg-gray-200 duration-200"
                    } px-4 py-2 text-sm md:text-base rounded-md flex items-center gap-2 md:gap-4 cursor-pointer`}
                >
                  <FiDownload />
                  Resume
                </a>

                {social.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className={`${darkMode
                      ? "hover:bg-gray-200 duration-200 border-gray-200"
                      : "hover:bg-[#27272a] duration-200 border-gray-800"
                      } duration-200 border border-solid px-3 py-2 rounded-md cursor-pointer`}
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>

            </div>

            {/* Resume */}
            <div className='flex flex-col flex-nowrap gap-6 pt-10 pb-0 md:pb-10'>
              <div className='flex justify-center items-center'>
                <div className={`md:w-[270px] md:h-[446px] border ${darkMode ? 'border-gray-200' : 'border-gray-800'} rounded-md`}>
                  <div className='bg-black rounded-t-md py-6 flex justify-between items-center gap-1 px-4 '>
                    <div className='flex items-center gap-1'>
                      <span className='rounded-full w-3 h-3 bg-red-500 '></span>
                      <span className='rounded-full w-3 h-3 bg-yellow-500'></span>
                      <span className='rounded-full w-3 h-3 bg-green-500'></span>
                    </div>
                    <div className='text-white text-xs font-semibold tracking-wider flex w-[200px]  justify-end'>
                      <span className='flex items-center justify-center gap-2'>Click to preview <GiClick className='transform rotate-[35deg] text-base' /></span>
                    </div>
                  </div>
                  <div className='relative'>
                    <img
                      src={Resume}
                      alt="Resume"
                      className='rounded-b-md object-cover cursor-pointer w-full'
                      onClick={handleImageClick}
                    />
                  </div>

                </div>
              </div>

            </div>
            {isOpen && (
              <a className="fixed inset-0 z-50 backdrop-blur-md flex justify-center items-center transition-all duration-300">
                <div className="relative" >
                  <img src={selectedImage} alt="Resume" className="w-[310px] md:w-[460px]" />
                  <button
                    onClick={closeModal}
                    className={`absolute top-1 -right-8 rounded-full p-1 text-xl cursor-pointer ${darkMode
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-[#27272a] text-white hover:bg-[#27272a]"
                      }`}
                  >
                    <IoClose />
                  </button>
                </div>
              </a>
            )}
          </div>

          {/* Skills */}
          <div id='skills' className='flex flex-col flex-nowrap my-10 gap-6'>
            <span className='text-3xl font-bold tracking-wide'>Skills</span>
            <div className='flex items-center justify-center'>
              <div className="grid md:grid-cols-3 gap-4">
                {skillCategories.map((category, index) => (
                  <div key={index} className={`card h-full border-2 hover:border-dotted border-gray-800 ${darkMode ? 'hover:border-black' : 'hover:border-white'} rounded-lg md:w-72`}>
                    <div className={`h-full hover:border-2 border-black ${darkMode ? 'hover:bg-black text-black hover:text-white ' : 'hover:bg-white hover:text-black'} rounded-lg hover:-translate-x-1 hover:-translate-y-1 transition-all px-5 py-3`}>

                      {/* Title */}
                      <div className="my-3 md:my-5">
                        <h1 className="text-md font-semibold">{category.title}</h1>
                      </div>

                      {/* Skills */}
                      <div className="mb-3 md:mb-5 flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <span key={i}>
                            <button className={`flex items-center gap-1 ${skill.bg} p-2 text-white rounded-md`}>
                              <h1 className={`text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer`}>{skill.icon}{skill.name}</h1>
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Projects */}
          <div id='projects' className='flex flex-col flex-nowrap gap-6 py-6'>
            <span className='text-3xl font-bold tracking-wide'>Projects</span>
            {project.map((item, index) => (
              <div key={index} className={`border ${darkMode ? 'border-gray-200' : 'border-gray-800'} flex flex-col md:flex-row rounded-xl`}>
                <div className={`md:w-4xl md:border-r ${darkMode ? 'border-gray-200' : 'border-gray-800'} p-4 flex items-center`}>
                  <img src={item.img} alt="" className='object-contain' />
                </div>
                <div className='flex flex-col p-4 gap-2'>
                  <span className='text-xl font-bold tracking-wide'>{item.title}</span>
                  <p className='text-[#a1a1aa]'>{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.skills.map((skills, i) => (
                      <div key={i} className={`rounded-xl px-3 py-1 text-sm ${darkMode ? 'bg-gray-200' : 'bg-[#27272a]'}`}>
                        <span>{skills.name}</span>
                      </div>
                    ))}
                  </div>

                  <span className='text-xl font-bold tracking-wide'>Key Features:</span>
                  {item.features.map((features, i) => (
                    <ul key={i} className='list-disc list inside px-6'>
                      <li>{features.feature}</li>
                    </ul>
                  ))}
                  <div className='flex items-center gap-4'>
                    <Link to={item.live} className={`${darkMode ? 'bg-black text-white hover:bg-[#27272a] duration-200' : 'bg-white text-black hover:bg-gray-200 duration-200'} px-4 py-2 my-2 rounded-md w-fit flex items-center flex-nowrap justify-center gap-2 transition-all duration-300`} target='_blank'><FiExternalLink />Live</Link>
                    <Link to={item.github} className={`${darkMode ? 'bg-black text-white hover:bg-[#27272a] duration-200' : 'bg-white text-black hover:bg-gray-200 duration-200'} px-4 py-2 my-2 rounded-md w-fit flex items-center flex-nowrap justify-center gap-2 transition-all duration-300`} target='_blank'><FiExternalLink />Github</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
        {/* footer */}
        <footer className={`flex flex-nowrap items-center justify-center w-full py-8`}>
          <span className='flex items-center gap-2'><FiMail className='text-xl' />shreyashthaware284@gmail.com</span>
        </footer>
      </div>
    </>
  )
}

export default App
