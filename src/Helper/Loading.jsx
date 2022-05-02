import React from 'react';
import style from './Loading.module.css';

const Loading = () => {
  return (
    <section className={style.loading}>
      <div>
        <div className={style.loadingElement}></div>
        <p>Buscando os dados</p>
      </div>
    </section>
  );
};

export default Loading;
