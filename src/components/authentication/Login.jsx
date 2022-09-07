import React,{useContext, useState} from 'react'
import AuthContext from '../../srore/auth-context';

const Login = () => {
    const {LogInHandeler} = useContext(AuthContext);
    const initialData = {
        userName:'',
        password:''

    }

    const [data,setData] = useState(initialData);

    const ChangeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]:[e.target.value]
        })
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(data)
        LogInHandeler(data.userName,data.password);
    }

  return (
    <div className="login-box border border-dark px-3 px-md-5 py-3">
        <h5 className='text-center'>Login</h5>
        <form className='mt-5' method='post' onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="register-phone" className="form-label">Username</label>
                <input type="text" 
                   className="form-control" 
                   id="login-phone" 
                   placeholder="881234"
                   name='userName'
                   value={data.userName}
                   onChange={ChangeHandler}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="register-Password" className="form-label">Password</label>
                <input type="password" 
                   className="form-control" 
                   id="login-password" 
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
}

export default Login