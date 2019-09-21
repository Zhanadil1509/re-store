import React from 'react'
import './shopping-cart-table.css'

const ShoppingCartTable = () => {
  return (
    <div>
      <h2>Your Order</h2>
      <table>
        <thead>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th>Action</th>
        </thead>

        <tbody>
          <td>1</td>
          <td>Site</td>
          <td>2</td>
          <td>$40</td>
          <td>Action</td>
        </tbody>
      </table>

      <div className="total">
        Total:
      </div>
    </div>
  )
}

export default ShoppingCartTable
