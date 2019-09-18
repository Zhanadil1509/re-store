import React from 'react'

const BookListItem = ({book}) => {
  const {title, author} = book
  return (
    <>
      <p>{title}</p>
      <span>{author}</span>
    </>
  )
}

export default BookListItem
