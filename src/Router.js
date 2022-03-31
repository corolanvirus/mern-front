import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from './components/List/List';
import Presentation from './components/Presentation/Presentation'

export default function Router ()  {

    const Router = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Presentation} />
          <Route path='/list' component={List} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <Router />
      </Switch>
    );
  
}

