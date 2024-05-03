import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'

const DetailProduct = () => {

    const params = useParams()
    const state = useContext(GlobalState)

    const [products] = state.productsAPI.products
    //const [detailProduct,setDetailProduct] = useState([])
    const [detailProduct, setDetailProduct] = useState(null)

    /*useEffect(() => {
        if(params){
            products.forEach(product => {
                if(product._id === params.id){
                    setDetailProduct(product)
                }
            });
        }
    },[params,products])*/

    useEffect(() => {
        if (params.id && products && products.length > 0) {
            const product = products.find(product => product._id === params.id)
            if (product) {
                setDetailProduct(product)
            }
        }
    }, [params.id, products])

    /*if(detailProduct.length ===0){
        return null
    }*/
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
                <h6>{detailProduct.product_id}</h6>
            </div>

            <span>₹{detailProduct.price}</span>
            <p>{detailProduct.description}</p>
            <p>{detailProduct.content}</p>
            <p>Sold: {detailProduct.sold}</p>
            <Link to='/cart' className='cart'>Buy Now</Link>
        </div>
    </div>
  )
}

export default DetailProduct