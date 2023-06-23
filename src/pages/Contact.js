import React from "react";
import "./contact.css";
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaLinkedin,
    FaGithub,
    FaInstagram,

}
from 'react-icons/fa';
import { FiSend } from "react-icons/fi";
import "./contact.css";
const Contact=()=>{
    return(
        <div className="contact section">
            <h2 className="section__title">
                Get In <span>Touch</span>
            </h2>
            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title"></h3>
                    <p className="contact__description">

                    </p>
                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className="info__icon"/>
                            <div>
                                <span className="info__title">Mail Me</span>
                                <h4 className="info__desc">akashreddyakepati@gmail.com</h4>
                            </div>

                        </div>
                        <div className="info__item">
                            <FaPhoneSquareAlt className="info__icon"/>
                            <div>
                                <span className="info__title">Call Me</span>
                                <h4 className="info__desc">+919398000816</h4>
                            </div>

                        </div>

                    </div>
                    <div className="contact__socials">
                        <a href="" className="contact__social-link">
                            <FaGithub/>
                        </a>
                        <a href="" className="contact__social-link">
                            <FaFacebookF/>
                        </a>
                        <a href="" className="contact__social-link">
                            <FaLinkedin/>
                        </a>
                        <a href="" className="contact__social-link">
                            <FaInstagram/>
                        </a>

                    </div>

                </div>
                <div className="contact__form">
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input
                            type="text"
                            placeholder="Your Name"
                            className="form__control"
                            />

                        </div>
                        <div className="form__input-div">
                            <input
                            type="text"
                            placeholder="Email"
                            className="form__control"
                            />

                        </div>
                        <div className="form__input-div">
                            <input
                            type="text"
                            placeholder="Your Subject"
                            className="form__control"
                            />

                        </div>

                    </div>
                    <div className="form__input-div">
                        <textarea placeholder="Your Message" className="form__control textarea"></textarea>
                    </div>
                    <button className="button">
                        Send Message
                        <span className="button__icon contact__button-icon">
                            <FiSend/>
                        </span>
                    </button>

                </div>

            </div>
        </div>
    )
}

export default Contact;