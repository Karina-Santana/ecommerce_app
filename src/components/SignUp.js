import { useState, useEffect } from 'react'
import React from 'react'
import PasswordChecker from './PasswordChecker'
import { Routes, Route, Link } from 'react-router-dom'


function SignUp() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [inputType, setInputType] = useState('password')

    const handleName = event => {
        setName(event.target.value)
    }

    const handleEmail = event => {
        setEmail(event.target.value)
    }

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

    const handleSubmit = event => {
        event.preventDefaul()
        fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        }).then(res => console.log(res))
    }

    return (
        <div>
            <div className='password-checker'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Name: </label>
                    <input
                        type='text'
                        name='name'
                        id="name"
                        required
                        onChange={handleName}
                    />

                    <label htmlFor="">Email: </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        label="Email:"
                        required
                        onChange={handleEmail}
                    />


                    <label htmlFor="">Password: </label>
                    <PasswordChecker
                        password={password}
                        id="password"
                        showPassword={showPassword}
                        handlePassword={handlePassword}
                        inputType={inputType}
                        onChange={handlePassword}
                    />
                    <button>Sign Up</button>
                </form>

                <nav>
                    <Link to='/login' onChange={() => handleSubmit()} className="signup-save-btn">Save</Link>
                </nav>
            </div>
        </div>
    )
}

export default SignUp