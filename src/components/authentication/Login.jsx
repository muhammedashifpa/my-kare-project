import React,{useContext, useState} from 'react'
import AuthContext from '../../srore/auth-context';

const Login = () => {
    const {loginHandler} = useContext(AuthContext);
    const initialData = {
        phone:'',
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
        console.log(data)
        loginHandler()
    }

  return (
    <div className="login-box border border-dark px-5 py-3">
        <h5 className='text-center'>Login</h5>
        <form className='mt-5' method='post' onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="register-phone" className="form-label">Phone</label>
                <input type="number" 
                   className="form-control" 
                   id="login-phone" 
                   placeholder="881234"
                   name='phone'
                   value={data.phone}
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