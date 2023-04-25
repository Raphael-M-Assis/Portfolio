import React from 'react'
import Menu from '../../components/Menu';
import SendEmail from '../../components/SendEmail';
import './style.scss';

const Contact = () => {
  return (
    <div className="container-main">
        <div className='container-contact'>
            <div className='menu-container'>
                <Menu />
            </div>
            
            <div className="content-work">
              <div className='container-content-contact'>
                <div className='content'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque ea dicta corporis, magni earum ex illum vitae, iure sed veritatis quod dignissimos fuga fugit? Deleniti quod sapiente officia expedita!</p>
                </div>
                <SendEmail />
            </div>

            </div>
        </div>
    </div>
  )
}

export default Contact;
