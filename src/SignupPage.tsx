import axios from 'axios';
const SignupPage = () => {
  const signup = (): void => {
    const username = (
      document.querySelector('#usernameInput') as HTMLInputElement
    ).value;
    const password = (
      document.querySelector('#passwordInput') as HTMLInputElement
    ).value;
    axios({ url: '/api/signup', method: 'post', data: { username, password } });
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
      <button id="loginButton" onClick={signup}>
        Signup
      </button>
    </div>
  );
};

export default SignupPage;
