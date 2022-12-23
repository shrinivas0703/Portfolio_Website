import React from "react";
import pic from "../assets/IMG_5395.JPG";

export default function About() {
    
    return (
        <section id="about" className="">
            <br className=""></br>
            <div className="container mx-auto flex px-3 py-20 md:flex-row flex-col items-top">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-25 items-center text-center">
                    <br className="sm:hidden md:block"></br>
                    <br className="sm:hidden md:block"></br>
                    <br className="sm:hidden md:block"></br>
                    <br className="sm:hidden md:block"></br>
                    <h1 className="title-font text-4xl font-medium text-gray-300">
                        Hey! I'm Shrinivas!
                    </h1>
                    <a className="mt-3">Sophomore majoring in CS and Data Science at Purdue.</a>
                    <div className="flex flex-row items-center">
                    <button className="border border-gray-700 rounded-full bg-gray-600 mt-7 text-white px-5 py-2 hover:border-gray-400 sm:hidden md:block mr-5" onClick={event =>  window.location.href="#projects"}>Check out my Past Work!</button>
                    <button className="border border-gray-700 rounded-full bg-gray-600 mt-7 text-white px-5 py-2 hover:border-gray-400 sm:hidden md:block mr-5" onClick={event =>  window.location.href="#skills"}>My Skills!</button>
                    <button className="rounded-full bg-green-700 mt-7 text-white px-5 py-2 hover:bg-green-600 sm:hidden md:block" onClick={event =>  window.location.href="#contact"}>Let's Get in Touch!</button>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img src={pic} alt="Me" className="image mt-4"/>
                    <div className="text-center italic mx-auto mt-4">That's Me!</div>
                </div>
            </div>
        </section>
    );
}