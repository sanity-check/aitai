import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import Main from './Main';
import * as types from './types';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>('');
  const [userId, setUserId] = React.useState<number | null>(null);
  const [loginMessage, setLoginMessage] = React.useState<null | string>(null);
  const [signupMessage, setSignupMessage] = React.useState<null | string>(null);
  const [data, setData] = React.useState<
    {
      user_id: number;
      message_id: number;
      content: string;
      emotional_rating: number;
      created_at: Date;
    }[]
  >([]);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route
            path="/signup"
            render={() => {
              return isLoggedIn ? (
                <Redirect to="/main/0" />
              ) : (
                <SignupPage
                  setUserId={setUserId}
                  setUsername={setUsername}
                  setIsLoggedIn={setIsLoggedIn}
                  signupMessage={signupMessage}
                  setSignupMessage={setSignupMessage}
                />
              );
            }}
          />
          <Route
            path="/main/:id"
            render={(props: types.responseObj) => (
              <Main
                {...props}
                setData={setData}
                userId={userId}
                username={username}
                data={data}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            )}
          />
          <Route
            path="/"
            render={() => {
              return isLoggedIn ? (
                <Redirect to="/main/0" />
              ) : (
                <LoginPage
                  setData={setData}
                  setIsLoggedIn={setIsLoggedIn}
                  setUsername={setUsername}
                  setUserId={setUserId}
                  setLoginMessage={setLoginMessage}
                  loginMessage={loginMessage}
                />
              );
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
