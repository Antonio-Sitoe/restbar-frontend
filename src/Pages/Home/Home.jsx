import React from 'react';
import MainCategory from '../../Components/MainCategory/MainCategory';
import MainContent from '../../Components/MainContent/MainContent';
import Spaced from '../../Components/Spaced/Spaced';
import Loading from '../../Helper/Loading';
import useFecth from '../../Hook/useFecth';
import { GetPratos } from '../../Services/Api';
import style from './Home.module.css';

const Home = () => {
  const { url, options } = GetPratos();
  const { data, error, loading, request } = useFecth();
  const [hide, setHide] = React.useState(false);

  function handleHideCategory() {
    setHide(!hide);
  }

  React.useEffect(() => {
    async function fecthPratos() {
      await request(url, options);
    }
    fecthPratos();
  }, []);

  if (error) return <ErrorComponent error={error} />;
  if (loading) return <Loading />;

  if (data)
    return (
      <main className={style.main}>
        <div className='container'>
          <Spaced style={style} handleHideCategory={handleHideCategory} />
          <div className={style.mainrow}>
            <MainCategory hide={hide}  GetPratos={GetPratos} request={request} style={style} />
            <MainContent data={data} style={style} />
          </div>
        </div>
      </main>
    );
  return null;
};

export default Home;
