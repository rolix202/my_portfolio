import React from "react";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { FaCheck, FaArrowRight } from "react-icons/fa6";
import "./pricing.css"

function Pricing(){
    return (
        <section className="pricing section" id="pricing">
            <h2 className="section_title text-cs">Pricing</h2>
            <p className="section_subtitle">
                My <span>Price Board</span>
            </p>

            <div className="pricing_container container grid">
                <div className="pricing_item card card-one">
                    <span className="pricing_subtitle text-cs">Hourly Basis</span>
                    <h3 className="pricing_price">
                        39 <span>$</span> <em>Hour</em>
                    </h3>
                    <p className="pricing_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul className="pricing_list">
                        <li className="list_item">
                            <FaCheck className="list_icon"></FaCheck>
                            <span>Brand Design</span>
                        </li>
                        <li className="list_item">
                            <FaCheck className="list_icon"></FaCheck>
                            <span>Web Development</span>
                        </li>
                        <li className="list_item">
                            <del>Advertising</del>
                        </li>
                        <li className="list_item">
                            <del>Photography</del>
                        </li>
                    </ul>
                    <a href="" className="btn pricing_btn"> Start Project 
                    <FaArrowRight className="='pricing_btn-icon"></FaArrowRight>
                    </a>
                    <img src={shapeTwo} alt="" className="shape c_shape" />
                </div>

                <div className="pricing_item card card-one">
                    <span className="pricing_subtitle text-cs">Hourly Basis</span>
                    <h3 className="pricing_price">
                        39 <span>$</span> <em>Hour</em>
                    </h3>
                    <p className="pricing_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul className="pricing_list">
                        <li className="list_item">
                            <FaCheck className="list_icon"></FaCheck>
                            <span>Brand Design</span>
                        </li>
                        <li className="list_item">
                            <FaCheck className="list_icon"></FaCheck>
                            <span>Web Development</span>
                        </li>
                        <li className="list_item">
                            <del>Advertising</del>
                        </li>
                        <li className="list_item">
                            <del>Photography</del>
                        </li>
                    </ul>
                    <a href="" className="btn pricing_btn"> Start Project 
                    <FaArrowRight className="='pricing_btn-icon"></FaArrowRight>
                    </a>
                    <img src={shapeTwo} alt="" className="shape c_shape" />
                </div>


                <div className="pricing_item card card-one">
                    <span className="pricing_subtitle text-cs">Freelancing</span>
                    <h3 className="pricing_price">
                        259 <span>$</span> <em>Week</em>
                    </h3>
                    <p className="pricing_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul className="pricing_list">
                        <li className="list_item">
                            <FaCheck className="list_icon"></FaCheck>
                            <span>Brand Design</span>
                        </li>
                        <li className="list_item">
                            <FaCheck className="list_icon"></FaCheck>
                            <span>Web Development</span>
                        </li>
                        <li className="list_item">
                        <FaCheck className="list_icon"></FaCheck>
                            <del>Advertising</del>
                        </li>
                        <li className="list_item">
                            <del>Photography</del>
                        </li>
                    </ul>
                    <a href="" className="btn pricing_btn"> Start Project 
                    <FaArrowRight className="='pricing_btn-icon"></FaArrowRight>
                    </a>
                    <img src={shapeTwo} alt="" className="shape c_shape" />
                </div>



            </div>

            <div className="section_deco deco_right">
                <img src={shapeOne} alt="" className="shape"/>
            </div>
        </section>
    )
}
export default Pricing;