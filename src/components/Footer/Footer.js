import IngressiveImg from '../../assets/I4G.jpg';
import ZuriImg from '../../assets/zuri_img.jpg';
import red from '../../assets/red.jpg';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <img src={ZuriImg} alt='Zuri internship logo' />
                <img src={red} alt='red dot' className='red-dot'/>
            </div>
            <p>HNG Internship 9 Frontend Task</p>
            <img src={IngressiveImg} alt='Ingressive for good logo'/>
      </footer>
    )
}

export default Footer;