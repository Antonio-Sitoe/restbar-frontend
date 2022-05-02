import React from 'react';
import MainCategory from '../../Components/MainCategory/MainCategory';
import MainContent from '../../Components/MainContent/MainContent';
import Spaced from '../../Components/Spaced/Spaced';
import style from './Home.module.css';

const Home = () => {
  return (
    <main className={style.main}>
      <div className='container'>
        <Spaced style={style} />
        <div className={style.mainrow}>
          <MainCategory style={style} />
          <MainContent style={style} />
        </div>
      </div>
    </main>
  );
};

export default Home;
