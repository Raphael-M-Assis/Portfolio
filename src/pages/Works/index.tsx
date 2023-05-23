import React from 'react'
import { Outlet } from 'react-router-dom';
import Menu from '../../components/Menu';
import RepositoryCard from '../../components/RepositoryCard';
import './style.scss'

const Works = () => {

    return (
        <div className="container-main">
            <div className="container-main-content">
                <Menu />            
                <div className='content-work'>
                    <h1 className='content-work-title'>Diretórios do GitHub</h1>
                    
                    <div>
                        <Outlet />
                    </div>

                    <RepositoryCard />
                </div>
            </div>
        </div>
    )
}

export default Works;