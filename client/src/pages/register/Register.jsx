import React from 'react'
import './register.css'

export default function Register() {
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
                        <input type="text" placeholder="Username" className="loginInput" />
                        <input type="email" placeholder="Email" className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <input type="password" placeholder="Confirm Password" className="loginInput" />
                        <button className="loginButton">Sign up</button>
                        <button className="loginRegisterButton">Log into your account.</button>
                    </div>
                </div>
            </div> 
        </div>
    )
}
