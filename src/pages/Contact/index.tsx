import React from 'react'
import Menu from '../../components/Menu';
import SendEmail from '../../components/SendEmail';
import './style.scss';

const Contact = () => {
  return (
    <div className="container-main">
        <Menu />
        <div className='menu-container-form'>
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
