import React from 'react'
import Menu from '../../components/Menu';
import './style.scss'
import Typical from 'react-typical'

const Home = () => {      

    return (
        <div className="container-main">
            <div className='menu-container'>
                <Menu />
                <div className='content'>
                    <div className='home-container'>
                        <div className='title-typical'>
                            <p className='title'>I am {''}</p>
                            <div className='typical-container'>
                                <Typical
                                    steps={
                                        [
                                            'a Junior Developer', 5000, 
                                            'a Student', 3000, 
                                            'a FullStack Developer', 5000, 
                                            'Studying at IFFRJ', 6000
                                        ]
                                    }
                                    loop={Infinity}
                                    wrapper="p"                                
                                />
                            </div>
                        </div>

                        <span>Site desenvolvido utilizando técnicas de React</span>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Home;