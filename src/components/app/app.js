import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {HomePage, CartPage} from '../pages'
import {withBookstoreService} from '../../hoc'
import './app.css'
import {ShopHeader} from '../shop-header'

const App = () => {
  return (
    <main role={'main'} className={'container'}>
      <ShopHeader />
      <Switch>
        <Route path={'/cart'} component={CartPage} />
        <Route path={'/'} component={HomePage} />
      </Switch>
    </main>
  )
}

export default withBookstoreService()(App)