import React, {Component} from 'react'
import BookListItem from '../book-list-item/book-list-item'

class BookList extends Component {
  render() {

    const {books} = this.props

    return (
      <ul>
        {
          books.map((v, i) => {
            return (
              <li key={i}>
                <BookListItem book={v} />
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default BookList