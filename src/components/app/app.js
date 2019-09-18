import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {HomePage, CartPage} from '../pages'
import {withBookstoreService} from '../../hoc'

const App = () => {
  /*const list = bookstoreService.getBooks().map((v, i) => {
    return (
      <li key={i}>
        <p>Author: {v.title}</p> <span>Book: {v.author}</span>
      </li>
    )
  })
  return (
    <div>
      <h1>Re Store</h1>
      <ul>
        {list}
      </ul>
    </div>
  )*/
  return (
    <Switch>
      <Route path={'/cart'} component={CartPage} />
      <Route path={'/'} component={HomePage} />
    </Switch>
  )
}

export default withBookstoreService()(App)