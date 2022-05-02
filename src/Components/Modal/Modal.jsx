import React from 'react';
import style from './modal.module.css';

const Modal = () => {
  return (
    <div className={style.modalbg}>
      <div className={style.modal}>
        <div className={style.modalbgimage}></div>
        <div className={style.modalContent}>
          <h1 className={style.mainTitle}>Faca a sua reserva do prato</h1>

          <div>
            <h4>
              <span>Caril de Camarão</span>
              <span>200 MT</span>
            </h4>
            <p>
              Category:<span>Sul</span>
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
