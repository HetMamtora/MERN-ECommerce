import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserAPI = () => {

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
        }
    })

    return (
        <div>UserAPI</div>
    )
}

export default UserAPI