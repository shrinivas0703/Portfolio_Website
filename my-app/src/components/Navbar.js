import React from "react";

export default function Navbar() {
  return (
    <header className="md:sticky top-0 z-10">
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