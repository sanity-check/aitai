import * as types from './types';
import { Link } from 'react-router-dom';
const NavBar = (
  props: types.responseObj & {
    username: string;
    isLoggedIn: boolean;
    setIsLoggedIn: (arg: boolean) => void;
  }
) => {
  //welcome message
  //user profile
  //drop down -> Dark mode
  //styling/logos
  const logout = () => {
    props.setIsLoggedIn(false);
  };
  return (
    <div id="navBar">
      <img
        className="logo"
        src="https://i.pinimg.com/600x315/a9/bb/59/a9bb59a0bf9fd472097c50d30c028086.jpg"
        alt="AITAI Brain Logo"
      />
      Hello {props.username}
      <Link to="/">
        <button onClick={logout}>Logout</button>
      </Link>
      <button>Dark Mode</button>
      <button>Settings</button>
    </div>
  );
};
export default NavBar;
