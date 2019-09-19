import React from 'react'

const ShopHeader = ({numItems, total}) => {
  return (
    <header>
      <a href="/#" className={'logo'}>ReStore</a>
      <a href="/">
        <i className={'cart-icon'} />
        {numItems} items (${total})
      </a>
    </header>
  )
}

export default ShopHeader
