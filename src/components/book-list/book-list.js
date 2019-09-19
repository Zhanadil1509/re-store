import React, {Component} from 'react'
import BookListItem from '../book-list-item/book-list-item'
import {connect} from 'react-redux'
import {booksLoaded} from '../../actions'
import {withBookstoreService} from '../../hoc'
import './book-list.css'

class BookList extends Component {

  componentDidMount() {
    const { bookstoreService } = this.props
    const data = bookstoreService.getBooks()
    this.props.booksLoaded(data)
  }

  render() {

    const {books} = this.props

    return (
      <ul className={'book-list'}>
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

const mapStateToProp = (state) => {
    return {
      books: state.books
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      booksLoaded: (newBooks) => {dispatch(booksLoaded(newBooks))}
    }
}

export default withBookstoreService()(
  connect(mapStateToProp, mapDispatchToProps)(BookList)
)