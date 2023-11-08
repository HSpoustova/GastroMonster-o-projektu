import { Link, Outlet } from 'react-router-dom';
import './app.css';

export const App = () => {
  return (
    <>
      <div className="app__container">
        <nav>
          <Link to="/">O pojektu</Link>
          <span> | </span>
          <Link to="/alzbetakacir">Alžběta Kačírková</Link>
          <span> | </span>
          <Link to="/hanaspoust">Hana Spoustová</Link>
        </nav>
      </div>
      <div className="page__container">
        <Outlet />
      </div>
    </>
  );
};
