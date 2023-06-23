import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
      <a href="https://github.com/yessimkhanuly13" target="_blank">
          <FaGithub />
      </a>
      <a href="https://github.com/yessimkhanuly13" target="_blank">
          <FaLinkedin />
      </a>
    </div>
  )
}

export default Footer


