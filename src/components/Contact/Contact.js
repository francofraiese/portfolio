import { click } from '@testing-library/user-event/dist/click';
import { useState } from 'react';
import './Contact.css'
import Copied from './modal/copiedModal';

const Contact = () => {

    const [openModal, setOpenModal] = useState(false)

    function copyLink(e){
        e.preventDefault()
        navigator.clipboard.writeText("fraancofraiese@gmail.com")
        setOpenModal(true)
    }

    function handleClose(e){
        e.preventDefault()
        setOpenModal(false)
    }
    

    return (
        <div className="contact" id="contact">
            <div className="linkedin">
                <a href="https://www.linkedin.com/in/francofraiese" target="_blank"><img src="./images/linkedin.png" alt="LinkedIn"/></a>
            </div>
            <div className="github">
                <a href="https://github.com/francofraiese/" target="_blank"><img src="./images/github.png" alt="Github"/></a>
            </div>
            {openModal !== false ? 
                <div className="mailopen">
                    <Copied close={handleClose}/>
                    <a onClick={copyLink}><img src="./images/gmail.png" alt="Copy email"/></a>
                    <br/>
                </div>
                :
                <div className="mail">
                    <a onClick={copyLink}><img src="./images/gmail.png" alt="Copy email"/></a>
                </div>
                    }

        </div>
    )
}

export default Contact