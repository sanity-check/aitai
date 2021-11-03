import axios from 'axios';
import './loginPage.scss';
const SignupPage = (props: {
  signupMessage: string | null;
  setSignupMessage: (arg: string) => void;
  setIsLoggedIn: (arg: boolean) => void;
  setUsername: (arg: string) => void;
  setUserId: (arg: number) => void;
}) => {
  const signup = (): void => {
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
      props.setSignupMessage('Please fill out both fields');
    }
    if (!password.length) {
      const passwordInput = document.querySelector(
        '#passwordInput'
      ) as HTMLInputElement;
      if (passwordInput) passwordInput.style.border = '1px solid red';
      props.setSignupMessage('Please fill out both fields');
    }
    if (password.length && username.length) {
      axios({
        url: '/api/user/signup',
        method: 'post',
        data: { username, password },
      })
        .then((response) => {
          props.setIsLoggedIn(true);
          props.setSignupMessage('Succesfully signed up, redirecting!');
          props.setUsername(username);
          props.setUserId(response.data.userId);
        })
        .catch(() => {
          props.setSignupMessage(
            'Unable to create new user. There may already be an account with this username'
          );
        });
    }
  };
  return (
    <div className="login-signup-container">
      <input
        placeholder="username"
        type="text"
        id="usernameInput"
        onChange={(event) => {
          event.currentTarget.style.border = '1px solid black';
        }}
      ></input>

      <input
        placeholder="password"
        type="password"
        id="passwordInput"
        onChange={(event) => {
          event.currentTarget.style.border = '1px solid black';
        }}
      ></input>
      <button id="loginButton" onClick={signup}>
        Signup
      </button>
      {<p>{props.signupMessage}</p>}
    </div>
  );
};

export default SignupPage;
