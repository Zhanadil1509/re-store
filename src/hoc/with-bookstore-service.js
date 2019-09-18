import React from 'react'
import {BookstoreServiceConsumer} from '../components/bookstore-service-context'

const withBookstoreService = () => (Wrapped) => (p) => {
  return (
    <BookstoreServiceConsumer>
      {
        (bookstoreService) => {
          return (
            <Wrapped
              {...p}
              bookstoreService={bookstoreService}
            />
          )
        }
      }
    </BookstoreServiceConsumer>
  )
}

export default withBookstoreService
