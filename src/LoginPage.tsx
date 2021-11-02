import { Link } from 'react-router-dom';
import axios from 'axios';
const LoginPage = () => {
  const login = (): void => {
    const username = (
      document.querySelector('#usernameInput') as HTMLInputElement
    ).value;
    const password = (
      document.querySelector('#passwordInput') as HTMLInputElement
    ).value;
    axios({ url: '/api/login', method: 'post', data: { username, password } });
    return;
  };
  return (
    <div>
      <label htmlFor="username">
        username: <input type="text" id="usernameInput"></input>
      </label>
      <label htmlFor="password">
        password: <input type="password" id="passwordInput"></input>
      </label>
      <Link to="/main/0">
        <button id="loginButton" onClick={login}>
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button id="signUpButton">Sign Up Now</button>
      </Link>
    </div>
  );
};
export default LoginPage;
