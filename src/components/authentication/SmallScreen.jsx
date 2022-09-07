import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

const SmallScreen = () => {
    const [active,setActive] = useState('login');

    const changeHandler = (e) => {
        // console.log(e.target.na)
        setActive(e.target.name);
    }
  return (
    <div className="container py-5">
        <div className="btn-group d-flex mb-3" role="group" aria-label="Basic example">
            <button type="button" 
               className={`btn btn-primary ${ active === 'login' && 'active'} ` }
               name='login'
               onClick={changeHandler}
               >
                Login</button>
            <button type="button" 
               className={`btn btn-primary ${ active === 'register' && 'active'} ` }
               name='register' 
               onClick={changeHandler}
               >
                Register</button>
        </div>
        {active === 'login' && <Login/>}
        {active === 'register' &&<Register/>}
    </div>
  )
}

export default SmallScreen