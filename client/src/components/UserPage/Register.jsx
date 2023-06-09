import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
const Register = (props) => {
    const navigate = useNavigate()
    const [errors, setErrors] =useState("");//this refers backs to the user.models conditions
    const [userReg, setUserReg] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const onChangeHandler = (e) => {
        setUserReg({...userReg, [e.target.name]: e.target.value})
    }
    // ! Need onsubmithandler for register
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/register', userReg, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                setErrors(err.response.data.errors);//this will send the errors to the setError 
            })
    }

    return (
        <div class="form-group">
            <form onSubmit={submitHandler} className=''>
            <h1 class=".text-dark" className='siteHeadings'>Register!</h1>
                <label className='register'>First Name:</label>
                <input className='register form-control' type="text" name='firstName' value={userReg.firstName} onChange={onChangeHandler}/>
                {errors.firstName && <span className="warn">{errors.firstName.message}</span>}
                <br/>
                <label className='register'>Last Name:</label>
                <input className='register form-control' type="text" name='lastName' value={userReg.lastName} onChange={onChangeHandler}/>
                {errors.lastName && <span className="warn">{errors.lastName.message}</span>}
                <br/>
                <label className='register'>Email:</label>
                <input className='register form-control' type="text" name='email' value={userReg.email} onChange={onChangeHandler}/>
                {errors.email && <span className="warn">{errors.email.message}</span>}
                <br/>
                <label className='register'>Password:</label>
                <input className='register form-control' type="password" name='password' value={userReg.password} onChange={onChangeHandler}/>
                {errors.password && <span className="warn">{errors.password.message}</span>}
                <br/>
                <label className='register'>Confirm Password:</label>
                <input className='register form-control' type="password" name='confirmPassword' value={userReg.confirmPassword} onChange={onChangeHandler}/>
                {errors.confirmPassword && <span className="warn">{errors.confirmPassword.message}</span>}
                <br/>
                <button className='btn btn-dark mt-3'>Register</button>
                <br />
                <Link className='text-white' to={'/login'}>Already have an account? click here to login</Link>
            </form>
        </div>
)}

export default Register;





















{/*
import React, {useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
const RegisterForm = props => {
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [confirmE, setConfirmE] = useState("")
    const [password, setPassword] = useState("")
    const [confirmP, setConfirmP] = useState("")
    // const [createdAt] = useState(Date())
    // const [updatedAt] = useState(Date())

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/user", { 
            first, 
            last, 
            email, 
            password 
        }
        ,{ withCredentials: true },)//if the credentials are true, then it will go to the then response and send you back to the / site

        .then((response) => {
            console.log(response);
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };
    return (
        <div>
            <h2>
                Register
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="first">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setFirst(e.target.value)}
                        value={first}
                    />
                    {errors.first ? <p>{errors.first.message}</p> : null}
                    
                    <label htmlFor="last">Last Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setLast(e.target.value)}
                        value={last}
                    />
                    {errors.last ? <p>{errors.last.message}</p> : null}
                    
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    {errors.email ? <p>{errors.email.message}</p> : null}
                    
                    <label htmlFor="confirmE">Confirm Email</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setConfirmE(e.target.value)}
                        value={confirmE}
                    />
                    {errors.confirmE ? <p>{errors.confirmE.message}</p> : null}

                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    {errors.password ? <p>{errors.password.message}</p> : null}

                    <label htmlFor="confirmP">Confirm Email</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setConfirmP(e.target.value)}
                        value={confirmP}
                    />
                    {errors.confirmP ? <p>{errors.confirmP.message}</p> : null}
                </div>
            </form>
        </div>
        
    )
}
export default RegisterForm

*/}