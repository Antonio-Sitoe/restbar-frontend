import { GetPratosFiltered } from '../../Services/Api';

const content = ['Todos os pratos', 'Sul', 'Centro', 'Norte', 'Internacional'];

const MainCategory = ({ style, hide, request, GetPratos }) => {
  async function handleFilterData({ target }) {
    const filtered = GetPratosFiltered(target.innerText);
    const { url, options } = GetPratos();
    if (target.innerText === 'Todos os pratos') {
      await request(url, options);
    } else {
      await request(filtered.url, filtered.options);
    }
  }
  return (
    <section className={`${style.mainCategory} ${hide ? style.ative : ''}`}>
      <h3>Categorias</h3>
      <ul className={style.mainList}>
        {content.map((prato, i) => {
          return (
            <li key={i} onClick={handleFilterData}>
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
