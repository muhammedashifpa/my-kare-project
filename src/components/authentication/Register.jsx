import React, { useContext } from 'react'
import AuthContext from '../../srore/auth-context';
import RegisterForm from './components/RegisterForm';

const Register = () => {

    const authData = useContext(AuthContext)
    
    const validate = (data) => {
        if(data.name === ''|| data.name.length <4){
            alert('The name can\'t be empty! or less than 4 charecter')
            return false;
        };

        if(data.userName === ''|| data.userName.length <4){
            alert('The phone number can\'t be empty!')
            return false;
        };

        for (let i = 0; i < authData.dataBase.length; i++) {
            if (authData.dataBase[i].userName === data.userName){
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

    const submitHandler = (e,data) => {
        e.preventDefault();
        const isValid = validate(data);

        if (isValid){
            authData.dataBase.push(data)
            localStorage.setItem('dataBase',JSON.stringify(authData.dataBase))
            alert('Registered successfully')
        }
    };

  return (
    <div className="register-box border border-dark px-3 px-md-5 py-3">
        <h5 className='text-center'>Register</h5>
        <RegisterForm submitHandler={submitHandler}/>
    </div>
  )
};

export default Register