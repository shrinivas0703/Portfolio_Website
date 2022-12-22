import React, {useState, useEffect} from "react";

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
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="mb-4 md:mb-0">
          <a href="#about" className="text-2xl title-font mr-5 hover:text-white">
              Shrinivas Venkatesan
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            My Projects
          </a>
        </nav>
      </div>
    </header>
  );
}