import { useEffect, useState } from 'react'
import axios from 'axios'

const ProductAPI = () => {

    const [products, setProducts] = useState([])

    const getProducts = async() => {
        const res = await axios.get('/api/products')
        //console.log(res.data);
        console.log(res.data.products)
        //setProducts(res.data.products)

        /*try {
          const res = await axios.get('/api/products')
          console.log(res);
          console.log(res.data);
          console.log(res.data.products); // Correct logging
          //setProducts(res.data.products);
      } catch (error) {
          console.error("Error fetching products:", error);
      }*/
    }

    useEffect(() => {
        getProducts()
    },[])

  return {
    products : [products,setProducts]
  }
}

export default ProductAPI

/*import { useEffect, useState } from 'react'
import axios from 'axios'

const ProductAPI = () => {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
      try {
        const res = await axios.get('/api/products')
        console.log("Response status:", res.status) // Log response status
        console.log("Response headers:", res.headers) // Log response headers
        console.log("Response data:", res.data) // Log entire response data
        console.log("Type of products:", typeof res.data.products) // Log type of products
        if (Array.isArray(res.data.products) && res.data.products.length > 0) {
            setProducts(res.data.products)
        } else {
            console.error("No products found in response data or products is not an array")
        }
    } catch (error) {
        console.error("Error fetching products:", error)
    }
    }

    useEffect(() => {
        getProducts()
    },[])

    console.log("Products in state:", products) // Log products state

    return {
        products: [products, setProducts]
    }
}

export default ProductAPI*/
