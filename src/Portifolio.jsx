// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./portifolio.css";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Contact from "./Contact"
import About from "./About";

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
                        <About/>
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
                        <Contact/>
                    )}
                </div>
            </div>

            <div className="right"></div>
        </div>
    );
}

export default Portfolio;
