import React, {useState, useEffect} from "react";
import pdf from "../assets/Resume Updated Summer 2023.pdf";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    const handleScroll = () => {
      setSticky(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll);
  })
  return (
    <header className={`${sticky ? "md:sticky bg-gray-800 w-full top-0" : "bg-gray-800 w-full top-0"}`}>
      <div className="container mx-auto flex flex-wrap p-8 flex-col md:flex-row items-center">
        <span className="mb-4 md:mb-0 text-center">
          <a href="#about" className="text-2xl text-center title-font md:mr-5 hover:text-white">
              Shrinivas Venkatesan
          </a>
        </span>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center gap-10 md:gap-0">
          <a href="#projects" className="md:ml-10 md:mr-10 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="md:mr-10 hover:text-white">
            Skills
          </a>
          <a href={pdf} target='_blank' rel='noopener noreferrer'> 
            Resume
          </a>
        </nav>
        <a href="#contact" className="hover:text-white items-center inline-flex mt-4 md:mt-0">
            Contact Me
        </a>
      </div>
    </header>
  );
}