import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import UserPage from '../../pages/UserPage/UserPage';

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/user/:id" component={UserPage}/>
            </Switch>
        </main>
    );
}

export default Main;
