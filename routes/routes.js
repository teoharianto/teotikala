import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/index';
import Bistro from '../pages/bistro';
import Catering from '../pages/catering';
import About from '../pages/about';
import Contact from '../pages/contact';

const Routes = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/bistro" component={Bistro} />
      <Route path="/catering" component={Catering} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );

  
export default Routes;