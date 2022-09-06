
import './App.css';
import Layout from './components/layout/Layout';
import {
  Routes,
  Route,
} from "react-router-dom";
import AuthContext from './srore/auth-context';
import { useState,useMemo,useEffect } from 'react';
import Authentication from './components/authentication/Authentication';



function App() {
  
  const [dataBase,setDataBase] = useState(JSON.parse(localStorage.getItem('dataBase')))
  
  useEffect(()=>{
    const adminData = {
      name:'admin',
      userName:'admin',
      password:'admin'
    }
    console.log(dataBase)
    if(!dataBase || dataBase === null){
        localStorage.setItem('dataBase',JSON.stringify([adminData]))
        console.log('created Database')
    };
    console.log(dataBase);
  },[dataBase,]);

  const initialData = {
    isLoggedIn:false,
    name:null,
    id:null
  }
  const [data,setData] = useState(initialData);

  const logOutHander = () => {
    console.log('lougout successfull!')
  }

  const LogInHandeler = (phone,password) => {

    const dataBase = localStorage.getItem('dataBase');
    
    for (let i = 0; i < dataBase.length; i++) {
      if (dataBase[i].phone === phone){
      }
    }

  }

  const value = useMemo(() => ({
    data,
    logOutHander,
    LogInHandeler
    }), [data])
  
  return (
    <div className="App">
      <AuthContext.Provider 
        value={value}
      >
        <Layout>
          {!data.isLoggedIn && <Authentication/>}
          {data.isLoggedIn &&
            <Routes>
              <Route path='page/dashboard' element={<div>home</div>}/>
            </Routes>
          }
        </Layout>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
