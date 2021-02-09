import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import GlobalStyle from './styles/global';

import DefaultUI from './components/DefaultUI';

import Landing from './pages/Landing';
import Error404 from './pages/Error404';
import Final from './pages/Final';

function Routes() {

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      
      <Router>
        <Switch>
          <Route path="/" exact>
            <DefaultUI>
              <Landing />
            </DefaultUI>
          </Route>

          <Route path="/done" exact>
            <DefaultUI>
              <Final />
            </DefaultUI>
          </Route>
          
          <Route path="">
            <DefaultUI>
              <Error404 />
            </DefaultUI>
          </Route>
          
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default Routes;
