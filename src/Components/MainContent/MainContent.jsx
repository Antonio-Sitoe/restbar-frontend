import React from 'react';
import Modal from '../Modal/Modal';
const MainContent = ({ style, data }) => {
  const [content, setContent] = React.useState({});
  const [isOpen, setIsOpen] = React.useState(false);

  function handleOpenModal(image, name, category, price) {
    setContent({ image, name, category, price });
    setIsOpen(!isOpen);
  }

  return (
    <section className={style.mainContent}>
      <ul className={style.mainContentlist}>
        {data.map(({ image, name, category, id, price }) => {
          return (
            <li
              className={style.contentitem}
              key={id}
              onClick={() => handleOpenModal(image, name, category, price)}
            >
              <img src={image} alt='image of food' />
              <div className={style.contentinfo}>
                <h4>
                  <span>{name}</span>
                  <span>{price} MT</span>
                </h4>
                <p>
                  Category:
                  <span>{category}</span>
                  <span>★★★★★</span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      {isOpen && <Modal setIsOpen={setIsOpen} style={style}content={content} />}
    </section>
  );
};

export default MainContent;
