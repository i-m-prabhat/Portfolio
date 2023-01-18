import React from 'react' 

import './style.scss'
import logo from '../../../images/logo.png'

const Navigation = () => {
  return (
    <div className="top-navigation-bar">
        <div className="app-logo">
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Navigation