import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'

const DetailProduct = () => {

    const params = useParams()
    const state = useContext(GlobalState)

    const [products] = state.productsAPI.products
    const [detailProduct,setDetailProduct] = useState([])
  return (
    <div>DetailProduct</div>
  )
}

export default DetailProduct