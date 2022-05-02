import React from 'react';

const MainContent = ({ style }) => {
  return (
    <section className={style.mainContent}>
      <ul className={style.mainContentlist}>
        <li className={style.contentitem}>
          <img
            src='https://foodadvisor-api.strapi.io/uploads/05b96a46ea2b4b7bb045bd8b000bedb3.jpeg'
            alt='image of food'
          />
          <div className={style.contentinfo}>
            <h4>
              <span>Caril de Camarão</span>
              <span>200 MT</span>
            </h4>
            <p>
              Category:
              <span>Sul</span>
              <span>★★★★★</span>
            </p>
          </div>
        </li>
        <li className={style.contentitem}>
          <img
            src='https://foodadvisor-api.strapi.io/uploads/05b96a46ea2b4b7bb045bd8b000bedb3.jpeg'
            alt='image of food'
          />
          <div className={style.contentinfo}>
            <h4>
              <span>Caril de Camarão</span>
              <span>200 MT</span>
            </h4>
            <p>
              Category:
              <span>Sul</span>
              <span>★★★★★</span>
            </p>
          </div>
        </li>
        <li className={style.contentitem}>
          <img
            src='https://foodadvisor-api.strapi.io/uploads/05b96a46ea2b4b7bb045bd8b000bedb3.jpeg'
            alt='image of food'
          />
          <div className={style.contentinfo}>
            <h4>
              <span>Caril de Camarão</span>
              <span>200 MT</span>
            </h4>
            <p>
              Category:
              <span>Sul</span>
              <span>★★★★★</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default MainContent;
