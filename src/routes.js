import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Login from './pages/Login';
import New from './pages/New';
import Dashboard from './pages/Dashboard';
import RegisterBasic from './pages/Register';
import Navbar from './components/navbar/navbar';
import Home from './pages/home';
//import Register from './pages/Register/index'; 
//<Route path="/register" component={Register} />

export default function Routes(){
    return (
       
        <BrowserRouter>
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/new" component={New}/>
            
            <Route path="/register" component={RegisterBasic} />
        </Switch>
        </BrowserRouter>
    );
}