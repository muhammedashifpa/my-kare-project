import {  createContext } from "react";
import { useState,useEffect,useMemo } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
    userData:{
        isLoggedIn:Boolean,
        isAdmin:Boolean,
        name:null,
        userName:null,
    },
    setUserData:()=>{},
    dataBase:[],
    setDataBase:()=>{},
    logOutHander:()=>{},
    LogInHandeler:()=>{}
});

export default AuthContext;

export const AuthGate = ({children}) => {
    //DataBase setup
    const navigate = useNavigate();
    const [dataBase,setDataBase] = useState(JSON.parse(localStorage.getItem('dataBase')));
    
    //Check localstorage has database and set database
    useEffect(()=>{
        const adminData = {
            name:'admin',
            userName:'admin',
            password:'admin'
        }
        
        if(!dataBase || dataBase === null){
            localStorage.setItem('dataBase',JSON.stringify([adminData]))
            console.log('created Database')
        };
    },[dataBase,]);


    //userDatabase setup
    const initialData =  {
            isLoggedIn:false,
            name:null,
            userName:null,
            isAdmin:false,
        }
        
    const [userData,setUserData] = useState(initialData);

    //Check localstorage has userData and set userData
    useEffect(()=>{
        const localUserData = JSON.parse(localStorage.getItem('userData'));
        if(localUserData){
            setUserData({
                isLoggedIn:localUserData.isLoggedIn,
                name:localUserData.name,
                userName:localUserData.userName,
                isAdmin:localUserData.userName === 'admin' && true,
            });
        }else{
            localStorage.setItem('userData',JSON.stringify(userData))
        }
    },[])
    
    
    const logOutHander = () => {
        setUserData(initialData)
        localStorage.setItem('userData',JSON.stringify(initialData))
        navigate('/')
    }

    const validateUserName = (userName,data) => {
        if(String(userName) === data.userName) return true
        return false
    }

    const validatePassword = (password,data) => {
        console.log(data)

        if(String(password) === data.password) return true
        return false

    }

    const LogInHandeler = (userName,password) => {
        for (let i = 0; i < dataBase.length; i++) {
            const isValidUserName = validateUserName(userName,dataBase[i]);
            console.log(dataBase[i])
            console.log(isValidUserName)
            if(isValidUserName){
                const isValidPassword = validatePassword(password,dataBase[i])
                if(isValidPassword){
                    const userValues = {
                        isLoggedIn:true,
                        name:dataBase[i].name,
                        userName:dataBase[i].userName,
                        isAdmin:dataBase[i].userName === 'admin' && true,
                    }
                    setUserData(userValues);
                    localStorage.setItem('userData',JSON.stringify(userValues))
                    alert('Login successfully as '+ dataBase[i].name)
                    userValues.isAdmin?navigate('dashboard'):navigate('page')
                    
                    return
                }
                alert('Invalid password');
                return
            }
        }
        alert('username not found')
    }


    const value = useMemo(() => ({
    userData,
    logOutHander,
    LogInHandeler,
    dataBase,
    setDataBase
    }), [userData,dataBase])
  
    return(
        <AuthContext.Provider
          value={value}>
            {children}
        </AuthContext.Provider>
    )
}