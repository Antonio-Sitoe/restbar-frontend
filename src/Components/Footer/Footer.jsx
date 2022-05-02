import { Link } from 'react-router-dom';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className='container'>
        <div className={style.footerHeader}>
          <Link to='/' className='logo'>
            <img src='img/logo.svg' alt='' />
          </Link>
        </div>
        <div className={style.footerBody}>
          <div className={style.footerBodyList}>
            <ul>
              <li>Termos</li>
              <li>Privacidade</li>
              <li>Contacto</li>
            </ul>

            <ul>
              <li>Restaurantes</li>
              <li>About us</li>
              <li >Pratos</li>
            </ul>

            <ul>
              <li>Minha conta</li>
              <li>Favoritos</li>
            </ul>
          </div>
          <div className={style.newsletter}>
            <p>Assine a nossa newsletter :</p>
            <form
              target='_blank'
              action='https://formsubmit.co/antoniositoehl@gmail.com'
              method='POST'
            >
              <input
                type='email'
                name='email'
                placeholder='Digite o seu email'
                required
              />
              <button>➤</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
