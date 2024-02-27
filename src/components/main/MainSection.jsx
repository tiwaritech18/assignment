import React from 'react'
import mainImg from "../../assets/1.png"
import lowerMainImg from "../../assets/2.png"
import "./main.css"
const Main = () => {
    return (
        <React.Fragment>
            <div className="main">
                <img className="main-img" src={mainImg} alt="img" />
                <div className="content">
                    <div className="heading">
                        <h2> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
                        <ul>
                            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                        </ul>
                <div className="img-section">
                    <img src={lowerMainImg} alt="img" />
                    <p>Government of India has awarded the <span className="bold-text">"National Energy Conservation Award 2018".</span>  Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Main