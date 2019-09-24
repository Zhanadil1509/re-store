import React, {Component} from 'react'
import BookListItem from '../book-list-item/book-list-item'
import {connect} from 'react-redux'
import {fetchBooks} from '../../actions'
import {withBookstoreService} from '../../hoc'
import './book-list.css'
import {Spinner} from '../spinner'
import {ErrorIndicator} from '../error-indicator'

class BookList extends Component {

  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {

    const {books, loading, error} = this.props

    return (
      <>
        { loading
            ? <Spinner />
            : <ul className={'book-list'}>
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
        }
        { error ? <ErrorIndicator /> : null}
      </>
    )
  }
}

const mapStateToProp = ({books, loading, error}) => {
    return {
      books, loading, error
    }
}

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  }
}

export default withBookstoreService()(
  connect(mapStateToProp, mapDispatchToProps)(BookList)
)