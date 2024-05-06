import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'
import axios from 'axios';

const BtnRender = ({ product }) => {

    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart
    const [deleted, setDeleted] = useState(false);

    const handleDelete = async () => {
        try{
            await axios.delete(`/api/products/${product._id}`);
            setDeleted(true);
            window.location.reload(); 
        }
        catch (error){
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className='row_btn'>
            {
                isAdmin ?
                    <>
                        <Link id='btn_buy' to={`#!`} onClick={handleDelete}>Delete</Link>
                        <Link id='btn_view' to={`/detail/${product._id}`}>Edit</Link>
                    </>
                    :
                    <>
                        <Link id='btn_buy' to={`#!`} onClick={() => addCart(product)}>Buy</Link>
                        <Link id='btn_view' to={`/detail/${product._id}`}>View</Link>
                    </>
            }
        </div>
    )
}

export default BtnRender