import { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// eslint-disable-next-line react/prop-types
function NavBar({ activeSection, setActiveSection }) {
      const [showNav, setShowNav] = useState(true);
      useEffect(() => {
            const handleResize = () => {
                  if (window.innerWidth < 768) {
                        setShowNav(false);
                  } else {
                        setShowNav(true);
                  }
            };
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
      }, []);

      const showSection = (section, e) => {
            e.preventDefault();
            setActiveSection(section); 
      };

      const toggleNav = () => {
            setShowNav((prevShowNav) => !prevShowNav);
      };

      return (
            <>
                  <nav className="nav">
                        {showNav && (
                              <div className="con">
                                    <a onClick={(e) => showSection("about", e)} href="#about" className={activeSection === "about" ? "active" : ""}>About</a>
                                    <a onClick={(e) => showSection("projects", e)} href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</a>
                                    <a onClick={(e) => showSection("skills", e)} href="#skills" className={activeSection === "skills" ? "active" : ""}>Experience</a>
                                    <a onClick={(e) => showSection("education", e)} href="#education" className={activeSection === "education" ? "active" : ""}>Education</a>
                                    <a onClick={(e) => showSection("contact", e)} href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a>
                              </div>
                        )}
                        <button className="toggle-nav-btn" onClick={toggleNav}>
                              {showNav ? <CloseIcon /> : <MenuIcon />}
                        </button>
                  </nav>
            </>
      );
}

export default NavBar;
