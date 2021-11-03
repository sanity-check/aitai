import { Link } from 'react-router-dom';
import axios from 'axios';
const LoginPage = (props: {
  setUserId: (arg: number) => void;
  setIsLoggedIn: (arg: boolean) => void;
  setUsername: (arg: string) => void;
  setLoginMessage: (arg: string | null) => void;
  loginMessage: string | null;
}) => {
  const login = (): void => {
    const username = (
      document.querySelector('#usernameInput') as HTMLInputElement
    ).value;
    const password = (
      document.querySelector('#passwordInput') as HTMLInputElement
    ).value;
    if (!username.length) {
      const usernameInput = document.querySelector(
        '#usernameInput'
      ) as HTMLInputElement;
      if (usernameInput) usernameInput.style.border = '1px solid red';
      props.setLoginMessage('Please fill out both fields');
    }
    if (!password.length) {
      const passwordInput = document.querySelector(
        '#passwordInput'
      ) as HTMLInputElement;
      if (passwordInput) passwordInput.style.border = '1px solid red';
      props.setLoginMessage('Please fill out both fields');
    }
    if (password.length && username.length) {
      axios({
        url: '/api/user/login',
        method: 'post',
        data: { username, password },
      })
        .then((response) => {
          if (response.data.verified) {
            props.setIsLoggedIn(true);
            props.setUsername(response.data.user.username);
            props.setUserId(response.data.user.user_id);
            console.log('user logged in');
          }
        })
        .catch(() => {
          props.setLoginMessage(
            'Incorrect username and password combination. Please try again!'
          );
          const inputs = document.querySelectorAll('input');
          inputs.forEach((el) => (el.style.border = '1px red solid'));
          console.log('user not logged in');
        });
    }
  };
  return (
    <div>
      <label htmlFor="username">
        username:{' '}
        <input
          type="text"
          id="usernameInput"
          onChange={(event) => {
            event.currentTarget.style.border = '1px solid black';
          }}
        ></input>
      </label>
      <label htmlFor="password">
        password:{' '}
        <input
          type="password"
          id="passwordInput"
          onChange={(event) => {
            event.currentTarget.style.border = '1px solid black';
          }}
        ></input>
      </label>

      <button id="loginButton" onClick={login}>
        Login
      </button>

      <Link to="/signup">
        <button id="signUpButton">Sign Up Now</button>
      </Link>
      {<p>{props.loginMessage}</p>}
    </div>
  );
};
export default LoginPage;
