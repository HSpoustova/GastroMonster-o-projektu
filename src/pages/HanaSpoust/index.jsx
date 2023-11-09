import './style.css';
import HankaFoto from './img/Hanka.jpg';

export const HanaSpoust = () => {
  return (
    <>
      <div className="hanka_container">
        <h1>Hanka Spoustová</h1>

        <div className="hanka__img">
          <img src={HankaFoto} alt="Hana Spoustová"></img>

          <p>
            Jsem mladá, perspektivní komunikativní osoba se smyslem pro humor,
            programování a pro detail. Kouknout na to se můžete na
            <strong>
              <a href="https://github.com/HSpoustova"> můj GitHub.</a>
            </strong>
          </p>
        </div>
      </div>
    </>
  );
};
