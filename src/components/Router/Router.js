import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from "../Home/Home";
import Login from "../Login/Login";
import AddEmployee from "../AddEmployee/AddEmployee";
import Leave from "../Leave/Leave";


const Routers = () => {

    return (

        <Router>


            <Switch>

                <Route path={"/home"} component={Home}/>
                <Route path={"/addEmployee"} component={AddEmployee}/>
                <Route path={"/leaveApp"} component={Leave}/>
                <Route path={"/"} component={Login} exact/>


            </Switch>

        </Router>

    );
};

export default Routers;
