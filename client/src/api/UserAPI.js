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
                    const res = await axios.get('/user/infor',{
                        headers:{Authorization: token}
                    })
                }
                catch(err){
                    alert(err.response.data.msg)
                }
            }
            getUser()
        }
    },[token])

    return{
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
    }
}

export default UserAPI