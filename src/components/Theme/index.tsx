import { ChangeHistoryOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import './style.scss'
import { Switch } from '@mui/material';

type ThemeType = {
    theme: 'Dark' | 'Light';
}

const Theme = () => {

    const [{ theme }, setTheme] = useState<ThemeType>({ theme: 'Dark' });

    useEffect(() => {
        const theme = localStorage.getItem('theme') as 'Dark' | 'Light';

        if (theme) {
            setTheme({ theme });
        }

        //setting the background color of the body
        const body = document.querySelector('body');
        body && (body.style.backgroundColor = theme === 'Dark' ? 'var(--primary-color-dark)' : ' var(--primary-color-light)');

        //setting the background color of the content (color of menu)
        const content = document.querySelector('.content') as HTMLDivElement;
        content && (content.style.backgroundColor = theme === 'Dark' ? 'var(--secondary-color-dark)' : ' var(--secondary-color-light)');

        //setting the background color of the button container (the button who hide the menu)
        const btnContainer = document.querySelector('.btn-container') as HTMLDivElement;
        btnContainer && (btnContainer.style.backgroundColor = theme === 'Dark' ? 'var(--primary-color-dark)' : ' var(--primary-color-light)');

        //setting the background color of the .links-content (container around the links of the menu)
        const linksContent = document.querySelector('.links-content') as HTMLDivElement;
        linksContent && (linksContent.style.backgroundColor = theme === 'Dark' ? 'var(--primary-color-dark)' : ' var(--primary-color-light)');

        //setting the background color of the .btn-change-theme (button who change the theme)
        const btnChangeTheme = document.querySelector('.btn-change-theme') as HTMLButtonElement;
        btnChangeTheme && (btnChangeTheme.style.backgroundColor = theme === 'Dark' ? 'var(--primary-color-dark)' : ' var(--primary-color-light)');

        //setting the background image from the website
        const containerMain = document.querySelector('.container-main') as HTMLDivElement;
        containerMain && (containerMain.style.backgroundImage = theme === 'Dark' ? 'url("/background-dark.jpg")' : 'url("/background-light.jpg")');
        
    }, [theme]);

    const changeTheme = () => {
        setTheme({ theme: theme === 'Dark' ? 'Light' : 'Dark' });

        //saving on localstoraged the current theme
        localStorage.setItem('theme', theme === 'Dark' ? 'Light' : 'Dark');
    }

    return (    
        <div className="theme">
            <span>Habilitar tema {theme === 'Dark' ? 'Light' : 'Dark'} </span>
            <Switch  className='switch-theme' onChange={changeTheme} checked={theme === 'Dark' ? true : false}/>            
        </div>        
    )
}

export default Theme;