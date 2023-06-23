import React from "react";
import "./home.css";
import prof from "../assets/home.webp";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home=()=>{
    return(
        <section className="home section grid">
            <img src={prof} alt="" className="home__img"/>
            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I'm Akash.</span><br/>
                        MERN Stack Devoloper
                    </h1>
                    <p className="home__description">
                    I'm enthusiastic and passionate person currently pursuing Bachelors degree in Electronics and communication engineering at Vellore Institute of Technology. Eager to learn new technologies and methodologies in both Front-end and Back-end. Always willing to innovate the new things which can improve my existing skills.
                    </p>
                    <Link to="/about" className="button">
                        More About Me{' '}
                        <span className="button__icon">
                            <FaArrowRight/>

                        </span>
                        
                    </Link>

                </div>

            </div>
            <div className="color__block"></div>
        </section>
    )
}

export default Home;