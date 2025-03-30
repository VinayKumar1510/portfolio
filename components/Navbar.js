import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between px-7 m-4 items-center bg'>
      <Link href="/"><div className='text-2xl font-bold underline underline-offset-8'>Vinay <span className="text-blue-400 font-extrabold drop-shadow-[0_0_10px_rgba(0,150,255,0.8)]">
        Kumar
      </span>
      </div></Link>
      <ul className='flex items-center gap-8 text-xl'>
        <Link href="/"><li className='hover:text-blue-500 transition-all delay-100 ease-in'>Home</li></Link>
        <Link href="/about"><li className='hover:text-blue-500 transition-all delay-100 ease-in'>About</li></Link>
        <Link href="/projects"><li className='hover:text-blue-500 transition-all delay-100 ease-in'>Projects</li></Link>
        <Link href="/contact"><li className='hover:text-blue-500 transition-all delay-100 ease-in'>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar