import React from 'react'
import {withBookstoreService} from '../../hoc'

const App = ({bookstoreService}) => {
  console.log(bookstoreService.getBooks())
  const list = bookstoreService.getBooks().map((v, i) => {
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
  )
}

export default withBookstoreService()(App)