import React, { useContext } from 'react'
import { RiMenuFill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { GlobalState } from '../../GlobalState'

const Header = () => {

    const state = useContext(GlobalState)
    console.log(state)

  return (
    <header>
        <div className='menu'>
            <RiMenuFill size={25}/>
        </div>

        <div className='logo'>
            <h1>
                <Link to='/'>Ecommerce Shop</Link>
            </h1>
        </div>

        <ul>
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/login'>Login or Register</Link></li>

            <li>
                <RiCloseFill size={25} />
            </li>
        </ul>

        <div className='cart-icon'>
            <span>0</span>
            <Link><RiShoppingCartFill size={25}/></Link>
        </div>
    </header>
  )
}

export default Header