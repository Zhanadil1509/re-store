import React, {Component} from 'react'
import BookListItem from '../book-list-item/book-list-item'
import {connect} from 'react-redux'
import {bookAddedToCart, fetchBooks} from '../../actions'
import {withBookstoreService} from '../../hoc'
import './book-list.css'
import {Spinner} from '../spinner'
import {ErrorIndicator} from '../error-indicator'

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {

    const {books, loading, error, onAddedToCart} = this.props

    return (
      <>
        { loading
            ? <Spinner />
            : <BookList books={books} onAddedToCart={onAddedToCart} />
        }
        { error ? <ErrorIndicator /> : null}
      </>
    )
  }
}

const BookList = ({books, onAddedToCart}) => {
    return(
      <ul className={'book-list'}>
        {
          books.map((v, i) => {
            return (
              <li key={i}>
                <BookListItem
                  book={v}
                  onAddedToCart={() => onAddedToCart(v.id)}
                />
              </li>
            )
          })
        }
      </ul>
    )
}

const mapStateToProp = ({books, loading, error}) => {
    return {
      books, loading, error
    }
}

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  }
}

export default withBookstoreService()(
  connect(mapStateToProp, mapDispatchToProps)(BookListContainer)
)