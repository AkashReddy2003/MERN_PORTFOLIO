import React from "react";
import "./about.css";
import Info from "../components/Info";
import { FaDownload } from "react-icons/fa";
import CV from "../assets/steve-Cv.pdf"
import Skills from "../components/Skills";
import A from '../assets/About.gif';
import { resume } from "../data";
import ResumeItem from "../components/ResumeItem";
const About=()=>{
    return(
        <main className="section container">
            <section className="about">
                <h2 className="section__title">
                    About <span>Me</span>
                </h2>
                <div className="about__container grid">
                    <div className="about__info">
                        <h3 className="section__subtitle">Personal Infos</h3>
                        <ul className="info__list grid">
                            <Info/>

                        </ul>
                        <a className="button" href={CV} download=''>
                            Download CV 
                            <span className="button__icon"><FaDownload/></span>
                            </a>
                    </div>
                    <div className="stats grid">
                        <img src={A} ></img>

                    </div>
                </div>

            </section>
            <div className="seperator"></div>
            <section className="skills">
                <h3 className="section__subtitle subtitle__center">My Skills</h3>
                <div className="skills__container grid">
                    <Skills/>
                </div>


            </section>
            <div className="seperator"></div>
            <section className="resume">
                <h3 className="section__subtitle subtitle__center">Experience & Education</h3>
                <div className="resume__container grid">
                <div className="resume__data">
                        {resume.map((val)=>{
                            if(val.category==='education'){
                                return <ResumeItem key={val.id} {...val}/>
                            }
                        })}
                    </div>
                    <div className="resume__data">
                        {resume.map((val)=>{
                            if(val.category==='experience'){
                                return <ResumeItem key={val.id} {...val}/>
                            }
                        })}
                    </div>
                    

                </div>
            </section>

        </main>
    )
}

export default About;