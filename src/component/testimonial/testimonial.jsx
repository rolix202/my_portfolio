import React from "react";
import { testimonials } from "../../Data";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import testimonialIcon from "../../assets/testimonials-icon.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import "./testimonial.css";

function Testimonial(){
    return (
        <section className="testimonaials section" id="testimonial">
            <h2 className="section_title text-cs">Testimonials</h2>
            <p className="section_subtitle">
                My <span>Customers Say</span>
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
        
        className="testimonials_container container mySwiper">
                {testimonials.map(({img, name, author, description}, index) => {
                    return (
                        <SwiperSlide className="testimonials_item card card-one" key={index}>
                            
                            <div className="testimonial_header">
                                <div className="testimonial_icon">
                                    <img src={testimonialIcon} alt="" />
                                </div>
                                <img src={img} alt="" className="testimonial_img" />
                            </div>

                            <p className="testimonial_description">{description} </p>
                            <h3 className="testimonial_name">{name} </h3>
                            <p className="testimonial_author">{author} </p>

                            <img src={shapeTwo} alt="" className="shape c_shape" />

                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <div className="section_deco deco_right">
                <img src={shapeOne} alt="" className="shape"/>
            </div>

            <div className="section_bg-wrapper">
                <span className="bg_title">Reviews</span>
            </div>

            
        </section>
    )
}
export default Testimonial;