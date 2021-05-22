import React, { useContext, useRef } from 'react'
import './login.css'
import { login } from '../../api'
import { AuthContext } from '../../context/AuthContext'
import { CircularProgress } from '@material-ui/core'

export default function Login() {

    const email = useRef()
    const password = useRef()
    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        login({email: email.current.value, password: password.current.value}, dispatch)
    }
    console.log(user)
    return (
        <div className="login">
           <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Coolsocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Coolsocial.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" className="loginInput" required ref={email} />
                        <input type="password" placeholder="Password" className="loginInput" minLength="6" required ref={password} />
                        <button className="loginButton" disabled={isFetching}>{isFetching ? <CircularProgress color="white" size="20px" /> : 'Login'}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">{isFetching ? <CircularProgress color="white" size="20px" /> : 'Create a new account.'}</button>
                    </form>
                </div>
            </div> 
        </div>
    )
}
