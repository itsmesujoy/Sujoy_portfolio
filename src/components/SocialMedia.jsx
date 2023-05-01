import React from 'react';
import { FaInstagram, FaLinkedinIn, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://www.linkedin.com/in/sujoys182/' target="_blank" rel="noreferrer">
            <FaLinkedinIn />
        </a>
        <a href='https://www.instagram.com/sujoy_s_/' target="_blank" rel="noreferrer">
            <FaInstagram />
        </a>
        <a href='https://api.whatsapp.com/send?phone=919895453679&text=Hi,%20I%20wanna%20know%20more%20about%20your%20services' target="_blank" rel="noreferrer">
            <FaWhatsapp />
        </a>
        <a href='mailto:sujoys182@gmail.com' target="_blank" rel="noreferrer">
            <FaEnvelope />
        </a>
    </div>
  )
}

export default SocialMedia;