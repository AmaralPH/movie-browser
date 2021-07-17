import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path={"/movie/:id"} component={ MovieDetails } />
      </Switch>
    </div>
  );
}

export default App;
