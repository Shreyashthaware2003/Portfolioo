import React, { useState } from 'react'
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5"
import { CiMail, CiLocationOn } from "react-icons/ci";
import { FiDownload, FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { FaHtml5, FaCss3, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub, } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const nav = [
    { text: "About" },
    { text: "Skills" },
    { text: "Projects" },
    { text: "Resume" },
    { text: "Contact" },
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


  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-300  px-4`}>
      <div className='max-w-4xl mx-auto py-10'>

        {/* Navbar */}
        <nav className='fixed top-0 left-0 w-full z-50 backdrop-blur-lg  '>
          <div className='max-w-4xl mx-auto px-4 flex justify-between items-center py-4'>
            <div className='font-bold text-xl'>Portfolio</div>
            <ul className='flex items-center gap-10'>
              {nav.map((item, index) => (
                <li key={index}>
                  <NavLink className="hover:underline">{item.text}</NavLink>
                </li>
              ))}
            </ul>
            <div
              className="flex items-center text-2xl cursor-pointer transition-all duration-300"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
            </div>
          </div>
        </nav>



        {/* About Section */}
        <div className='flex flex-col md:flex-row justify-between items-center pt-14 py-10 gap-12'>
          <div className='flex flex-col gap-4 max-w-lg'>
            <span className='text-4xl font-bold'>Shreyash Thaware</span>
            <span className='text-[#a1a1aa] text-xl'>Software Engineer</span>
            <div className='flex flex-wrap items-center gap-4'>
              <Link to={'https://mail.google.com/mail/u/0/?fs=1&to=shreyashthaware284@gmail.com&tf=cm'} className='flex items-center gap-1 text-[#a1a1aa] hover:underline'><CiMail />shreyashthaware284@gmail.com</Link>
              <span className='flex items-center gap-1 text-[#a1a1aa]'><CiLocationOn />Nagpur, India</span>
            </div>
            <p className='text-base leading-relaxed text-[#a1a1aa]'>
              I’m a passionate Full Stack Web Developer (MERN) with a strong focus on building pixel-perfect, responsive, and dynamic web applications. I love crafting clean, scalable code and designing seamless user experiences that not only look great but also perform efficiently. Whether it’s developing robust backend systems or designing intuitive front-end interfaces, I enjoy bringing ideas to life through technology.
            </p>
            <div className='flex flex-nowrap items-center my-4 gap-3'>
              <button className={`${darkMode ? 'bg-white text-black hover:bg-gray-200 duration-200' : 'bg-black text-white hover:bg-[#5f5f60] duration-200'} px-4 py-2 rounded-md flex items-center gap-4 cursor-pointer`}><FiDownload />Resume</button>
              {social.map((item, index) => (
                <Link key={index} to={item.link} className={`${darkMode ? 'hover:bg-[#5f5f60] border-gray-800' : "hover:bg-gray-200 border-gray-300"} duration-200 border border-solid px-3 py-2 rounded-md cursor-pointer`}>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className='w-full md:w-[600px] lg:w-[700px] xl:w-[800px]'>
            <img
              src="./src/assets/hero.png"
              alt="heroImg"
              className="w-full h-auto object-contain rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Skills */}
        <div className='flex flex-col flex-nowrap my-10 gap-6'>
          <span className='text-3xl font-bold tracking-wide'>Skills</span>
          <div className='flex items-center justify-center'>
            <div className="grid md:grid-cols-3 gap-4">
              {skillCategories.map((category, index) => (
                <div key={index} className={`card h-full border-2 hover:border-dotted border-gray-800 ${darkMode?'hover:border-white':'hover:border-black'} rounded-lg w-72`}>
                  <div className={`h-full hover:border-2 border-black ${darkMode ? 'hover:bg-white text-white hover:text-black ' : 'hover:bg-black hover:text-white'} rounded-lg hover:-translate-x-1 hover:-translate-y-1 transition-all px-5 py-3`}>

                    {/* Title */}
                    <div className="my-3 md:my-5">
                      <h1 className="text-md font-semibold">{category.title}</h1>
                    </div>

                    {/* Skills */}
                    <div className="mb-3 md:mb-5 flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span key={i}>
                          <button className={`flex items-center gap-1 ${skill.bg} p-2 text-white rounded-md`}>
                            <h1 className="text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer">{skill.icon}{skill.name}</h1>
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
      </div>
    </div>
  )
}

export default App
