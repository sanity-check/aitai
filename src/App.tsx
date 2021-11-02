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
  const [data, setData] = React.useState<{
    username: string;
    userId: number;
    messages: Record<
      string,
      { content: string; sentiment: number; createdAt: Date }
    >;
  }>({
    username: 'tempyboi',
    userId: 69420,
    messages: {
      1: {
        content: 'dump ',
        sentiment: 1.0,
        createdAt: new Date('August 12 1990'),
      },
      13: {
        content: 'and',
        sentiment: 1.0,
        createdAt: new Date('November 3 1991'),
      },
      17: {
        content: 'scrub',
        sentiment: 1.0,
        createdAt: new Date('September 17 2021'),
      },
      4: {
        content: 'but',
        sentiment: 1.0,
        createdAt: new Date('December 12 2020'),
      },
      5: {
        content: 'also',
        sentiment: 1.0,
        createdAt: new Date('June 14 2019'),
      },
      8: { content: 'do', sentiment: 1.0, createdAt: new Date('July 7 2018') },
      11: {
        content: 'what',
        sentiment: 1.0,
        createdAt: new Date('May 29, 1996'),
      },
      10: {
        content: 'you',
        sentiment: 1.0,
        createdAt: new Date('May 29, 1969'),
      },
      2: {
        content: 'want',
        sentiment: 1.0,
        createdAt: new Date('January 11, 1994'),
      },
    },
  });

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
