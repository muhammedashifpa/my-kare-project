import React from 'react'
import Login from './Login'
import Register from './Register'

const LargeScreen = () => {
  return (
    <div className="container ">
        <div className="row py-5">
            <div className="col-lg-7">
                <Register/>
            </div>
            <div className="col-lg-5">
                <Login/>
            </div>
        </div>
    </div>
  )
}

export default LargeScreen