import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';
import Home from './pages/home';
import RegisterBasic from './pages/Register/RegisterBasic';

import Register from './pages/Register/index';

export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/new" component={New}/>
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/basic" component={RegisterBasic} />
        </Switch>
        </BrowserRouter>
    );
}