import './nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className='nav-list'>
        <Link to='/home'><li>Home</li></Link>
        <Link to='/tracker'><li>Tracker</li></Link>
      </ul>
    </nav>
  );
};

export default Nav;
