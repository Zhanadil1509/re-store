import React from 'react'
import {Link} from 'react-router-dom'

const ShopHeader = ({numItems, total}) => {
  return (
    <header>
      <Link to="/#" className={'logo'}>ReStore</Link>
      <Link to="/">
        <i className={'cart-icon'} />
        {numItems} items (${total})
      </Link>
    </header>
  )
}

export default ShopHeader
