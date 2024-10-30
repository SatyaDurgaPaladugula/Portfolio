// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./portifolio.css";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";

function Portfolio() {
    const [activeSection, setActiveSection] = useState("about");
    return (
        <div className="main">
            <div className="left"></div> <SideBar />{" "}
            <div className="bodys">
                <NavBar
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
                <div>
                    {" "}
                    {activeSection === "about" && <About />}
                    {activeSection === "projects" && <Projects />}
                    {activeSection === "skills" && (
                        <section id="skills">
                            <h2 className="about-head text-white font-bold text-3xl pl-5 mb-5">
                                <span className="border-b-4 border-amber-400 rounded-sm">
                                    Skills
                                </span>
                            </h2>
                        </section>
                    )}
                    {activeSection === "education" && <Education/>}
                    {activeSection === "contact" && <Contact />}
                </div>
            </div>
            <div className="right"></div>
        </div>
    );
}

export default Portfolio;
