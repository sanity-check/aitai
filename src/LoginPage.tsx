import { Link } from 'react-router-dom';
import axios from 'axios';
const LoginPage = (props: {
  setUserId: (arg: string) => void;
  setIsLoggedIn: (arg: boolean) => void;
  setUsername: (arg: string) => void;
}) => {
  const login = (): void => {
    const username = (
      document.querySelector('#usernameInput') as HTMLInputElement
    ).value;
    const password = (
      document.querySelector('#passwordInput') as HTMLInputElement
    ).value;
    axios({
      url: '/api/user/login',
      method: 'post',
      data: { username, password },
    }).then((response) => {
      if (response.data.verified) {
        props.setIsLoggedIn(true);
        props.setUsername(response.data.user.username);
        props.setUserId(response.data.user.user_id);
      }
    });
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
