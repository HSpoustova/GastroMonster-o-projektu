import './style.css';
import { Main } from '../../components/Main';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <div className="head__headline">
          <h1 className="head__title">Projekt Gastro Monster</h1>
        </div>
      </header>
      <Main />
      <footer>
        <p>Alžběta Kačírková & Hana Spoustová ©2023</p>
      </footer>
    </div>
  );
};
