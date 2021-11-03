import * as types from './types';
import { Link } from 'react-router-dom';
import './navBar.scss';
import logo from '../assets/logo.png';
const NavBar = (
  props: types.responseObj & {
    username: string;
    isLoggedIn: boolean;
    setIsLoggedIn: (arg: boolean) => void;
    toggleSideBar: () => void;
  }
) => {
  const logout = () => {
    props.setIsLoggedIn(false);
  };
  return (
    <div id="navBar" className="nav-bar">
      <button className="nav-toggle-button" onClick={props.toggleSideBar}>
        Toggle Nav
      </button>
      <div className="nav-right">
        <div>
          <div>Hello {props.username}</div>
          <div className="nav-buttons">
            <Link to="/">
              <button onClick={logout}>Logout</button>
            </Link>
            <button>Dark Mode</button>
            <button>Settings</button>
          </div>
        </div>
        <img className="logo-image" src={logo} alt="AITAI Brain Logo" />
      </div>
    </div>
  );
};
export default NavBar;
