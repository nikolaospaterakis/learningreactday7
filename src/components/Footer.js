import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter, faSquareFacebook, faSquareInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {

    return(
        <footer className="footer">
            <icon><FontAwesomeIcon icon={faSquareTwitter} /></icon>
            <icon><FontAwesomeIcon icon={faSquareFacebook} /></icon>
            <icon><FontAwesomeIcon icon={faSquareInstagram} /></icon>
            <icon><FontAwesomeIcon icon={faSquareGithub} /></icon>
        </footer>
    )
}