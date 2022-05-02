import React from 'react'

const Modal = () => {
  return (
  <div class="modal-bg">
    <div class="modal">
      <div class="modal-bg-image"></div>
      <div class="modal-content">
        <h1 class="mainTitle">Faca a sua reserva do prato</h1>

        <div class="content-info">
          <h4 class="content-info-h4">
            <span class="content-info-h4-title">Caril de Camarão</span>
            <span class="content-info-h4-price">200 MT</span>
          </h4>
          <p>Category:<span class="content-info-h4-category">Sul</span><span>★★★★★</span></p>
        </div>

        <form  action="https://formsubmit.co/antoniositoehl@gmail.com" method="POST">
          <input type="text" name="name" placeholder="Digite o seu nome" required>
          <input type="email" name="email" placeholder="Digite o seu email" required>
          <input type="number" name="numero" placeholder="Digite o seu numero" required>
          <button>Fazer reserva</button>
        </form>

      </div>
    </div>
  </div>
  )
}

export default Modal