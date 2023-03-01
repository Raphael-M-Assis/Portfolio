import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../components/Menu';
import './style.scss'

const NotFound = () => {

  const [time, setTime] = useState<number>(5);
  const timeout = useRef<number>(0);
  const navigate = useNavigate();

  useEffect(() => {

    //create a timeout to redirect to home page
    timeout.current = window.setTimeout(() => {
      setTime(time - 1);

      //redirect to home page
      if (time <= 0) {
        navigate('/');
      };
      
    }, 1000);    

    // Clean up function
    return () => {
      clearTimeout(timeout.current);
    };

  }, [time]);


  return (
    <div className='container-main'>
        <div className='container-menu-nf'>
            <Menu />
        </div>

        <div className='not-found'>
            <h1 className='not-found-title'>404</h1>
            <h2 className='not-found-description'>Página não encontrada</h2>

            <div className='redirect'>
              <p>Você será redirecionado em {time} segundo(s), Aguarde ...</p>
            </div>
        </div>

        
    </div>
  )
}

export default NotFound;
