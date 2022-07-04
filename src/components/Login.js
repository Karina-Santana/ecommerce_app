import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Login({ setIsLogged }) {
    let navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [login, setLogin] = useState("")


    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        let enteredPassword = event.target.value
        setPassword(enteredPassword)
    }

    const handleLogin = event => {
        event.preventDefault()
        const data = { email, password }
        console.log(data)
        fetch('/api/sessions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => setIsLogged(true))
            .then(() => navigate("/", { replace: true }))
    }

    return (
        <div>
            <form onChange={handleEmail}>
                <label htmlFor="">Email: </label>
                <input type="text" required />
            </form>

            <form onChange={handlePassword}>
                <label htmlFor="">Password: </label>
                <input type="password" required />
            </form>

            <button type='submit' onClick={handleLogin}>Log In</button>
            <p>Are you not registered yet? <a href="/signup">Click Here To Sign Up</a></p>

        </div>
    )
}

export default Login