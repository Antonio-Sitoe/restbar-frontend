const content = ['Todos os pratos', 'Sul', 'Centro', 'Norte', 'Internacional'];

const MainCategory = ({ style }) => {
  return (
    <section className={style.mainCategory}>
      <h3>Categorias</h3>
      <ul className={style.mainList}>
        {content.map((prato, i) => {
          return (
            <li key={i}>
              <label htmlFor={prato}>
                <input type='radio' name='category' id={prato} />
                {prato}
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MainCategory;
