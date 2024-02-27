import React from 'react'

const Contact = ({icon,contact}) => {
  return (
    <React.Fragment>
        <div className="contact">
            <span>{icon}</span>
            <p>{contact}</p>
        </div>
    </React.Fragment>
  )
}

export default Contact