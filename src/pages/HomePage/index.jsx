import './style.css';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { App } from '../../App.jsx';
import { Main } from '../../components/Main';

export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
