import React from 'react'
import Contact from './Contact'
import { FaFacebookF, FaGlobe } from 'react-icons/fa'
import { MdLocalPhone } from 'react-icons/md'
import "./footer.css"

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
                <Contact icon={<MdLocalPhone />} contact="Toll free 1800 02302 2013"/>
                <Contact icon={<FaFacebookF />} contact="www.facebook.com/cri"/>
                <Contact icon={<FaGlobe />} contact="www.crigroups.com"/>
            </div>    
        </React.Fragment>
    )
}

export default Footer