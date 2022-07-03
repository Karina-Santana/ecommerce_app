import { useState, useEffect } from 'react'
import React from 'react'
import PasswordChecker from './PasswordChecker'
import { checkPass } from '../helper/checkPass'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Product from './Product'




function SignUp({ user, setUser, submitSignUp }) {
    const [password, setPassword] = useState("")
    const [inputType, setInputType] = useState('password')

    const handlePassword = event => {
        let enteredPassword = event.target.value

        setPassword(enteredPassword)
    }

    const showPassword = event => {
        let checked = event.target.checked

        if (checked) {
            setInputType("text")
        } else {
            setInputType("password")
        }
    }

    return (
        <div>
            <div className='password-checker'>
                <form action="">
                    <label htmlFor="">Name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="form-control"
                        onChange={event => setUser({ ...user, name: event.target.value })}
                    />
                    <label htmlFor="">Email: </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        label="Email:"
                        required
                        onChange={event => setUser({ ...user, email: event.target.value })}
                    />
                    <label htmlFor="">Password: </label>
                    <PasswordChecker
                        password={password}
                        id="password"
                        handlePassword={handlePassword}
                        showPassword={showPassword}
                        inputType={inputType}
                        onChange={event => setUser({ ...user, password: event.target.value })}
                    />
                    <button type='submit'>Save2</button>
                </form>

                <nav>
                    <Link to='/login' className="signup-save-btn">Save</Link>
                    <Routes>

                    </Routes>

                </nav>
            </div>
        </div>
    )
}

export default SignUp