import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'

const DetailProduct = (product) => {

    const params = useParams()
    const state = useContext(GlobalState)

    const [products] = state.productsAPI.products
    const [detailProduct,setDetailProduct] = useState(null)

    const addCart = state.userAPI.addCart

    /*useEffect(() => {
        if(params){
            products.forEach(product => {
                if(product._id === params.id){
                    setDetailProduct(product)
                }
            });
        }
    },[params,products])

    if(detailProduct.length ===0){
        return null
    }*/

    useEffect(() => {
        if (products && products.length > 0 && params.id) {
            const product = products.find(product => product._id === params.id)
            if (product) {
                setDetailProduct(product)
            }
        }
    }, [params.id, products])

    // If products is null, return early
    if (!products) {
        return <div>Loading...</div>
    }

    // If detailProduct is null or undefined, return early
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
            <p>Sold: {detailProduct.sold}</p>
            <Link to='/cart' className='cart' onClick={() => addCart(product)}>Buy Now</Link>
        </div>
    </div>
  )
}

export default DetailProduct

//<h6>{detailProduct.product_id}</h6>