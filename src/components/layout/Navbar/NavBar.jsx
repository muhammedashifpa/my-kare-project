import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AuthContext from '../../../srore/auth-context';

const NavBar = () => {
  const {data} = useContext(AuthContext);
  return (
    <Nav className="navbar navbar-expand bg-light py-3">
      <div className="container">
        <Link to={'/'} className="navbar-brand">Mykare</Link>
        {data.isLoggedIn&&
          <div className="d-flex align-items-center" >
            <h6 className="mb-0 me-4" >Hi, Muhammed Ashif</h6>
            <Link to={''}  className="btn btn-primary" >Log out</Link>
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