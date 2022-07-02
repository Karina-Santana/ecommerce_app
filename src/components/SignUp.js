import { useState, useEffect } from 'react'
import React from 'react'
import PasswordChecker from './PasswordChecker'
import { checkPass } from '../helper/checkPass'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Product from './Product'


function SignUp() {
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
                    <label htmlFor="">Email: </label>
                    <input type="text" />
                </form>
                <form action="">
                    <label htmlFor="">Password: </label>
                    <PasswordChecker
                        password={password}
                        handlePassword={handlePassword}
                        showPassword={showPassword}
                        inputType={inputType}
                    />
                </form>
                <nav>
                    <Link to='/login' className="login-btn">Save</Link>
                </nav>
                <Routes>
                    <Route path='/login' element={<Login />}></Route>
                </Routes>
            </div>
            <header className='header-home'></header>
        </div>
    )
}

export default SignUp