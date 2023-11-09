import './style.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import myImage from './img/hamburger.png';
export const Menu = () => {
  const [menu, setMenu] = useState(false)
  const handleClick = () => {
    const newState = (!menu)
    setMenu(newState)
  }
  return(
  <div className='menu'>
  <div className='hamburger'>
     <img className='hamburger' onClick={handleClick} src={myImage} alt="hamburgerMenu"></img>
  </div>
  { menu ? <nav>
    <Link to="/">O pojektu</Link>
    <span> | </span>
    <Link to="/alzbetakacir">Alžběta Kačírková</Link>
    <span> | </span>
    <Link to="/hanaspoust">Hana Spoustová</Link>
  </nav> : null}
 </div>
)};
