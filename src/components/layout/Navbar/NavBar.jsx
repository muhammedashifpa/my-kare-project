import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import AuthContext from '../../../srore/auth-context';

const NavBar = () => {
  const {userData,logOutHander} = useContext(AuthContext);
  const {path} = useParams()
  return (
    <Nav className="navbar navbar-expand bg-light py-3">
      <div className="container">
        <Link to={'/'} className="navbar-brand">Mykare</Link>
        {userData.isLoggedIn&&
          <div className="d-flex align-items-center" >
            <h6 className="mb-0 me-4" >Hi, {userData.name}</h6>
            <button type='button' onClick={logOutHander} className="btn btn-primary" >Log out</button>
          </div>
        }
      </div>
    </Nav>
  )
}

export default NavBar

const Nav = styled.nav`
  .btn-link{
    text-decoration: none;
  }
`