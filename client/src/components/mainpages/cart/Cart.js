import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'

const Cart = () => {
    const state = useContext(GlobalState)
    const [cart] = state.userAPI.cart

    if(cart.length === 0){
        return <h2 style={{textAlign:"center",fontSize:"3rem"}}>Cart Empty</h2>
    }

  return (
    <div>
        {
            cart.map(product => (
                <div className='detail'>
                    <img src={product.images.url} alt=''/>
      
                    <div className='box-detail'>
                        <div className='row'>
                            <h2>{product.title}</h2>
                            <h6>{product.product_id}</h6>
                        </div>
        
                        <span>₹{product.price}</span> 
                        <p>{product.description}</p> 
                        <p>{product.content}</p>
                        <p>Sold:{product.sold}</p>
        
                        <Link to='/cart' className='cart'>Buy Now</Link>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Cart

/*import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';
import { Link } from 'react-router-dom';

const Cart = () => {
    const state = useContext(GlobalState);
    const [cart] = state.userAPI.cart;

    if (cart.length === 0) {
        return <h2 style={{ textAlign: "center", fontSize: "3rem" }}>Cart Empty</h2>;
    }

    return (
        <div>
            {cart.map((product) => {
                console.log('Product:', product);
                return (
                    <div className='detail' key={product._id}>
                        {product.product && product.product.images && product.product.images.url && (
                            <img src={product.product.images.url} alt='' />
                        )}

                        <div className='box-detail'>
                            <div className='row'>
                                {product.product && product.product.title && (
                                    <h2>{product.product.title}</h2>
                                )}
                                {product.product_id && <h6>{product.product_id}</h6>}
                            </div>

                            {product.product && product.product.price && (
                                <span>${product.product.price}</span>
                            )}
                            {product.description && <p>{product.description}</p>}
                            {product.content && <p>{product.content}</p>}
                            {product.sold && <p>Sold: {product.sold}</p>}

                            <Link to='/cart' className='cart'>Buy Now</Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;*/

/*import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import { Link } from 'react-router-dom'
const Cart = () => {
  const state = useContext(GlobalState)
  const [cart] = state.userAPI.cart

  console.log(cart);


  if(cart.length === 0)
  return <h2 style={{textAlign:"center",fontSize:"5rem"}}>Cart Empty</h2>
  return (
    <div>
      {cart.map(product => (
        <div className='detail'>
      <img src={product.images.url} alt=''/>
      <div className='box-detail'>
        <div className='row'>
            <h2>{product.title}</h2>
            <h6>{product.product_id}</h6>
        </div>
        <span>${product.price}</span> 
        <p>{product.description}</p> 
        <p>{product.content}</p>
        <p>Sold:{product.sold}</p>
        <Link to='/cart' className='cart'>Buy Now</Link>
      </div>
    </div>
      ))}
    </div>
  )
}

export default Cart*/