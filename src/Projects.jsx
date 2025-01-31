import Cards from "./Cards";

function Projects() {
      return (
            <>
                  <section id="projects">
                        <div className="projects">
                              <div className="container mb-3">
                                    <div className="row m-1">
                                          <h2 className="about-head text-white font-bold text-4xl pl-5 mb-5">
                                                <span className="border-b-4 border-amber-400 rounded-sm">Machine learning Projects</span>
                                          </h2>
                                          <div className="col-md-6 mb-3">
                                                <a href="https://github.com/SatyaDurgaPaladugula/Email_detection" target="_blank" rel="noopener noreferrer">
                                                      <Cards hs="Spam Mail Detection" imgSrc="mailproject.jpg"
                                                            description="Developed an application which classfies the whether the given email is spam or ham  using machine learning ." />
                                                </a>
                                          </div>
                                          <div className="col-md-6 mb-3">
                                                <a href="https://github.com/SatyaDurgaPaladugula/Domain-Based-Internship" target="_blank" rel="noopener noreferrer">
                                                      <Cards hs="Domain Based Internship" imgSrc="domain.png"
                                                            description="Created a responsive website where we upload a resume based on that it displays a domain and available internships for that domain using machine learning." />
                                                </a>
                                          </div>
                                          <div className="col-md-6 mb-3">
                                                <a href="https://github.com/SatyaDurgaPaladugula/Image-Segmentation" target="_blank" rel="noopener noreferrer">
                                                      <Cards hs="Image Segmentation" imgSrc="imagesegmentation.png"
                                                            description="Built an application using computer vision it classfies the images into groups." />
                                                </a>
                                          </div>
                                    </div>
                                    <div className="row m-1">
                                          <h2 className="about-head text-white font-bold text-3xl pl-5 mb-5">
                                                <span className="border-b-4 border-amber-400 rounded-sm">Minor Projects</span>
                                          </h2>
                                          <div className="col-md-6 mb-3">
                                                <a href="https://github.com/SatyaDurgaPaladugula/Job-application" target="_blank" rel="noopener noreferrer">
                                                      <Cards hs="Job Application" imgSrc="jobapp.png"
                                                            description='The "Job Application" is an interactive website where we fill all details required to the job.' />
                                                </a>
                                          
                                          <div className="col-md-6 mb-3">
                                                <a href="https://github.com/SatyaDurgaPaladugula/NETFLIX" target="_blank" rel="noopener noreferrer">
                                                      <Cards hs="Netflix Clone" imgSrc="Screenshot 2024-10-28 125541.png"
                                                            description="The Netflix Clone is a basic webpage that replicates Netflix's layout, including sections for features like unlimited streaming, device compatibility, and offline downloads, along with a subscription prompt and FAQ." />
                                                </a>
                                          </div>
                                    </div>
                        </div>
                        </div>
                        </div>
                  </section></>
      );
}

export default Projects;
