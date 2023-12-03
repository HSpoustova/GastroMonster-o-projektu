import './style.css';
import monsterBaby from './img/babyMonsterHappy15-remove.png';
import monsterKid from './img/kidMonsterHappy15-remove.png';
import monsterAdult from './img/adultMonsteNeutral15-remove.png';

export const Main = () => {
  return (
    <>
      <div className="main__container">
        <div className="main__content">
          <p>
            Gastro Monster je edukační projekt zaměřený zejména na děti na
            základní škole. Jeho hlavním cílem je vzdělávat v oblasti výživy a
            výroby potravin.
          </p>

          <p>
            Mechanismem hry je postup skrze čtyři tematické oblasti otázek.
            Konkrétně se týkají masa a masných výrobků, mléka a mléčných
            výrobku, pekařských výrobků a oblast ovoce a zeleniny. Hráč má pro
            průchod políčkovou oblastí přidělený omezený počet potravin, které
            používá pro její průchod. Zároveň v případě správných odpovědí krmí
            monstrum, které roste od mláděte až po dospělého.
          </p>

          <p>
            Hra má různé prvky, jako je náhodné generování otázek, obměny nových
            otázek po špatných odpovědích, pohyb malého avatara na herním poli a
            komunikaci monstra během hry.
          </p>
        </div>
      </div>
      <div className="main__img">
        <div className="main__content---baby">
          <img src={monsterBaby} alt="Baby monstrum"></img>
        </div>

        <div className="main__content---kid">
          <img src={monsterKid} alt="Dětské monstrum"></img>
        </div>

        <div className="main__content---adult">
          <img src={monsterAdult} alt="Dospělé monstrum"></img>
        </div>
      </div>
    </>
  );
};
