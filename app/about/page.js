"use client"
import React from 'react'
import ScrollText from '@/components/ScrollText'
import Typed from 'typed.js';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Vinay Kumar"],
            typeSpeed: 50,
            loop: true,
            backDelay: 4000,
            startDelay: 1000,
            fadeOut: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <ScrollText>
            <section className="flex flex-col lg:flex-row p-6 lg:p-10 items-center gap-10 text-center lg:text-left">
                <div className="w-full lg:w-1/2">
                    <div className="text-3xl font-semibold">Hello, Im</div>
                    <div className="text-5xl md:text-6xl mt-4 font-bold bg-gradient-to-r from-gray-300 to-pink-700 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_20px_rgba(170,100,255,0.8)]">
                        <span ref={el} />
                    </div>
                    <p className="mt-4 text-white text-lg md:text-xl max-w-md mx-auto lg:mx-0">I pursued B.Tech in C.S.E from M.D. University, Rohtak, Haryana.</p>
                    <p className="mt-4 text-white text-lg md:text-xl max-w-md mx-auto lg:mx-0">
                        I am a web developer and have worked on multiple projects, participated in hackathons, and freelanced on real-world projects.
                        <br /><br />
                        - Passed 10th class from K.V. Rohtak with 77% marks.
                        <br />
                        - Passed 12th class from S.B.M.P. School with 77% marks.
                        <br />
                        - Achieved 83 percentile in JEE Exam.
                    </p>
                    <div className='flex flex-col sm:flex-row justify-center lg:justify-start mt-6 gap-4'>
                        <Link href="./MyResume.pdf" download="Resume.pdf" target='_blank'>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-blue-900 group-hover:from-purple-900 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-900 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                    Download Resume
                                </span>
                            </button>
                        </Link>

                        <Link href="/projects">
                            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium rounded-lg bg-gradient-to-br from-purple-900 to-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-900 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent text-purple-400 hover:text-white">
                                    Projects
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image width={350} height={350} src="/me.jpg" alt='this is me' className="rounded-lg shadow-lg max-w-full h-auto" />
                </div>
            </section>
        </ScrollText>
    )
}

export default About;
