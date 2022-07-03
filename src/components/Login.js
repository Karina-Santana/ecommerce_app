import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Login(event) {
    event.preventDefault();
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [isLogged, setIsLogged] = useState(false)
    console.log(login)
    if (login !== null) {
        fetch('/api/sessions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(login)
        })
            .then(res => res.json())
            .then(user => {
                setLogin(user)
            })
    }
    const isLoggedIn = true
    setIsLogged(isLoggedIn)
    navigate('/')

    return (
        <div>
            <label htmlFor="">Email: </label>
            <input type="text" />
            <label htmlFor="">Password: </label>
            <input type="password" />
            <button>Log in</button>
            <Link to='/signup' variant="body2">
                {"Are you not registered yet? Sign Up!"}
            </Link>
        </div>

    )
}


export default Login