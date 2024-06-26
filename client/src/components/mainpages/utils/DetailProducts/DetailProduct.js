import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'

const DetailProduct = (product) => {

    const params = useParams()
    const state = useContext(GlobalState)

    const [products] = state.productsAPI.products
    const [detailProduct,setDetailProduct] = useState(null)

    const addCart = state.userAPI.addCart

    useEffect(() => {
        if (products && products.length > 0 && params.id) {
            const product = products.find(product => product._id === params.id)
            if (product) {
                setDetailProduct(product)
            }
        }
    }, [params.id, products])

    if (!products) {
        return <div>Loading...</div>
    }

    if (!detailProduct) {
        return null
    }


  return (
    <div className='detail'>
        <img src={detailProduct.images.url} alt='' />
        <div className='box-detail'>
            <div className='row'>
                <h2>{detailProduct.title}</h2>
                
            </div>

            <span>₹{detailProduct.price}</span>
            <p>{detailProduct.description}</p>
            <p>{detailProduct.content}</p>
            <Link to='/cart' className='cart' onClick={() => addCart(product)}>Buy Now</Link>
        </div>
    </div>
  )
}

export default DetailProduct