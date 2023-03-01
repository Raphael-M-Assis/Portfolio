import React from 'react'
import Menu from '../../components/Menu';
import './style.scss';

const Skills = () => {
  return (
    <div className="container-main">
        <div className='container-skills'>
            <div className='menu-container'>
                <Menu />
            </div>
            
            <div className='container-content-skills'>
                <h1 className='skills-title'>Habilidades:</h1>
                <h2 className='skills-description'>Ainda em construção</h2>
            </div>
        </div>
    </div>
  )
}

export default Skills;
