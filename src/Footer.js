import instImg from './data/instagram.png'
import twitImg from './data/twitter.png'

import './footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerImg">
        <img className="instImg" src={instImg} alt="" />
        <a target="_blank" rel="noreferrer" href="/">
          Instagram
        </a>
      </div>
      <div className="footerImg">
        <img className="twitImg" src={twitImg} alt="" />
        <a target="_blank" rel="noreferrer" href="/">
          Twitter
        </a>
      </div>
    </div>
  )
}

export default Footer
