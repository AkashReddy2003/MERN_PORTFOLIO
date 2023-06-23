import React, { useState } from "react";
import Close from "../assets/close.svg"


const PortfolioItem=({img,title,details})=>{
    const [modal,setModal]=useState(false);
    const tog=()=>{
        setModal(!modal);
    }
    return(
        <div className="portfolio__item">
            <img src={img} alt="" className="portfolio__img"/>
            <div className="portfolio__hover" onClick={tog}>
                <h3 className="portfolio__title">{title}</h3>


            </div>
            {modal&&(
                <div className="portfolio__modal">
                <div className="portfolio__modal-content">
                <img src={Close} alt="" className="modal__close" onClick={tog}/>
                <h3 className="modal__title">{title}</h3>
                <ul className="modal__list grid">
                    {details.map(({icon,title,desc},index)=>{
                        return(
                            <li className="modal__item">
                                <span className="item__icon">{icon}</span>
                                <div>
                                    <span className="item__title">{title}</span>
                                    {title==='Preview : '?<a href={desc} className="item__details">{desc}</a>:<span className="item__details">{desc}</span>}
                                    
                                </div>

                            </li>
                        )
                    })}

                </ul>
                <img src={img} alt="" className="modal__img"/>
                </div>

            </div>
            )}
         </div>
    )
}

export default PortfolioItem