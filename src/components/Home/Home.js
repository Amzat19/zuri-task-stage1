import profileImg from '../../assets/profile__img.jpg';
import { ReactComponent as Ellipse } from '../../assets/ellipse.svg';
import { ReactComponent as SlackIcon } from '../../assets/slack.svg';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as ShareIcon } from '../../assets/share.svg';
import { Link } from 'react-router-dom';
import "./Home.css";
import Footer from '../Footer/Footer';

const Home = ({ dimension }) => {
  return (
    <div className="Home">
      <header>
        <div className='ellipse-div'>
          { dimension.width >= 768 ? <ShareIcon className='share'/> : <Ellipse className='ellipse'/> }
        </div>
        <div className='profile'>
          <img src={profileImg} alt='Profile' id='profile_img'/>
          <p id='slack' style={{ display: 'none' }}>Sheriff Amzat</p>
        </div>
      </header>
      <section>
        <h1 id='twitter'>Kunmi</h1>
        <div className='links'>
          <a href='https://twitter.com/Amzat19'>Twitter Link</a>
          <a href='https://training.zuri.team/' id='btn__zuri'>Zuri Team</a>
          <a href='http://books.zuri.team ' id='books'>Zuri Books</a>
          <a href='https://books.zuri.team/python-for-beginners?ref_id=Sheriff Amzat'id='book__python'>Python Books</a>
          <a href='https://background.zuri.team' id='pitch'>Background Check for Coders</a>
          <a href='https://books.zuri.team/design-rules' id='book__design'>Design Books</a>
          <Link to="/contact" id="contact">Contact Me</Link>
        </div>
        <footer>
          <SlackIcon />
          <GithubIcon />
        </footer>
      </section>
      <Footer />
    </div>
  )
};

export default Home