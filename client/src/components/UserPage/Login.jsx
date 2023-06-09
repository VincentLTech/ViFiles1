import React, {useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'
const Login = (props) => {
    const [errors, setErrors] = useState('')
    
    const navigate = useNavigate()
    const path = useLocation().pathname;
    const location = path.split("/")[1];
    
    console.log(location);

    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    })

    const onChangeHandler = (e) => {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }


    // ! onsubmit handler for login here

    const loginHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', userLogin, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div class="form-group RepositorySection">
            {errors && <span className='accent'>{errors}🦄</span>}

                <form onSubmit={loginHandler}>
                    <h1 class=".text-dark" className='siteTitles siteHeadings '>Login!</h1>

                        <label >Email:</label>
                        <input class="form-control" type="text" name='email' value={userLogin.email} onChange={onChangeHandler}/>

                        <label >Password:</label>
                        <input class="form-control" type="password" name='password' value={userLogin.password} onChange={onChangeHandler}/>

                        <button className='btn btn-dark mt-3'>Login</button>
                        <br />
                        {/* <Link to={'/register'}>Dont have an account? click here to sign up</Link> */}
                </form>
        </div>
)}

export default Login;






{/** 
import React, {useState} from 'react'
import axios from 'axios'

const LoginForm = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login',{ 
            email, 
            password
        }
        , { withCredentials: true })
            .then ( res => {
                console.log('user', res.data.user);
                window.location.href = "/"
            })
            .catch( err => {console.log(err.response.data); setErrors(err.response.data.errors)} )
    }
    const handleRegister = (e) => {
        window.location.href = "/register"
    }
    return (
        <div>
            <h2>
                Register
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    {errors.email ? <p>{errors.email.message}</p> : null}

                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    {errors.password ? <p>{errors.password.message}</p> : null}

                    <input type='submit' value='Submit'/>
                </div>
            </form>
            <form onSubmit={handleRegister}>
                <h1>New here? Click here.</h1>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default LoginForm
*/}