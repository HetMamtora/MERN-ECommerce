import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ({product, isAdmin}) => {

    //console.log(product)

  return (
    <div className='product_card'>
      {
        isAdmin && <input type='checkbox' checked={product.checked} />
      }
        <img src={product.images.url} alt='' />

        <div className='product_box'>
            <h2 title={product.title}>{product.title}</h2>
            <span>₹{product.price}</span>
            <p>{product.description}</p>
        </div>

        <div className='row_btn'>
          {
            isAdmin ?
            <>
              <Link id='btn_buy' to={`#!`}>Delete</Link>
              <Link id='btn_view' to={`detail/${product._id}`}>Edit</Link>
            </>
            :
            <>
              <Link id='btn_buy' to={`#!`}>Buy</Link>
              <Link id='btn_view' to={`detail/${product._id}`}>View</Link>
            </>
          }
        </div>
    </div>
  )
}

export default ProductList