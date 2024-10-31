// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaJava, FaNodeJs, FaBrain, FaPython, FaJsSquare, FaHtml5, FaCss3 } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { SiReact, SiExpress, SiFlask, SiBootstrap, SiTailwindcss, SiMongodb, SiMysql, SiGit, SiGithub, SiRedux } from "react-icons/si";

function Skills() {
      return (
            <section id="skills" className="mx-5">
                  <h2 className="about-head text-white font-bold text-4xl pl-5 mb-5">
                        <span className="border-b-4 border-amber-400 rounded-sm">Skills</span>
                  </h2>
                  <h2 className="about-head text-white font-semibold text-2xl pl-5 mb-5">
                        <span className="border-b-2 border-amber-400">Certifications</span>
                  </h2>
                  <div className="container mb-3">
                        <div className="row">
                              <div className="col-md-6 mb-3">
                                    <div className="card d-flex font-medium align-items-center text-white p-3">
                                          <h2 className="text-lg mb-2">Machine learning</h2>
                                          <p className="text-gray-300 align-items-center">IIIT Hyderabad</p>
                                    </div>
                              </div>
                              <div className="col-md-6 mb-3">
                                    <div className="card d-flex font-medium align-items-center text-white p-3">
                                          <h2 className="text-lg mb-2">Full Stack Web Development</h2>
                                          <p className="text-gray-300 align-items-center">Apna College</p>
                                    </div>
                              </div>
                              <div className="col-md-6 mb-3">
                                    <div className="card d-flex font-medium align-items-center text-white p-3">
                                          <h2 className="text-lg mb-2">MongoDB</h2>
                                          <p className="text-gray-300 align-items-center">Greeks for Greeks</p>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* Languages */}
                  <h2 className="about-head text-white font-semibold text-2xl pl-5 mb-5">
                        <span className="border-b-2 border-amber-400">Languages</span>
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 items-center justify-center">
                        <div className="icons flex flex-col items-center text-center">
                              <FaJava size={40} color="#007396" />
                              <h3 className="text-lg md:text-xl text-white mt-2">Java</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center">
                              <FaPython size={40} color="#3776AB" />
                              <h3 className="text-lg md:text-xl text-white mt-2">Python</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center">
                              <FaJsSquare size={40} color="#F7DF1E" />
                              <h3 className="text-lg md:text-xl text-white mt-2">JavaScript</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center">
                              <TbSql size={40} color="#003B57" />
                              <h3 className="text-lg md:text-xl text-white mt-2">SQL</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center">
                              <FaHtml5 size={40} color="#E34F26" />
                              <h3 className="text-lg md:text-xl text-white mt-2">HTML5</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center">
                              <FaCss3 size={40} color="#1572B6" />
                              <h3 className="text-lg md:text-xl text-white mt-2">CSS</h3>
                        </div>
                  </div>

                  {/* Frameworks */}
                  <h2 className="about-head text-white font-semibold text-2xl pl-5 mb-5 mt-10">
                        <span className="border-b-2 border-amber-400">Frameworks</span>
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 items-center justify-center">
                        <div className="icons flex flex-col items-center text-center">
                              <SiReact size={40} color="#61DBFB" />
                              <h3 className="text-lg md:text-xl text-white mt-2">React.js</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center">
                              <FaNodeJs size={40} color="#68A063" />
                              <h3 className="text-lg md:text-xl text-white mt-2">Node.js</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center">
                              <SiExpress size={40} color="#000000" />
                              <h3 className="text-lg md:text-xl text-white mt-2">Express.js</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center">
                              <SiFlask size={40} color="#000000" />
                              <h3 className="text-lg md:text-xl text-white mt-2">Flask</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center">
                              <SiBootstrap size={40} color="#563D7C" />
                              <h3 className="text-lg md:text-xl text-white mt-2">Bootstrap</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center">
                              <SiTailwindcss size={40} color="#38B2AC" />
                              <h3 className="text-lg md:text-xl text-white mt-2">Tailwind CSS</h3>
                        </div>
                  </div>

                  {/* Tools */}
                  <h2 className="about-head text-white font-semibold text-2xl pl-5 mb-5 mt-10">
                        <span className="border-b-2 border-amber-400">Tools</span>
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 items-center justify-center">
                        <div className="icons flex flex-col items-center text-center">
                              <SiMongodb size={40} color="#47A248" />
                              <h3 className="text-lg md:text-xl text-white mt-2">MongoDB</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center">
                              <SiMysql size={40} color="#4479A1" />
                              <h3 className="text-lg md:text-xl text-white mt-2">MySQL</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center">
                              <SiGit size={40} color="#F05032" />
                              <h3 className="text-lg md:text-xl text-white mt-2">Git</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center">
                              <SiGithub size={40} color="#181717" />
                              <h3 className="text-lg md:text-xl text-white mt-2">GitHub</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center">
                              <SiRedux size={40} color="#764ABC" />
                              <h3 className="text-lg md:text-xl text-white mt-2">Redux</h3>
                        </div>
                        <div className="icons flex flex-col items-center text-center">
                              <VscVscode size={40} color="#007ACC" />
                              <h3 className="text-lg md:text-xl text-white mt-2">VS Code</h3>
                        </div>
                  </div>

                  {/* Technologies */}
                  <h2 className="about-head text-white font-semibold text-2xl pl-5 mb-5 mt-10">
                        <span className="border-b-2 border-amber-400">Technologies</span>
                  </h2>
                  <div className="flex items-center ml-5">
                        <div className="icons flex flex-col items-center text-center">
                              <FaBrain size={40} color="#4B8BBE" />
                              <h3 className="text-lg md:text-xl text-white mt-2">Machine Learning</h3>
                        </div>
                  </div>
            </section>
      );
}

export default Skills;
