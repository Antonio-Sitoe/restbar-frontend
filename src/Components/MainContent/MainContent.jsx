
const MainContent = ({ style, data }) => {
  return (
    <section className={style.mainContent}>
      <ul className={style.mainContentlist}>
        {data.map(({ image, name, category, id, price }) => {
          return (
            <li className={style.contentitem} key={id}>
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
    </section>
  );
};

export default MainContent;
