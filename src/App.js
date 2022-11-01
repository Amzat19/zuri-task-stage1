import './App.css';
import profileImg from './assets/profile__img.jpg';
import IngressiveImg from './assets/I4G.jpg';
import ZuriImg from './assets/zuri_img.jpg';
import red from './assets/red.jpg';
import { ReactComponent as Ellipse } from './assets/ellipse.svg';
import { ReactComponent as SlackIcon } from './assets/slack.svg';
import { ReactComponent as GithubIcon } from './assets/github.svg';
import { ReactComponent as ShareIcon } from './assets/share.svg';
import { useEffect, useState } from 'react';

function App() {
  const [dimension, setDimension] = useState({
    width: 0,
  });

  const handleResize = () => {
    setDimension({
        width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
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
        </div>
        <footer>
          <SlackIcon />
          <GithubIcon />
        </footer>
      </section>
      <footer>
        <div>
        <img src={ZuriImg} alt='Zuri internship logo' />
        <img src={red} alt='red dot' className='red-dot'/>
        </div>
        <p>HNG Internship 9 Frontend Task</p>
        <img src={IngressiveImg} alt='Ingressive for good logo'/>
      </footer>
    </div>
  );
}

export default App;
