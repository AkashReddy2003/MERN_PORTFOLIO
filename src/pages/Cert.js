import React from "react";
import "./portfolio.css";
import PortfolioItem from "../components/PortfolioItem";
import { Certifications } from "../data";
const Cert=()=>{
    return(
        <section className="portfolio section">
            <h2 className="section__title">My <span>Certifications</span></h2>
            <div className="portfolio__container container grid">
                {Certifications.map((item)=>{
                    return <PortfolioItem key={item.id}{...item}/>
                })}
            </div>
        </section>
    )
}

export default Cert;