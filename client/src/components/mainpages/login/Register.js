import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const [user,setUser] = useState({
        name:'',
        email:'',
        password:''
    })

    const onChangeInput = e => {
        const {name, value} = e.target;
        setUser({...user,[name]:value})
    }

    const registerSubmit = async e => {
        e.preventDefault()
        try{
            await axios.post('/user/register',{...user})
            localStorage.setItem('firstRegister',true)
            window.location.href='/'
        }
        catch(err){
            alert(err.response.data.msg)
        }
    }

  return (
    <div className='register-page'>
        <form onSubmit={registerSubmit}>
            <input type='text' name='name' required placeholder='Enter Name' value={user.name} on onChange={onChangeInput} />
            <input type='email' name='email' required placeholder='Enter Email' value={user.email} onChange={onChangeInput}/>
            <input type='password' name='password' required placeholder='Enter Paswword' value={user.password} onChange={onChangeInput}/>

            <div className='row'>
                <button type='submit'>Register</button>
                <Link to='/login' className='link'>Login</Link>

            </div>
        </form>

    </div>
  )
}

export default Register