import React from 'react';
import style from './Header.module.css';
import Logo from '../../img/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeButton, setActiveButton] = React.useState(false);

  function handleActiveButton() {
    setActiveButton(!activeButton);
  }
  return (
    <header className={style.header}>
      <div className='container'>
        <nav className={style.headerNavegation}>
          <a href='index.html' className='logo'>
            <img src={Logo} alt='logotipo' />
          </a>
          <ul
            className={`${style.headerList}  ${
              activeButton ? style.ative : ''
            }`}
          >
            <li>
              <Link onClick={handleActiveButton} to='/'>
                Pratos do dia
              </Link>
            </li>
            <li>
              <Link onClick={handleActiveButton} to='about'>
                Sobre Nós
              </Link>
            </li>
          </ul>
          <button
            onClick={handleActiveButton}
            className={`${style.btnMobile} ${activeButton ? style.ative : ''}`}
          ></button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
