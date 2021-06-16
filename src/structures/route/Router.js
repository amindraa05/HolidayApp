import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from '../../page/Home'
import Games from '../../page/Games'
import Movies from '../../page/Movies'
import Books from '../../page/Books'

function Router() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/games" component={Games}></Route>
                <Route path="/movies" component={Movies}></Route>
                <Route path="/books" component={Books}></Route>
            </Switch>
        </div>
    )
}

export default Router
