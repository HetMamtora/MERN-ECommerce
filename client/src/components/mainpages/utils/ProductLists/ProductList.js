import React from 'react'
import BtnRender from './BtnRender'

const ProductList = ({product,isAdmin}) => {

  return (
    <div className='product_card'>
        <img src={product.images.url} alt='' />

        <div className='product_box'>
            <h2 title={product.title}>{product.title}</h2>
            <span>₹{product.price}</span>
            <p>{product.description}</p>
        </div>

        <BtnRender product={product} />
    </div>
  )
}

export default ProductList