import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './features/home/HomePage';
import Path from './settings/path/Path';

const {
  ROOT_PATH,
  HOME_PATH,
} = Path;

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={HOME_PATH} component={HomePage}/>
        <Route path={ROOT_PATH} component={HomePage}/>
      </Switch>
    </BrowserRouter>
  )
}