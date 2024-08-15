import './footer.css'

export default function Footer ({ projectName, motive }) {
  return (
    <div className='footer-container'>
      <div>{projectName} - <a href='https://github.com/ShermanPI' target='_blank' rel='noreferrer'>@ShermanPI</a></div>
      <div>{motive}</div>
    </div>
  )
}
