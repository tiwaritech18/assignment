import React from 'react'
import img3 from "../../assets/3.png"
import "./tool.css"
const Tool = () => {
    return (
        <React.Fragment>
            <div className="tools">
                <p className='tools-desc'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
                <img src={img3} alt="toolsImg" />
                <p className='tools-names'>
                    Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
                <hr />
            </div>
            <div className="segments">
                <h2>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h2>
                <p>CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL.</p>
            </div>
        </React.Fragment>
    )
}

export default Tool