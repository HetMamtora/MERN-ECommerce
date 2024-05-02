import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserAPI = (token) => {

    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [cart, setCart] = useState([])

    useEffect(() => {
        if(token){
            const getUser = async () => {
                try{
                    const res = await axios.get('/user/information',{
                        headers:{Authorization: token}
                    })

                    setIsLogged(true);
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)

                    console.log(res)
                }
                catch(err){
                    alert(err.response.data.msg)
                }
            }
            getUser()
        }
    },[token])

    const addCart = async(product) => {
        if(!isLogged){
            return alert("Please Log-In")
        }
        
        const check = cart.every(item => item.id !== product._id)

        if(check) {
            setCart([...cart, {...product, quantity:1}])
        }
        else{
            alert("Itme already added to cart.")
        }
    }

    return{
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
    }
}

export default UserAPI