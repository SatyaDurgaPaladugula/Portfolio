// About.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
const About = () => {
      return (
            <section id="about">
                  <div>
                        <h2 className="about-head text-white font-bold text-3xl pl-5">
                              <span className="border-b-4 border-amber-400 rounded-sm">
                                    About Me
                              </span>
                        </h2>
                        <p className="about-des text-gray-300 p-5">
                        I am a B-Tech student with a strong passion for technology, specializing in Python and machine learning. With a focus on building practical, user-friendly applications, I enjoy leveraging my skills to create impactful projects. My knowledge extends across Python programming, web frameworks, and databases, allowing me to work on solutions that are both functional and efficient.
                        </p>
                  </div>
                  <h2 className="about-head text-white font-semibold text-2xl text-center pl-5 mb-3">
                              <span className="border-b-2 border-amber-400">Volunteer Experience</span>
                  </h2>
                  <div className="container mb-5">
                        <div className="row">
                              <div className="col-md-6">
                                    <div className="card d-flex font-medium align-items-center p-4 m-3">
                                          <h1 className="text-white text-2xl pl-5">Student Mentor</h1>
                                          <p className="text-gray-300">Guided juniors in machine learning topics and mentored them on implementing machine learning algorithms for
                                          hackathon projects.</p>
                                    </div>
                              </div>
                              <div className="col-md-6">
                                    <div className="card d-flex font-medium align-items-center p-4 m-3">
                                          <h1 className="text-white text-2xl pl-5">Team Leader</h1>
                                          <p className="text-gray-300">
                                          As a team leader, I foster collaboration, communication, accountability, and support for growth.</p>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="download mb-5">
                        <a href="PALADUGULA-SATYA-DURGA-Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">Resume<DownloadIcon /></a>
                  </div>
            </section>
      );
};

export default About;
