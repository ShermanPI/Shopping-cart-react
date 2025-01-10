import { useNavigate } from 'react-router'
import Button from '../Button/Button'
import './pageNotFound.css'

export const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <section className='not-found-section'>
      <h1>
        404
      </h1>
      <h2>
        Page Not Found
      </h2>
      <p>
        The page you are looking for doesn't exist.
      </p>

      <Button onClick={() => navigate('/')}>
        Go home ¯\_(ツ)_/¯
      </Button>
    </section>
  )
}
