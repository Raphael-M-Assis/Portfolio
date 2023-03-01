import React from 'react'
import Menu from '../../components/Menu';
import './style.scss';

const Curriculum = () => {
  return (
    <div className="container-main">
        <div className='container-curriculum'>
            <div className='menu-container'>
                <Menu />
            </div>
            
            <div className='container-content-curriculum'>
                <h1 className='curriculum-title'>Currículo:</h1>
                <h2 className='curriculum-description'>Ainda em construção</h2>
            </div>
        </div>
    </div>
  )
}

export default Curriculum;
