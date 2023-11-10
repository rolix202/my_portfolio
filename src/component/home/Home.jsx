import React from "react";
import "./home.css";
import profileImage from "../../assets/roll1.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { FaSquareXTwitter, FaLinkedin, FaBloggerB } from "react-icons/fa6"

import CV from "../../assets/roland-cv.pdf";

function Home() {
    return (
        <section className="home" id="home">
            <div className="home_wrapper">
                <div className="home_container container">
                    <p className="home_subtitle text-cs">
                        Hello, <span>My Name Is </span>
                    </p>
                    <h1 className="home_title text-cs">
                        <span>OODO</span> ROLAND
                    </h1>
                    <p className="home_job">
                        <span className="text-cs">I Am A</span> <b>Web Developer</b>
                    </p>

                    <div className="home_img-wrapper">
                        <div className="home_banner">
                            <img src={profileImage} alt="roland" className="home_profile" />
                        </div>
                        <p className="home_data home_data-one">
                            <span className="text-lg">
                                2 <b>+</b>
                            </span>
                            <span className="text-sm text-cs">
                                Years of <span>Experience</span>
                            </span>
                        </p>

                        <p className="home_data home_data-two">
                            <span className="text-lg">
                                5 <b>+</b>
                            </span>
                            <span className="text-sm text-cs">
                                Completed <span>Projects</span>
                            </span>
                        </p>

                        <img src={shapeOne} alt="shape one" className="shape shape_1" />
                        <img src={shapeTwo} alt="shape Two" className="shape shape_2" />
                        <img src={shapeTwo} alt="shape Three" className="shape shape_3" />

                    </div>

                    <p className="home_text">
                    I love turning ideas into vibrant, user-friendly websites! Whether it's making them look cool, run fast, or solving tricky problems, let's team up and bring your online dreams to life!
                    </p>
                    <div className="home_socials">
                        <a href="https://twitter.com/rocodeify" className="home_social-link">
                            <FaSquareXTwitter />
                        </a>
                        <a href="https://www.linkedin.com/in/roland-uchenna-oodo/" className="home_social-link">
                            <FaLinkedin />
                        </a>
                        <a href="https://rocodeify.com/" className="home_social-link">
                            <FaBloggerB />
                        </a>
                    </div>

                    <div className="home_btns">
                        <a download="" href={CV} className="btn text-cs">Download CV</a>
                        <a href="#skills" className="hero_link text-cs">My Skills</a>
                    </div>
                </div>

                <div className="section_deco deco_left">
                    <img src={shapeOne} alt="" className="shape" />
                </div>
            </div>
            <div className="section_bg-wrapper">
                <span className="bg_title">Web Developer</span>
            </div>
        </section>
    )
}
export default Home;