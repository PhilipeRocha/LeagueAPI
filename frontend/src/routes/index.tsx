import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Summoner from '../pages/Summoner'


const Routes: React.FC = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/summoner/:id" component={Summoner} />
            </Switch>
            
        </BrowserRouter>
    )
    
}

export default Routes;