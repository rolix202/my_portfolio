import React, { useState } from "react";
import { FaRegMap, FaRegUser, FaRegEnvelope, FaRegAddressBook } from "react-icons/fa6";
import "./contact.css";
import axios from "axios";
import shapeOne from "../../assets/shape-1.png";

function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [buttonSent, setButtonSet] = useState('Send Message')

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://sheet.best/api/sheets/0f8abc34-bc9a-441e-a71f-310cd7c3d14c',
            form
        ).then((response) => {
            console.log(response);
            // clearing form fields
            setForm({ name: '', email: '', subject: '', message: '' });

            setButtonSet('Message Sent!');

            setTimeout(() => {
                setButtonSet("Send Message")
            }, 3000);
        })
    }

    return (
        <section className="contact section" id="contact">
            <h2 className="section_title text-cs">Contact Me</h2>
            <p className="section_subtitle">
                Let's <span>Talk About Ideas</span>
            </p>

            <div className="contact_container container grid">
                <div className="contact_content">
                    <div className="contact_card">
                        <span className="contact_card-icon">
                            <FaRegMap />
                        </span>
                        <h3 className="contact_card-title">Address</h3>
                        <p className="contact_card-data">Enugu, Nigeria</p>
                    </div>

                    <div className="contact_card">
                        <span className="contact_card-icon">
                            <FaRegUser />
                        </span>
                        <h3 className="contact_card-title">
                            Freelancer
                        </h3>
                        <p className="contact_card-data">Available Right Now</p>
                    </div>


                    <div className="contact_card">
                        <span className="contact_card-icon">
                            <FaRegEnvelope />
                        </span>
                        <h3 className="contact_card-title">Email
                        </h3>
                        <p className="contact_card-data">williamsroland147@gmail.com</p>
                    </div>


                    <div className="contact_card">
                        <span className="contact_card-icon">
                            <FaRegAddressBook />
                        </span>
                        <h3 className="contact_card-title">Phone
                        </h3>
                        <p className="contact_card-data">+2349050798489</p>
                    </div>
                </div>

                <form action="" className="contact_form" onSubmit={handleSubmit}>
                    <div className="contact_form-group grid">
                        <div className="contact_form-div">
                            <label htmlFor="" className="contact_form-tag text-cs">
                                Your full Name <b>*</b>
                            </label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={form.name}
                                className="contact_form-input" />
                        </div>

                        <div className="contact_form-div">
                            <label htmlFor="" className="contact_form-tag text-cs">
                                Your Email Address <b>*</b>
                            </label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={form.email} className="contact_form-input" />
                        </div>
                    </div>

                    <div className="contact_form-div">
                        <label htmlFor="" className="contact_form-tag text-cs">
                            Your Subject <b>*</b>
                        </label>
                        <input
                            type="text"
                            name="subject"
                            onChange={handleChange}
                            value={form.subject} className="contact_form-input" />
                    </div>

                    <div className="contact_form-div contact_form-area">
                        <label htmlFor="" className="contact_form-tag text-cs">
                            Your Message <b>*</b>
                        </label>
                        <textarea
                            name="message"
                            onChange={handleChange}
                            value={form.message} className="contact_form-input"></textarea>
                    </div>
                    <div className="contact_submit">
                        <p>* Accept the terms and conditions.</p>
                        <button type="submit" className={`${buttonSent === 'Message Sent!' ? 'sent' : 'btn_trasition'} btn text-cs`} >{buttonSent} </button>
                    </div>
                </form>
            </div>

            <div className="section_deco deco_left">
                <img src={shapeOne} alt="" className="shape"/>
            </div>

            <div className="section_bg-wrapper">
                <span className="bg_title">Contact me</span>
            </div>
        </section>

    )
}
export default Contact;