import React from 'react'
import './login.css'

export default function Login() {
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
                    <div className="loginBox">
                        <input type="email" placeholder="Email" className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a new account.</button>
                    </div>
                </div>
            </div> 
        </div>
    )
}
