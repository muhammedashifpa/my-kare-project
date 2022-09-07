import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../srore/auth-context';

const Home = () => {
  const {userData} = useContext(AuthContext);
  return (
    <div className="p-5 text-center">
      {userData.isLoggedIn?
        <>
          <h1 className="mb-3">hello {userData.name}, Welcome to Mykare</h1>
        </>
        :
        <>
          <h1 className="mb-3">Welcome to Mykare</h1>
          <h4 className="mb-3">Your Health Care Journey Made </h4>
          <Link to={'/'}  classNameName="btn btn-primary" >Home</Link>
        </>
        }
  </div>
  )
}

export default Home