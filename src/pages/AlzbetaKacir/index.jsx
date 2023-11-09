import './style.css';
import BettyFoto from './img/betty.jpeg';

export const AlzbetaKacir = () => {
  return (
    <>
      <div className="betty_container">
        <h1>Alžběta Kačírková</h1>

        <div className="betty__img">
          <img src={BettyFoto} alt="Betty Kačírková"></img>

          <p>
            Jsem veselá holka a zamilovala jsem se do programování. Ráda
            sportuji, vařím, hraji počítačové hry, čtu a poslouchám kvalitní
            oldies hudbu. Mrkni na
            <strong>
              <a href="https://github.com/BettyKac"> můj GitHub.</a>
            </strong>
          </p>
        </div>
      </div>
    </>
  );
};
