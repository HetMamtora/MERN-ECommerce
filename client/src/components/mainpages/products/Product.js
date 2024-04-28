import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import ProductList from '../utils/ProductLists/ProductList'

const Product = () => {

  const state = useContext(GlobalState)
  const [products] = state.productAPI.products

  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='products'>
      {
        products.map(product => {
          return <ProductList key={product._id} product={product} />
        })
      }
    </div>
  )
}

export default Product