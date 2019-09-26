import React from 'react'
import './shopping-cart-table.css'
import {connect} from 'react-redux'
import {
  bookAddedToCart,
  allBooksRemovedFromCart,
  bookRemovedFromCart
} from '../../actions'

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
  const renderRow = (v, i) => {
    return(
      <tr key={i}>
        <td>{i + 1 }</td>
        <td>{v.title}</td>
        <td>{v.count}</td>
        <td>{v.total}</td>
        <td>
          <button onClick={() => onIncrease(v.id)}>add</button>
          <button onClick={() => onDecrease(v.id)}>re</button>
          <button onClick={() => onDelete(v.id)}>del</button>
        </td>
      </tr>
    )
  }

  return (
    <div>
      <h2>Your Order</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>        
        { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  )
}

const mapStateToProp = ({ shoppingCart: {cartItems, orderTotal}}) => {
    return {
      items: cartItems,
      total: orderTotal
    }
}

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart
}

export default connect(mapStateToProp, mapDispatchToProps)(ShoppingCartTable)
