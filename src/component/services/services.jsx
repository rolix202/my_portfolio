import React from "react";

import {services} from "../../Data";
import { FaArrowRightLong } from "react-icons/fa6";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import "./services.css";

function Services(){
    return (
        <section className="services section" id="services">
            <h2 className="section_title text-cs">What I Do</h2>
            <p className="section_subtitle">
                My <span>Services</span>
            </p>

            <Swiper 
            spaceBetween={30}
            // slidesPerView={1}
        // spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        
        className="services_container container mySwiper">
                {services.map(({name, title, description}, index) => {
                    return (
                        <SwiperSlide className="services_item card card-one" key={index}>
                            <span className="services_subtitle text-cs">{name} </span>
                            <h3 className="services_title">{title} </h3>
                            <p className="services_description">{description} </p>
                            {/* <a href="" className="link">
                                See Pricing
                                <FaArrowRightLong className="link_icon"></FaArrowRightLong>
                            </a> */}
                            <img src={shapeTwo} alt="" className="shape c_shape" />
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <div className="section_deco deco_right">
                <img src={shapeOne} alt="" className="shape"/>
            </div>

            <div className="section_bg-wrapper">
                <span className="bg_title">Services</span>
            </div>
        </section>
    )
}
export default Services;