import React, { useState, useEffect } from 'react'
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5"
import { CiMail, CiLocationOn } from "react-icons/ci";
import { FiDownload, FiGithub, FiLinkedin, FiInstagram, FiMail, FiExternalLink } from "react-icons/fi";
import { FaHtml5, FaCss3, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [showModal]);


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

  const project = [
    {
      img: './src/assets/store.jpg',
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
      img: './src/assets/blog.jpg',
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
      img: './src/assets/cms.jpg',
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
              <div className='flex items-center gap-4 transition-all duration-300'>
                <div
                  className="flex items-center text-2xl cursor-pointer transition-all duration-300"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className={`${darkMode ? 'bg-white text-black hover:bg-gray-200 duration-200' : 'bg-black text-white hover:bg-[#5f5f60] duration-200'} px-3 py-1 rounded-md cursor-pointer`}
                >
                  Reach Me
                </button>
              </div>
            </div>
          </nav>

          {/* Modal Overlay with blur */}
          {showModal && (
            <div
              className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md"
            // onClick={() => setShowModal(false)}
            >
              <div
                className={`w-[90%] max-w-xl rounded-xl border shadow-lg p-6 relative ${darkMode ? 'bg-black text-black border-gray-800' : 'bg-white text-black border-gray-200'}`}
                onClick={(e) => e.stopPropagation()}
              >
                <form onSubmit={onSubmit} className='flex justify-center items-center'>
                  <div className='flex flex-col justify-between py-6 md:py-10 px-8 rounded-md transition-all duration-300'>
                    <h1 className={` ${darkMode ? 'text-white' : 'text-black'} capitalize text-2xl font-bold`}>let's get in touch</h1>
                    <div className='md:w-[380px] pt-10 md:pt-20 space-y-8'>
                      <input
                        type="text"
                        name="name"
                        placeholder='Full Name'
                        required
                        className={`border-b py-1 px-1 w-full ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder='Email'
                        required
                        className={`border-b py-1 px-1 w-full ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
                      />
                      <textarea
                        name="message"
                        placeholder='Type your message here...'
                        rows={4}
                        required
                        className={`border-b py-1 px-1 w-full ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
                      />
                      <div className='flex flex-nowrap items-center gap-2'>
                        <button
                          type='submit'
                          className='py-2 px-4 rounded-md shadow-lg font-semibold cursor-pointer bg-blue-600 hover:bg-blue-500 duration-200 text-white'
                        >
                          Send
                        </button>
                        <button
                          type='button'
                          onClick={() => setShowModal(false)}
                          className={`${darkMode ? 'bg-white text-black hover:bg-gray-200 duration-200' : 'bg-black text-white hover:bg-[#5f5f60] duration-200'} px-4 py-2 rounded-md border cursor-pointer`}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <Toaster position="bottom-right" autoClose={3000} hideProgressBar={false} />
              </div>
            </div>
          )}



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
                  <div key={index} className={`card h-full border-2 hover:border-dotted border-gray-800 ${darkMode ? 'hover:border-white' : 'hover:border-black'} rounded-lg md:w-72`}>
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

          {/* Projects */}
          <div className='flex flex-col flex-nowrap gap-6 py-10'>
            <span className='text-3xl font-bold tracking-wide'>Projects</span>
            {project.map((item, index) => (
              <div key={index} className='border border-gray-200 flex flex-col md:flex-row rounded-xl '>
                <div className='md:w-4xl md:border-r border-gray-200 p-4 flex items-center'>
                  <img src={item.img} alt="" className='object-contain' />
                </div>
                <div className='flex flex-col p-4 gap-2'>
                  <span className='text-xl font-bold tracking-wide'>{item.title}</span>
                  <p className='text-[#a1a1aa]'>{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.skills.map((skills, i) => (
                      <div key={i} className={`rounded-xl px-3 py-1 text-sm ${darkMode ? 'bg-[#5f5f60]' : 'bg-gray-200'}`}>
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
                    <Link to={item.live} className={`${darkMode ? 'bg-white text-black hover:bg-gray-200 duration-200' : 'bg-black text-white hover:bg-[#5f5f60] duration-200'} px-4 py-2 my-2 rounded-md w-fit flex items-center flex-nowrap justify-center gap-2 transition-all duration-300`}><FiExternalLink />Live</Link>
                    <Link to={item.github} className={`${darkMode ? 'bg-white text-black hover:bg-gray-200 duration-200' : 'bg-black text-white hover:bg-[#5f5f60] duration-200'} px-4 py-2 my-2 rounded-md w-fit flex items-center flex-nowrap justify-center gap-2 transition-all duration-300`}><FiExternalLink />Github</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
