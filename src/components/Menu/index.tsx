import React, { useState, useEffect } from 'react'
import './style.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import BookIcon from '@mui/icons-material/Book';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';


import { Link } from 'react-router-dom';
import Theme from '../Theme';

const Menu = () => {
    const [home, setHome] = useState<Boolean>(true);

    useEffect(() => {
        //making content visible when the menu is loaded
        const content = document.querySelector('.content') as HTMLElement;
        content && (content.style.opacity = '0.5');
        content && (content.style.opacity = '1');

    }, []);

    function changeMenu() {
        setHome(!home);

        const theme = localStorage.getItem('theme') as 'Dark' | 'Light';

        //Hide the side menu on the home page
        const content = document.querySelector('.content') as HTMLElement;
        content && (content.style.width = !home ? '300px' : '40px');

        //Hide the side menu on the projects page
        const contentWork = document.querySelector('.content-work') as HTMLElement;
        contentWork && (contentWork.style.width = !home ? 'calc(100% - 300px)' : 'calc(100% - 40px)');
        contentWork && (contentWork.style.marginLeft = !home ? '300px' : '40px');

        //.repo-card width need to be calculated based on .content-work width
        const repoCard = document.querySelectorAll('.repo-card') as NodeListOf<HTMLElement>;
        repoCard && (
            repoCard.forEach((card) => {
            card.style.width = !home ? 'calc(100% - 40px)' : 'calc(100% - 20px)';
        }));

        //home-container margin-left need to be 80px when the menu is hidden
        const homeContainer = document.querySelector('.home-container') as HTMLElement;
        homeContainer && (homeContainer.style.marginLeft = !home ? '320px' : '80px');

        const btnContainer = document.querySelector('.btn-container') as HTMLElement;
        btnContainer && (btnContainer.style.backgroundColor = theme === 'Dark' ? 'var(--primary-color-dark)' : ' var(--primary-color-light)');

    }

    return (
        <div className="content-container">

            <div className='content'>
                <div className='main-container'>

                    {home && (<div className='container-content-menu'>

                        <div className='container-profile'>
                            <img className='profile-img' src="/profile.jpg" alt="profile-image" />
                            <span className='profile-name'>Raphael Moreira</span>
                        </div>


                        <div className='links-content'>
                            <Link to={'https://www.linkedin.com/in/raphael-moreira-9959b31ab/'}>
                                <LinkedInIcon className='icon-content'/>
                            </Link>
                            <Link to={'https://github.com/Raphael-M-Assis/'}>
                                <GitHubIcon className='icon-content'/>
                            </Link>
                            <Link to={'#'}>
                                <TwitterIcon className='icon-content'/>
                            </Link>
                            <Link to={'https://www.instagram.com/raphaelmoreiraassis/'}>
                                <InstagramIcon className='icon-content'/>                    
                            </Link>
                        </div>

                        <div className='topics-section'>
                            <div className="topic">
                                <Link to={'/'}>
                                    <HomeIcon className='icon-topic'/>
                                    <span className='topic-title'>Inicio</span>
                                </Link>
                            </div>
                            <div className="topic">
                                <Link to={'/about'}>
                                    <InfoIcon className='icon-topic'/>
                                    <span className='topic-title'>Sobre</span>
                                </Link>
                            </div>
                            <div className="topic">
                                <Link to={'/skills'}>
                                    <CastForEducationIcon className='icon-topic'/>
                                    <span className='topic-title'>Habilidades</span>
                                </Link>
                            </div>
                            <div className="topic">
                                <Link to={'/curriculum'}>
                                    <BookIcon className='icon-topic'/>
                                    <span className='topic-title'>Currículo</span>
                                </Link>
                            </div>
                            <div className="topic">
                                <Link to={'/works'}>
                                    <WorkspacesIcon className='icon-topic'/>
                                    <span className='topic-title'>Projetos</span>
                                </Link>
                            </div>
                            <div className="topic">
                                <Link to={'/contact'}>
                                    <ConnectWithoutContactIcon className='icon-topic'/>
                                    <span className='topic-title'>Contato</span>
                                </Link>
                            </div>

                            <div className='btn-theme'>
                                <Theme />
                            </div>
                        </div>

                    </div>)}

                    <button onClick={changeMenu} className='btn-container'>
                        {
                        !home 
                            ? <ArrowForwardIosIcon className='btn-content' /> 
                            : <ArrowBackIosIcon className='btn-content' />
                        }
                    </button>
                    
                </div>

            </div>
        </div>
    )
}

export default Menu;