import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Register from './PostData';
import ApiLogin from './ApiLogin';
import Home from './Home';


class Routing extends Component {
    render() {
        return (
           <BrowserRouter>
           <Switch>
           
               <Route exact={true} path="/" component={Register} />
               
               <Route path="/login" component={ApiLogin} />
            
               <Route  path="/home" component={Home} />
               


           </Switch>
           </BrowserRouter>
        )
    }
}
export default Routing;
