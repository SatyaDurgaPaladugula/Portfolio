// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./portifolio.css";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import LanguageIcon from "@mui/icons-material/Language";

function Portfolio() {
    const [activeSection, setActiveSection] = useState("about");
    return (
        <div className="main">
            <div className="left"></div>
            <SideBar />
            <div className="bodys">
                <NavBar
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
                <div>
                    {activeSection === "about" && (
                        <section id="about">
                            <div>
                                <h2 className="about-head text-white font-bold text-3xl pl-5">
                                    <span className="border-b-4 border-amber-400 rounded-sm">
                                        About Me
                                    </span>
                                </h2>
                                <p className="about-des text-gray-300 p-5">
                                    Hello! I`m Krishna Sri Tarun, hailing from the beautiful
                                    village of Rajamahendravaram, Andhra Pradesh. I am currently
                                    pursuing my Bachelor of Technology at the Kakinada Institute
                                    of Engineering and Technology. Growing up in a close-knit
                                    community, I developed a passion for problem-solving and
                                    technology, which led me to explore the world of web
                                    development and machine learning. Along with my technical
                                    skills, I take pride in my strong work ethic and commitment to
                                    continuous learning. When I`m not coding, you can find me
                                    exploring new technologies, mentoring junior developers, or
                                    contributing to community projects. I enjoy collaborating with
                                    others to bring creative ideas to life and create meaningful
                                    impact through technology.
                                </p>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card d-flex align-items-center p-3">
                                            <div className="container">
                                                <div className="row align-items-center"> 
                                                    <div className="col-md-1">
                                                        <LanguageIcon className="card-icon" />
                                                    </div>
                                                    <div className="col-md-11">
                                                        <div className="card-content">
                                                            <h3>Software Developer</h3>
                                                            <p>Focused on developing robust applications and efficient code for various platforms.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card d-flex align-items-center p-3">
                                            <div className="container">
                                                <div className="row align-items-center"> 
                                                    <div className="col-md-1">
                                                        <LanguageIcon className="card-icon" />
                                                    </div>
                                                    <div className="col-md-11">
                                                        <div className="card-content">
                                                            <h3>Web Developer</h3>
                                                            <p>Specializing in building responsive and user-friendly websites using modern technologies.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                    {activeSection === "projects" && (
                        <section id="projects">
                            <h2>Projects</h2>
                            <p>Details about my projects...</p>
                        </section>
                    )}
                    {activeSection === "skills" && (
                        <section id="skills">
                            <h2>Skills</h2>
                            <p>Details about my skills...</p>
                        </section>
                    )}
                    {activeSection === "education" && (
                        <section id="education">
                            <h2>Education</h2>
                            <p>Details about my education...</p>
                        </section>
                    )}
                    {activeSection === "contact" && (
                        <section id="contact">
                            <h2>Contact</h2>
                            <p>Details about how to contact me...</p>
                        </section>
                    )}
                </div>
            </div>

            <div className="right"></div>
        </div>
    );
}

export default Portfolio;
