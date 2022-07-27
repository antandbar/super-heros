import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Header.css';
import logo from '../../assets/marvel_logo.png';



function Header({ className }) {
  return (
    /* imagen corporativa */
    <header className={classNames('header', className)}>
       <Link to="/">
        <img src={logo} className="header-logo" alt="logo-advertpop"></img>
      </Link> 
      <nav className="header-nav">
    
      </nav>
    </header>
  );
}

export default Header;
