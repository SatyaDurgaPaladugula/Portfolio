// eslint-disable-next-line no-unused-vars
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

function Education() {
      return (
            <section id="education">
                  <section className="timeline mt-5">
                        <div className="title-wrapper about-head text-white font-bold text-3xl">
                              <div className="icon-box">
                                    <SchoolIcon />
                              </div>
                              <h3 className="h3 border-b-4 border-amber-400 rounded-sm">
                                    Education
                              </h3>
                        </div>
                  </section>
                  <ol className="timeline-list">
                        <li className="timeline-item">
                              <h1 className="about-head text-white font-semibold text-2xl">B-Tech<span className="text-xl">(Kakinada Institute of Technology and Engineering for Women’s)</span></h1>
                              <h4 className="h4 timeline-item-title">
                                    Artificial Intelligence and Machine Learning
                              </h4>
                              <span>2021 — 2025</span>
                              <p className="text-base font-medium">
                                    Currently pursuing a degree in AI and ML, focusing on machine learning algorithms, data analysis,
                                    and artificial intelligence applications. Engaged in projects and coursework related to deep learning,
                                    computer vision, and natural language processing to develop practical skills in AI-driven solutions.
                              </p>
                        </li>
                        <li className="timeline-item">
                              <h1 className="about-head text-white font-semibold text-2xl">Intermediate<span className="text-xl">(Sri Chaitanya Junior College)</span></h1>
                              <h4 className="h4 timeline-item-title">MPC</h4>
                              <span>2019 — 2021</span>
                              <p className="text-base font-medium">
                                    Completed high school with a focus on mathematics, physics, and chemistry, developing a strong foundation
                                    in analytical thinking, problem-solving, and scientific principles, which have been instrumental in pursuing
                                    further education in technology.
                              </p>
                        </li>
                        <li className="timeline-item">
                              <h1 className="about-head text-white font-semibold text-2xl">Schooling<span className="text-xl">(Siddhartha English Medium High School)</span></h1>
                              <span>2007 — 2019</span>
                              <p className="text-base font-medium">
                                    Primary and secondary education completed with a broad exposure to various subjects, fostering a curiosity
                                    for science and technology and building fundamental skills in communication, teamwork, and critical thinking.
                              </p>
                        </li>
                  </ol>
                  <section className="timeline mt-5">
                        <div className="title-wrapper about-head text-white font-bold text-3xl">
                              <div className="icon-box">
                                    
                                    <ImportContactsIcon />
                              </div>
                              <h3 className="h3 border-b-4 border-amber-400 rounded-sm">
                                    Experience
                              </h3>
                        </div>
                  </section>
                  <ol className="timeline-list mb-4">
                        <li className="timeline-item">
                              <h1 className="about-head text-white font-semibold text-2xl">
                                    Backend Developer<span className="text-xl">(IIIT Hyderabad)</span>
                              </h1>
                              <span>08/2023 — 07/2024</span>
                              <p className="text-base font-medium">
                                    Developed a To-Do List application using Flask with efficient task management through CRUD operations and RESTful APIs. Enhanced the user interface with responsive design using HTML, CSS, and Bootstrap, ensuring a seamless experience across devices.
                              </p>
                        </li>
                        <li className="timeline-item">
                              <h1 className="about-head text-white font-semibold text-2xl">
                                    Intern <span className="text-xl">(Bharath Internship)</span>
                              </h1>
                              <span>06/2024 — 07/2024</span>
                              <p className="text-base font-medium">
                                    Completed a 4-week virtual internship specializing in Python programming, where I exhibited advanced technical proficiency across diverse tasks and projects. Consistently commended for exceptional performance and significant contributions throughout the program.
                              </p>
                        </li>
                  </ol>
            </section>
      );
}

export default Education;
