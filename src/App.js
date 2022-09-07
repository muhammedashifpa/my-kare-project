
import './App.css';
import Layout from './components/layout/Layout';
import {
  Routes,
  Route,
} from "react-router-dom";
import AuthContext from './srore/auth-context';
import { useContext } from 'react';
import Authentication from './components/authentication/Authentication';
import Dashbord from './components/dashbord/Dashbord';
import Home from './components/home/Home';
import Error404 from './components/utils/Error404';



function App() {
  const {userData} = useContext(AuthContext);
  
  return (
    <div className="App">
      <Layout>
          <Routes>
            <Route path='' element={
                !userData.isLoggedIn?
                <Authentication/>
                :
                <Home/>}/>

            {userData.isAdmin&&
              <Route path='dashboard' element={<Dashbord/>}/>
            }
            {userData.isLoggedIn &&
              <Route path='page' element={<Home/>}/>
            }
            <Route path='*' element={<Error404/>}/>
          </Routes>
      </Layout>
    </div>
  );
};

export default App;
