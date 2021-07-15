import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Inicio from './pages/Inicio';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact to="/" component={ Inicio } />
      </Switch>
    </div>
  );
}

export default App;
