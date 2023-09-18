import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Accommodation from './pages/Accommodation';
import About from './pages/About';

function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/accommodation" component={Accommodation} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}

export default Routes;