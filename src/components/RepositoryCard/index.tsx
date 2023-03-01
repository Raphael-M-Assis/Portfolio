import { MouseEventHandler } from 'react'
import './style.scss'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import Repository from '../../@Types/repository'

const RepositoryCard = () => {   
  
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery<Repository[]>('repositories', () => {
    return axios
      .get('https://api.github.com/users/Raphael-M-Assis/repos')
      .then((response) => response.data)
  }, {
    retry: 2,
  })

  if (isLoading) {
    return <div className='request-loading'><h2>Carregando ...</h2></div>
  }

  if (error) {
    return <div className='request-error'><h2>Erro ao carregar os dados!</h2></div>
  }

  //filter made to ensure that only public repositories are listed
  const repositories = data?.filter((repo) => repo.private === false)


  const handleFunction = (id: number): MouseEventHandler<HTMLDivElement> => (event) => {
    event.preventDefault();
    navigate(`/works/${id}`);
  }
  

  return (    
    <div className='repo-container'>
      {repositories?.map((repo) => (
        <div className='repo-card' key={repo.id} onClick={handleFunction(repo.id)}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>

          <div className='link-repo'>
            <p>Url:</p>
            <Link to={repo.html_url}><span>{repo.html_url}</span></Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RepositoryCard