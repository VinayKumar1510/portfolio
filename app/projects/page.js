"use client";
import React, { useState } from "react";
import ScrollText from "@/components/ScrollText";
import { motion } from "framer-motion"; 
import Link from 'next/link';

const projects = [
    { src: "/chatapp.png", text: "A real-time chat application with WebSocket integration.", link: "https://chat-app-seven-red.vercel.app/" },
    { src: "/nopoverty.png", text: "A platform aimed at promoting sustainable development goals.", link: "https://no-poverty-vma5.vercel.app/" },
    { src: "/vinayblog.png", text: "A personal blogging platform with Markdown support.", link: "https://vinay-blogs.vercel.app/" },
    { src: "/notesapp.png", text: "Create new notes and record your voice easily with this intuitive app.", link: "https://bitnotes-iota.vercel.app/" }
];

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    return (
        <ScrollText>
            {/* Header Section */}
            <div className="flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-300 to-pink-400 bg-clip-text text-transparent animate-gradient drop-shadow-md">
                    Portfolio Showcase
                </h1>
                <p className="text-lg md:text-xl w-full max-w-2xl text-white mt-4 drop-shadow-sm">
                    Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
                </p>
            </div>

            {/* Carousel Section */}
            <div id="controls-carousel" className="relative w-full mt-5 flex flex-col items-center px-4">
                {/* Image Container */}
                <div className="relative w-full max-w-2xl flex justify-center items-center">
                    <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
                        <motion.img
                            key={currentIndex} // Ensures a re-render when index changes
                            src={projects[currentIndex].src}
                            className="w-full max-w-md object-contain rounded-lg shadow-lg"
                            alt="Project"
                            initial={{ opacity: 0, x: 50 }} // Start position (off-screen)
                            animate={{ opacity: 1, x: 0 }} // Animate to center
                            exit={{ opacity: 0, x: -50 }} // Exit animation
                            transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
                        />
                    </a>
                </div>

                {/* Project Description */}
                <motion.div
                    key={currentIndex}
                    className="text-center text-md md:text-lg text-gray-300 mt-3 px-4"
                    initial={{ opacity: 0, y: 20 }} // Start animation
                    animate={{ opacity: 1, y: 0 }} // Fade-in effect
                    exit={{ opacity: 0, y: -20 }} // Exit animation
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {projects[currentIndex].text}
                </motion.div>

                {/* Navigation Buttons */}
                <div className="w-full flex justify-between items-center max-w-2xl mt-4">
                    <button
                        type="button"
                        className="bg-gray-700 hover:bg-gray-800 text-white p-3 md:p-4 rounded-full shadow-lg transition duration-300"
                        onClick={prevSlide}
                    >
                        ◀
                    </button>
                    <button
                        type="button"
                        className="bg-gray-700 hover:bg-gray-800 text-white p-3 md:p-4 rounded-full shadow-lg transition duration-300"
                        onClick={nextSlide}
                    >
                        ▶
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center">

                <Link href="/certifications">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-blue-900 group-hover:from-purple-900 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-900 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Certifications
              </span>
            </button>
                </Link>
            </div>

        </ScrollText>
    );
};

export default Projects;
