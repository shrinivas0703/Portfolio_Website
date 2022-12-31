import React, {} from "react";
import websitePic from "../assets/website.png";
import expensePic from "../assets/expense.png";
import forkPic from "../assets/fork.png";
import matrixPic from "../assets/matrix.png";
import purduePic from "../assets/purdue.jpg";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import YoutubeVid from "./YouTubeVid";

function Projects() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };    
    return (
        <section id="projects">
            <br className="sm:hidden md:block"></br>
            <br className="sm:hidden md:block"></br>
            <div className="flex flex-col items-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
                <div className="mt-5 text-gray-300 text-3xl text-center mb-5">My Projects</div>
                <div className="flex flex-col md:flex-row mt-5 md:space-x-20 items-center">
                    <div className="items-top mb-6 md:mb-0">
                    <Popup trigger={<button className="shadow hover:shadow-2xl">
                            <img src={websitePic} className="projectPic border border-black border-2" alt="portfolio website"></img>
                            </button>} modal lockScroll>
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header text-xl">My Portfolio Website</div>
                        <div className="content text-center items-center mt-5">
                        {' '}
                        My Portfolio Website built using ReactJS and hosted using GitHub Pages that showcases my projects and skills.
                        <br></br>
                        <div>
                            <img src={websitePic} className="hidden md:block border border-black border-1 mt-5" alt="portfolio website"></img>
                        </div>
                        <button className="rounded-full bg-green-700 px-5 py-2 hover:bg-green-600 text-white mt-5"
                        onClick={() => openInNewTab("https://github.com/shrinivas0703/Portfolio_Website")}>
                            View this project on GitHub
                        </button>
                        </div>
                    </div>
                    )}
                    </Popup> 
                        <div className="text-xl text-center mt-4"> My Personal Website!</div>
                    </div>
                    <div className="items-top mb-6 md:mb-0 items-center">
                    <Popup trigger={<button className="shadow hover:shadow-2xl items-center">
                                <img src={expensePic} className="items-center projectPic border border-black border-2" alt="expenses app"></img>
                            </button>} modal lockScroll>
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header text-xl"> Expenses App</div>
                        <div className="content text-center items-center mt-5">
                        {' '}
                        An Expenses App built using ReactJS that allows a user to enter their past expenses and view
                        a monthly and yearly breakdown of their expenses using beautiful bar charts.
                        <br></br>
                        <div className="items-center">
                            <img src={expensePic} className="hidden md:block border border-black border-1 mt-5" alt="expenses app"></img>
                        </div>
                        <button className="rounded-full bg-green-700 px-5 py-2 hover:bg-green-600 text-white mt-5"
                        onClick={() => openInNewTab("https://github.com/shrinivas0703/react-udemy/tree/master/ExpensesApp")}>
                            View this project on GitHub
                        </button>
                        </div>
                    </div>
                    )}
                    </Popup>    
                    <div className="text-xl text-center mt-4"> Expenses App!</div>
                    </div>
                    <div className="items-top mb-6 md:mb-0">
                    <Popup trigger={<button className="shadow hover:shadow-2xl bg-white">
                            <img src={forkPic} className="projectPic border border-black border-2" alt="meal finder app"></img>
                        </button>} modal lockScroll>
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header text-xl"> Purdue Meal Finder App</div>
                        <div className="content text-center items-center mt-5">
                        {' '}
                        A Purdue Meal Finder App built using Flutter and Dart that enables the user to view the dining hall that
                        had the most meal options for them based on their dietary restrictions.
                        <br></br>
                        <div className="mt-5">
                            <YoutubeVid embedId="loAcMliAdSE"/>
                        </div>
                        <button className="rounded-full bg-green-700 px-5 py-2 hover:bg-green-600 text-white mt-5"
                        onClick={() => openInNewTab("https://github.com/mihirakk/MealFinder")}>
                            View this project on GitHub
                        </button>
                        </div>
                    </div>
                    )}
                    </Popup>
                    <div className="text-xl text-center mt-4"> Purdue Meal Finder App!</div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mt-10 items-center md:space-x-20">
                    <div className="items-top mb-6 md:mb-0">
                    <Popup trigger={<button className="shadow hover:shadow-2xl bg-white">
                            <img src={purduePic} className="projectPic border border-black border-2" alt="quiz management tool"></img>
                        </button>} modal lockScroll>
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header text-xl">Quiz Management Tool</div>
                        <div className="content text-center items-center mt-5">
                        {' '}
                        Collaborated with three other CS 180 students to build a quiz management tool using Java GUIs 
                        that incorporated real-time updates and data persistence using networking and concurrency and allowed
                        several teachers/students to login, create/take quizzes, and view student reports.
                        <br></br>
                        <div>
                            <img src={purduePic} className="hidden md:block border border-black border-1 mt-5 mb-7" alt="expenses app"></img>
                        </div>
                        </div>
                    </div>
                    )}
                    </Popup> 
                        <div className="text-xl text-center mt-4"> Quiz Management Tool!</div>
                    </div>
                    <div className="items-center mb-6 md:mb-0">
                    <Popup trigger={<button className="shadow hover:shadow-2xl bg-white">
                            <img src={matrixPic} className="projectPic border border-black border-2" alt="matrix mathematics"></img>
                        </button>} modal lockScroll>
                    {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header text-xl">Matrix Mathematics</div>
                        <div className="content text-center items-center mt-5">
                        {' '}
                        Designed a Python GUI application that enables users to perform any mathematical operation on two inputted
                        matrices of any dimension.
                        <br></br>
                        <div className="self-center mb-5">
                            <img src={matrixPic} className="hidden md:block popUpPic border border-black border-1 mt-5 mx-auto" alt="matrix mathematics"></img>
                        </div>
                        </div>
                    </div>
                    )}
                    </Popup>
                    <div className="text-xl text-center mt-4"> Matrix Mathematics!</div>
                    </div>
                </div>
            </div>
    </section>
    );
}
export default Projects;
