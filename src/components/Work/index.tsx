import axios from 'axios';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Repository from '../../@Types/repository';
import './style.scss'

const Work = () => {
    
    //transform id from string to number, if id cannot be a number, it will be 0
    const { id } = useParams<{ id: string }>();
    const idNumber = Number(id) || 0;
    
    const { data, isLoading, error } = useQuery<Repository[]>('repository', () => {
        return axios
            .get('https://api.github.com/users/Raphael-M-Assis/repos')
            .then((response) => response.data)
    }, {
        retry: 2,
    })

    const repository: Repository | undefined = data?.find((repo) => repo.id === idNumber);

    if (isLoading) {
        return <div><h2 className='request-loading'>Carregando ...</h2></div>
    }

    if (error) {
        return <div><h2 className='request-error'>Erro ao carregar os dados!</h2></div>
    }

    //format date to show only the date in the format dd/mm/yyyy, to updated_at and created_at
    const formatDate = (date: string) => {
        const dateFormated = new Date(date);
        const day = dateFormated.getDate();
        const month = dateFormated.getMonth() + 1;
        const year = dateFormated.getFullYear();

        //verify if day or month is less than 10, if so, add 0 before the number
        if(day < 10 && month < 10) {
            return `0${day} / 0${month} / ${year}`;
        } else if (day < 10) {
            return `0${day} / ${month} / ${year}`;
        } else if (month < 10) {
            return `${day} / 0${month} / ${year}`;
        }

        return `${day} / ${month} / ${year}`;
    }

    const createdDate = repository?.created_at && (formatDate(repository?.created_at));
    const updatedDate = repository?.updated_at && (formatDate(repository?.updated_at));
    

    return (
        <div className='content-repository-detail'>
            <div className='repository-detail' key={repository?.id}>
                <div className='project-name'>
                    <h3>Projeto:</h3> 
                    <span className='repository-name'>{repository?.name}</span>
                </div>
                
                <div className='project-description'>
                    <h4>Descrição:</h4>
                    <span>{repository?.description || 'Não informado'}</span>
                </div>
                <div className='project-owner'>
                    <h4>Feito Por:</h4>
                    <span>{repository?.owner.login}</span>
                </div>

                <div className='project-created'>
                    <h4>Criado em:</h4>
                    <span>{createdDate}</span>
                </div>

                <div className='project-updated'>
                    <h4>Última atualização:</h4>
                    <span>{updatedDate}</span>
                </div>

                <div className='link-repository'>
                    <h4>Url:</h4>
                    <Link to={repository!.html_url}><span>{repository?.html_url}</span></Link>
                </div>            
            </div>      
        </div>
    )
}

export default Work;