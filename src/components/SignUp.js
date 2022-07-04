import { useState, useEffect } from 'react'
import React from 'react'
import PasswordChecker from './PasswordChecker'
import { useNavigate } from 'react-router-dom'


function SignUp() {
    let navigate = useNavigate()
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
        event.preventDefault()
        const data = { name, email, password }
        console.log(data)
        fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => navigate("/login", { replace: true }))
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
                    <button type='submit'>Sign Up</button>
                </form>
                <p>Already have an account? <a href="/login">Click Here To Log In</a></p>
            </div>
        </div>
    )
}

export default SignUp
