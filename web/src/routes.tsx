import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreateClinic from './pages/CreateClinic';

const Routes = () => {
  return (
    <BrowserRouter>
    <Route component={Home} path="/" exact />
    <Route component={CreateClinic} path="/create-clinic" />
    </BrowserRouter>
  );
}

export default Routes;