"use client";
import Image from "next/image";
import Typed from "typed.js";
import React from "react";
import Link from "next/link";
import ScrollText from "@/components/ScrollText";


export default function Home() {
  const el1 = React.useRef(null);
  const el2 = React.useRef(null);

  React.useEffect(() => {
    const typed1 = new Typed(el1.current, {
      strings: ["Full Stack"],
      typeSpeed: 70,
      backDelay: 4000,
      startDelay: 1000,
      loop: true,
      fadeOut: true,
    });

    const typed2 = new Typed(el2.current, {
      strings: ["Web Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 4000,
      startDelay: 1000,
      loop: true,
      fadeOut: true,
    });

    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  }, []);

  const socialLinks = [
    { href: "https://github.com/VinayKumar1510", img: "/github.png" },
    { href: "https://www.linkedin.com/in/vinay-kumar-419b09292/", img: "/linkedin.png" },
    { href: "https://www.instagram.com/vinay.kumar_98/", img: "/instagram.png" }
  ];

  return (
    <>
      <ScrollText>
        <section className="flex flex-col lg:flex-row p-6 lg:p-10 items-center gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="font-semibold p-5">
              <p className="text-4xl text-white font-bold drop-shadow-[0_0_10px_rgba(0,150,255,0.8)]">I&apos;m</p>
              <p className="text-5xl md:text-6xl mt-4 font-bold bg-gradient-to-r from-gray-300 to-pink-600 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_20px_rgba(170,100,255,0.8)]">
                <span ref={el1} />
              </p>
              <p className="text-5xl md:text-6xl mt-4 font-bold bg-gradient-to-r from-gray-300 to-pink-700 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_20px_rgba(170,100,255,0.8)]">
                <span ref={el2} />
              </p>
              <p className="mt-6 text-white max-w-lg mx-auto lg:mx-0">Hey! Everyone I am Vinay Kumar, A full stack web developer with amazing skills and outstanding performance. Generally, I use:</p>

              <div className="mt-3 flex flex-wrap justify-center lg:justify-start gap-3">
                {["MongoDB", "ExpressJs", "NextJs", "NodeJs"].map((tech) => (
                  <button
                    key={tech}
                    type="button"
                    className="text-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all delay-100 ease-in"
                  >
                    {tech}
                  </button>
                ))}
              </div>

              <div className="text-white mt-6">My Social Profiles:</div>
              <div className="mt-4 flex justify-center lg:justify-start gap-6">
                {socialLinks.map((social) => (
                  <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer">
                    <Image src={social.img} alt="Social Icon" height={40} width={40} className="invert" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              height={400}
              width={600}
              src="/website.webp"
              alt="this is image"
              className="transition-all delay-100 border-none outline-none hover:shadow-[0px_0px_40px_14px_#2a4365] max-w-full h-auto"
            />
          </div>
        </section>

        <div className="flex justify-center mt-6">
          <Link href="/about">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-900 to-blue-900 group-hover:from-purple-900 group-hover:to-blue-900 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-900 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                About Me
              </span>
            </button>
          </Link>
        </div>
      </ScrollText>
    </>
  );
}