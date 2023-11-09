import { Outlet } from 'react-router-dom';
import './app.css';
import { Menu } from './components/Menu';
import hanka from './img/hanka.png';
import betty from './img/betty.png';
export const App = () => {
  return (
    <>
      <div className="app__container">
        <Menu />
      </div>
      <div className="page__container">
      <img className='page__betty'src={betty} alt="Betty" />
      <Outlet />
      <img className= 'page__hanka'src={hanka} alt="Hanka" />
      </div>
    </>
  );
};
