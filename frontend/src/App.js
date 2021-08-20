import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/layout/Home';
import Routes from './components/routes';
import Header from './components/common/Header';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { LOGOUT } from './actions/types';
import setAuthToken from './utils/setAuthToken';

import './App.css';
import styled from 'styled-components';

function App() {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    // store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  return (
    <Provider store={store}>
      <Router>

          <Switch>
            <LayoutWrapper>
              <Header />
              <Route exact path={'/'} component={Home} />
              <Route component={Routes} />
            </LayoutWrapper>
          </Switch>
      </Router>
    </Provider>
  );
}

const LayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App;
