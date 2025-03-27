'use client'
import { useState, useEffect} from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItem = [

      {name: "Home", href: "/"},
      {name: "About", href: "/about"},
      {name: "Works", href: "/works"},

  ]

  return (
    <>
      <nav className="flex items-center justify-between max-w-[1170px] mx-auto w-full py-5 px-6">
        <Link href="/">
          <span className="text-[20px] text-zinc-300">Ayşenur Tatlı</span>
        </Link>
        <div className="text-[15px] gap-[27px] hidden md:flex text-zinc-100 items-center">
         {navItem.map((item, index) => (
          <Link key={index} href={item.href} className="hover:text-zinc-400 duration-200">{item.name}</Link>
         ))}
          <Link href="/contact" className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-400 bg-clip-text text-transparent animate-gradient-move duration-200 hover:text-zinc-400 ">Contact</Link>
        </div>
        <div className="block md:hidden">
          <button onClick={() => setMenuOpen(true)} className="p-2">
            <MdMenu size={28} className="text-white" />
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[250px] bg-black text-zinc-200 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button 
          onClick={() => setMenuOpen(false)} 
          className="absolute top-6 right-6 h-12 w-12 flex items-center justify-center"
        >
          <MdClose size={28} />
        </button>
        <div className="flex flex-col items-start space-y-4 pl-6 pt-12">
          <Link href="/" className="text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="text-lg" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/works" className="text-lg" onClick={() => setMenuOpen(false)}>Works</Link>
          <Link href="/contact" className="text-lg" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </>
  );
}
