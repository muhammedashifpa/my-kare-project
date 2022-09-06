import { createContext } from "react";


const AuthContext = createContext({
    data:{
        isLoggedIn:Boolean,
        isAdmin:Boolean,
        name:null,
        userName:null,
        dataBase:[]
    },
    logOutHander:()=>{},
    LogInHandeler:()=>{}
});

export default AuthContext;