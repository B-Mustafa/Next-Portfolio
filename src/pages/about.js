// pages/about.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import BaseLayout from '@/components/BaseLayout';
import { FaCalendar , FaGithub , FaPatreon , FaYoutube , FaDiscord , FaInstagram } from 'react-icons/fa';
import Footer from '@/components/Footer';
const About = () => {
  useEffect(() => {
    gsap.from('.html', { x: -50, opacity: 1, duration: 0.8, delay: 1 });
    gsap.from('.css', { x: -50, opacity: 1, duration: 0.8, delay: 1.2 });
    gsap.from('.js', { x: -50, opacity: 1, duration: 0.8, delay: 1.4 });;
  }, []);

  return (
    <main>
      <BaseLayout>
      <section className="about section " id="about">
                <div className="container">
                    <div className="row">
                        <div className="title padd-15">
                            <h2> About Me </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-content padd-15">
                            <div className="row">
                                <div className="about-text padd-15">
                                    <h3>I am Mustafa a <span>Web developer</span></h3>
                                    <p> Hello there! I&apos;m a first-year Computer Engineering student who also works part-time as a video editor and dabbles in web development. I&apos;m always eager to learn new things and I&apos;ve recently started diving into application development. Currently I&apos;m familiar with a few programming languages.
                                        HTML , CSS , JAVASCRIPT , PHP AND C Languages.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="personal-info padd-15">
                                <div className="row">
                                    <div className="info-item padd-15">
                                        <p>Birthday:<span>2 December 2003</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Age:<span>19</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Website:<span>mustafadev.me</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>E-mail:<span>bhikhapurmustafa@gmail.com</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p>Phone:<span>(+91)8160123053</span></p>
                                    </div>
                                    <div className="info-item padd-15">
                                        <p> 🟢 Available for Freelancing</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="buttons padd-15">

                                    </div>
                                </div>
                            </div>
                            <div className="skills padd-15">
                          <div className="row">
                            <div className="skill-item padd-15">
                              <h5>CSS</h5>
                              <div className="progress">
                                <div className="progress-in" style={{ width: '76%' }}></div>
                                <div className="skill-percentage">76%</div>
                              </div>
                            </div>
                            <div className="skill-item padd-15">
                              <h5>HTML</h5>
                              <div className="progress">
                                <div className="progress-in" style={{ width: '80%' }}></div>
                                <div className="skill-percentage">80%</div>
                              </div>
                            </div>
                            <div className="skill-item padd-15">
                              <h5>JavaScript</h5>
                              <div className="progress">
                                <div className="progress-in" style={{ width: '50%' }}></div>
                                <div className="skill-percentage">50%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                            <div className="education padd-15">
                                <h3 className="title">Education</h3>
                                <div className="row">
                                    <div className="timeline-box padd-15">
                                        <div className="timeline shadow-dark">
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <FaCalendar className="icon"/>2022-Ongoing
                                                </h3>
                                                <p className="timeline-text">I am a currently pursuing Computer Engineering. Studying
                                                    in first year of college and having a little experience of 1 year.&apos;</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="experience padd-15">
                                <h3 className="title">Experience</h3>
                                <div className="row">
                                    <div className="timeline-box padd-15">
                                        <div className="timeline shadow-dark">
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date">
                                                    <FaCalendar className="icon"/>2022-Ongoing
                                                </h3>
                                                <p className="timeline-text">Although I have no Working Experience I still
                                                    have experience of designing templates and development of 14 months.&apos;</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <Footer/>
      </BaseLayout>
    </main>
  );
};

export default About;
