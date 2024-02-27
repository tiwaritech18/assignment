import React from 'react'
import "./header.css"
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <React.Fragment>
        <div className="header">
            <div className="logo">
                <img src={logo} alt="CRI Fluid Systems" />
            </div>
        </div>
    </React.Fragment>
  )
}

export default Header