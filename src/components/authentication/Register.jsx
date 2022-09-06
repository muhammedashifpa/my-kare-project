import React, { useContext, useEffect, useMemo, useState } from 'react'
import AuthContext from '../../srore/auth-context';

const Register = () => {

    const authData = useContext(AuthContext)
    const dataBase = authData.data;
    console.log(dataBase)
    
    // useEffect(()=>{
    //     if(dataBase.length === 0){
    //         localStorage.setItem('dataBase',JSON.stringify(dataBase))
    //     };
    //     console.log(dataBase);
    // },[dataBase]);
    
    const initialData = {
        name:'',
        userName:'',
        password:''

    };

    const [data,setData] = useState(initialData);

    const ChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    };
    
    const validate = (data) => {
        if(data.name === ''|| data.name.length <4){
            alert('The name number can\'t be empty! or less than 4 charecter')
            return false;
        };

        if(data.userName === ''|| data.userName.length <4){
            alert('The phone number can\'t be empty!')
            return false;
        };

        for (let i = 0; i < dataBase.length; i++) {
            if (dataBase[i].userName === data.userName){
                alert('The username you entered is already exist!')
                return false;
            }
        }
        if(data.password === '' || data.password.length <4){
            alert('The password must be more than 4 digit!')
            return false;
        };
        return true;
    };

    const submitHandler = (e) => {
        console.log(data)
        e.preventDefault();
        const isValid = validate(data);

        if (isValid){
            dataBase.push(data)
            localStorage.setItem('dataBase',JSON.stringify(dataBase))
            console.log(dataBase)
            alert('Registered successfully')
        };
    };

  return (
    <div className="register-box border border-dark px-5 py-3">
        <h5 className='text-center'>Register</h5>
        <form className='mt-5' method='post' onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="register-name" className="form-label">Name</label>
                <input type="text" 
                   className="form-control"
                   id="register-name" 
                   placeholder="name"
                   name='name'
                   value={data.name}
                   onChange={ChangeHandler} 
                   />
            </div>
            <div className="mb-3">
                <label htmlFor="register-phone" className="form-label">Username</label>
                <input type="text"
                   className="form-control"
                   id="register-usernmae"
                   placeholder="username"
                   name='userName'
                   value={data.userName}
                   onChange={ChangeHandler} 
                   />
            </div>
            <div className="mb-3">
                <label htmlFor="register-Password" className="form-label">Password</label>
                <input 
                   type="password"
                   className="form-control" 
                   id="register-password" 
                   placeholder="password"
                   name='password'
                   value={data.password} 
                   onChange={ChangeHandler} 
                   />
            </div>
            <div className="col-auto text-center">
                <button type="submit" className="btn btn-primary mb-3 px-5">Submit</button>
            </div>
        </form>
    </div>
  )
};

export default Register