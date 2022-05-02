import React from 'react';
import img from '../../img/filter.png';

const Spaced = ({ style, handleHideCategory }) => {
  return (
    <div className={style.spaced}>
      <span className={style.spanBtn} onClick={handleHideCategory}>
        <img src={img} alt='image of filter' />
        Filtros
      </span>
      <h2 className={style.mainTitle} data-main='title'>
        Os Melhores Pratos do pais e de fora
      </h2>
    </div>
  );
};

export default Spaced;
