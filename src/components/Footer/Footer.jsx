import ArrowUp from '../../assets/Icons/ArrowUp'
import './footer.css'

export default function Footer ({ projectName, motive }) {
  return (
    <div className='footer-container'>
      <div className='show-arrow'>
        <ArrowUp />
      </div>
      <div className='project-name'>
        {projectName} <span> - Github: </span>
        <a className='github-url' href='https://github.com/ShermanPI' target='_blank' rel='noreferrer'>
          @ShermanPI
        </a>
      </div>
      <div className='motive-container'>{motive}</div>
    </div>
  )
}
