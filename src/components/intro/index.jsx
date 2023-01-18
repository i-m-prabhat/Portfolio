import React from 'react'

import cloud from "../../images/cloud.png"
import cloudSoft from "../../images/cloud-soft.png"

import './style.scss'
import Navigation from './navigation-bar'

const Intro = () =>
{
    return (
        <div className="intro-section">
            <div className="vector-bg" id="parallax"></div>
            <img src={cloud} className="cloud" alt='cloud' />
            <img src={cloudSoft} className="cloud-soft" alt='cloud' />
            <div className="content">
                <Navigation/>
            </div>
        </div>
    )
}

export default Intro