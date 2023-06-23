import React, { useEffect, useState } from "react"
import {themes} from "../data"
import { FaCog } from "react-icons/fa"
import {BsSun,BsMoon} from 'react-icons/bs'
import './theme.css'
import ThemeItem from "./ThemeItem"
const getStoColor=()=>{
    let color='hsl(252,35%,51%)';
    if(localStorage.getItem('color')){
        color=localStorage.getItem('color');
    }
    return color;
}
const getStoTheme=()=>{
    let theme='light-theme';
    if(localStorage.getItem('theme')){
        theme=localStorage.getItem('theme');
    }
    return theme;
}
const Theme=()=>{
    const [show,setShow]=useState(false);
    const [color,setColor]=useState(getStoColor());
    const [theme,setTheme]=useState(getStoTheme());
    const changeColor=(color)=>{
        setColor(color);
    }
    const toggleTheme=()=>{
        if(theme=='light-theme'){
            setTheme('dark-theme');
        }else{
            setTheme('light-theme')
        }
    }
    useEffect(()=>{
        document.documentElement.style.setProperty('--first-color',color);
        localStorage.setItem('color',color);
    },[color])
    useEffect(()=>{
        document.documentElement.className=theme;
        localStorage.setItem('theme',theme);
    },[theme])
    return(
        <div>
            <div className={`${show?'show-switcher':''} style__switcher`}>
                <div className="style__switcher-toggler"
                onClick={()=>setShow(!show)}>
                    <FaCog/>
                </div>
                <div className="theme__toggler" onClick={toggleTheme}>
                    {theme==='light-theme'?<BsMoon/>:<BsSun/>}
                </div>
                <h3 className="style__switcher-title">Style Switcher</h3>
                <div className="style__switcher-items">
                    {themes.map((theme,index)=>{
                        return <ThemeItem key={index} {...theme} changeColor={changeColor}/>
                    })}

                </div>
                <div className="style__switcher-close" onClick={()=>setShow(!show)}>&times;</div>

            </div>
        </div>

    )
}

export default Theme