import React from 'react'
import Menu from '../../components/Menu';
import SendEmail from '../../components/SendEmail';
import './style.scss';

const Contact = () => {
  return (
    <div className="container-main">
        <div className='menu-container-form'>
            <Menu />
            <div className='content'>
                <div className='home-container-form'>
                   <SendEmail/>
                </div>
            </div>                
        </div>
    </div>
)
}

export default Contact;
