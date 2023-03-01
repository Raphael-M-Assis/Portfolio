import React from 'react'
import Menu from '../../components/Menu';
import './style.scss';

const Contact = () => {
  return (
    <div className="container-main">
        <div className='container-contact'>
            <div className='menu-container'>
                <Menu />
            </div>
            
            <div className='container-content-contact'>
                <h1 className='contact-title'>Contato:</h1>
                <h2 className='contact-description'>Ainda em construção</h2>
            </div>
        </div>
    </div>
  )
}

export default Contact;
