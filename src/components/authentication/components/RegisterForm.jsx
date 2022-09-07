import React,{useState} from 'react'

const RegisterForm = ({submitHandler}) => {
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
  return (
    <form className='mt-5' method='post' onSubmit={(e)=>submitHandler(e,data)}>
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
  )
}

export default RegisterForm