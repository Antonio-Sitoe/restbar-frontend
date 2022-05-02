import React from 'react';
import Modalstyle from './modal.module.css';

const Modal = ({ content, style, setIsOpen }) => {
  const backgroundStyle = {
    background: `url(${content.image}) no-repeat center center`,
  };
  function handleCLoseModal(e) {
    if (e.currentTarget === e.target) setIsOpen(false);
  }
  return (  
    <div className={Modalstyle.modalbg} onClick={handleCLoseModal}>
      <div className={Modalstyle.modal}>
        <div className={Modalstyle.modalbgimage} style={backgroundStyle}></div>
        <div className={Modalstyle.modalContent}>
          <h1 className={Modalstyle.mainTitle}>Faca a sua reserva do prato</h1>

          <div className={style.contentinfo}>
            <h4>
              <span>{content.name}</span>
              <span>{content.price} MT</span>
            </h4>
            <p>
              Category:<span>{content.category}</span>
              <span>★★★★★</span>
            </p>
          </div>

          <form
            action='https://formsubmit.co/antoniositoehl@gmail.com'
            method='POST'
          >
            <input
              type='text'
              name='name'
              placeholder='Digite o seu nome'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Digite o seu email'
              required
            />
            <input
              type='number'
              name='numero'
              placeholder='Digite o seu numero'
              required
            />
            <button>Fazer reserva</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
