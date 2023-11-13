import React from "react";
import Inicio from "./component/Inicio";
import ComprarEntrada from "./component/ComprarEntrada";

import {
    BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';

export function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Inicio}/>
                <Route path='/comprarTicket' component={ComprarEntrada}/>

            </Switch>
        </Router>

    );
}  