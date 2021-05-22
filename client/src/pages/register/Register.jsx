import axios from 'axios'
import React, { useRef } from 'react'
import { useHistory } from 'react-router'
import './register.css'

export default function Register() {

    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    const username = useRef()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(confirmPassword.current.value !== password.current.value) {
            confirmPassword.current.setCustomValidity("Passwords do not macth")
        }else {

            const user = {
                email: email.current.value, 
                password: password.current.value,
                username: username.current.value
            }
            try {
                const res = await axios.post(`/auth/register`, user)
                history.push("/login")
            } catch (error) {
                console.log(error.response.data)
            }
        }
    }

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
                        <input type="text" placeholder="Username" className="loginInput" required ref={username}/>
                        <input type="email" placeholder="Email" className="loginInput" required ref={email}/>
                        <input type="password" placeholder="Password" className="loginInput" required ref={password}/>
                        <input type="password" placeholder="Confirm Password" className="loginInput" required ref={confirmPassword}/>
                        <button className="loginButton" type="submit">Sign up</button>
                        <button className="loginRegisterButton">Log into your account.</button>
                    </form>
                </div>
            </div> 
        </div>
    )
}
