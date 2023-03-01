import React from 'react'
import Menu from '../../components/Menu';
import './style.scss';

const About = () => {
  return (
    <div className="container-main">
        <div className='container-about'>
            <div className='menu-container'>
                <Menu />
            </div>
            
            <div className='container-content-about'>
                <h1 className='about-title'>Sobre:</h1>
                <h2 className='about-description'>Ainda em construção</h2>
            </div>
        </div>
    </div>
  )
}

export default About;
