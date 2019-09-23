import React, {Component} from 'react'
import BookListItem from '../book-list-item/book-list-item'
import {connect} from 'react-redux'
import {booksLoaded, booksRequested} from '../../actions'
import {withBookstoreService} from '../../hoc'
import './book-list.css'
import {Spinner} from '../spinner'

class BookList extends Component {

  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested } = this.props
    booksRequested()
    bookstoreService.getBooks()
      .then((data) => { booksLoaded(data) })
  }

  render() {

    const {books, loading} = this.props

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
      </>
    )
  }
}

const mapStateToProp = ({books, loading}) => {
    return {
      books, loading
    }
}

const mapDispatchToProps = {
  booksLoaded,
  booksRequested
}

export default withBookstoreService()(
  connect(mapStateToProp, mapDispatchToProps)(BookList)
)