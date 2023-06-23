import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {links} from "../data";
import "./navbar.css";
const Navbar=()=>{
    const [show,setShow]=useState(false);
    return(
        <nav className="nav">
            <div className={`${show?'nav__menu show-menu':'nav__menu'}`}>
                <ul className="nav__list">
                    {links.map(({name,icon,path},index)=>{
                        return(
                            <li className="nav__item" key={index}>
                                <NavLink to={path} className={({isActive})=>isActive?'nav__link active-nav':'nav__link'}
                                onClick={()=>setShow(!show)}>
                                    {icon}
                                    <h3 className="nav__name">{name}</h3>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

            </div>
            <div className={`${show?'nav__toggle animate-toggle':'nav__toggle'}`} onClick={()=>setShow(!show)}>
                <span></span>
                <span></span>
                <span></span>
                                
            </div>

        </nav>
    )
}

export default Navbar;