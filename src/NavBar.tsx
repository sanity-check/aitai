import * as types from './types';
import { Link } from 'react-router-dom';
import './navBar.scss';
const NavBar = (
  props: types.responseObj & {
    username: string;
    isLoggedIn: boolean;
    setIsLoggedIn: (arg: boolean) => void;
  }
) => {
  const logout = () => {
    props.setIsLoggedIn(false);
  };
  return (
    <div id="navBar" className="nav-bar">
      <button className="nav-toggle-button">Toggle Nav</button>
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
        <img
          className="logo-image"
          src="https://i.pinimg.com/600x315/a9/bb/59/a9bb59a0bf9fd472097c50d30c028086.jpg"
          alt="AITAI Brain Logo"
        />
      </div>
    </div>
  );
};
export default NavBar;
