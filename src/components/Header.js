import React from "react";
import profilePicture from "../images/profilepicture.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Header() {

    return(
        <div className="prof-header">
            <img
            src={profilePicture}
            alt="Profile"
            className="profilephoto">
            </img>
            <h2>Nikolaos Paterakis</h2>
            <h3>Software Engineer</h3>
            <h4>nikolaospaterakis.website</h4>
            <div className="buttons">
                <button className="email"><FontAwesomeIcon icon={faEnvelope} /> Email</button>
                <button className="linkedin"><FontAwesomeIcon icon={faLinkedin} 
                className="linkedin-icon"/>LinkedIn</button>
            </div>
        </div>
    )
}