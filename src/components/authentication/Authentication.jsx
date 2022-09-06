import React from 'react'
import Login from './Login'
import Register from './Register'

const Authentication = () => {
  return (
    <div className="container ">
        <div className="row py-5">
            <div className="col-7">
                <Register/>
            </div>
            <div className="col-5">
                <Login/>
            </div>
        </div>
    </div>
  )
}

export default Authentication

