import { click } from '@testing-library/user-event/dist/click';
import { useState } from 'react';
import './Contact.css'
import Copied from './modal/copiedModal';
import miniAlert from 'mini-alert';
import 'mini-alert/miniAlert.css';

const Contact = () => {


     

    function copyLink(e){
        e.preventDefault()
        navigator.clipboard.writeText("fraancofraiese@gmail.com")
        miniAlert({
            overflow: true,         // <-- disable behind the alert
            autoremove: true,       // <-- automatic remove
            time: 1000,              // <-- milliseconds
            size: 'small',          // <-- small, medium, large
            cartoon: false,          // <-- "cartoon effect" true/false
            limit: 1,               // <-- max alerts visible at the same time
            text: "¡Email copied!"
          });
    }

    

    return (
        <div className="contact" id="contact">
            <div className="linkedin">
                <a href="https://www.linkedin.com/in/francofraiese" target="_blank"><img src="./images/linkedin.png" alt="LinkedIn"/></a>
            </div>
            <div className="github">
                <a href="https://github.com/francofraiese/" target="_blank"><img src="./images/github.png" alt="Github"/></a>
            </div>
            <div className="mail">          
                <a onClick={copyLink}><img src="./images/gmail.png" alt="Copy email"/></a>
            </div>
        </div>
    )
}

export default Contact