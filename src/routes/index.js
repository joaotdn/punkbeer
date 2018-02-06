import React from 'react'
import { Route, Switch } from 'react-router'
// Components
import Home from '../components/Home'
import SingleBeer from '../components/SingleBeer'

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/beers/:id" component={SingleBeer} />
    </Switch>
  </div>
)

export default routes
