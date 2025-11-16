"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function checkAdmin() {
      try {
        const response = await fetch("/api/check-admin");
        const data = await response.json();
        setIsAdmin(data.isAdmin);
      } catch (error) {
        console.error("Error checking admin status:", error);
      }
    }
    checkAdmin();
  }, []);

  const navItem = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    ,
  ];

  return (
    <>
      <nav className="flex items-center justify-between max-w-[1170px] mx-auto w-full py-5 px-6">
        <Link href="/">
          <span className="text-[20px] text-zinc-300">Ayşenur Tatlı</span>
        </Link>
        <div className="text-[15px] gap-[27px] hidden md:flex text-zinc-100 items-center">
          {navItem.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-zinc-200 relative font-mono hover:bg-gradient-to-r hover:from-red-200 hover:via-blue-300 hover:to-yellow-200 bg-400 hover:bg-clip-text hover:text-transparent hover:animate-gradient-move "
            >
              {item.name}
            </Link>
          ))}
          {isAdmin && (
            <Link
              href="/add-project"
              className="font-mono text-zinc-100 rounded-lg  hover:bg-gradient-to-r hover:from-red-200 hover:via-blue-300 hover:to-yellow-200 bg-400 hover:bg-clip-text hover:text-transparent hover:animate-gradient-move "
            >
              Add Project
            </Link>
          )}

          <Link
            href="/contact"
            className="font-mono text-zinc-100 border border-white/20 rounded-lg p-2 hover:bg-gradient-to-r hover:from-red-200 hover:via-blue-300 hover:to-yellow-200 bg-400 hover:bg-clip-text hover:text-transparent hover:animate-gradient-move "
          >
            Contact
          </Link>
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
        className={`fixed top-0 right-0 h-full w-[250px]  bg-[#111117] text-zinc-200 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
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
          {navItem.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono"
            >
              {item.name}
            </Link>
          ))}
          <Link href={"/contact"} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
