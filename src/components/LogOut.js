import { useNavigate } from 'react-router-dom'
import isLogged from './Login'

function LogOut({ setIsLogged }) {
    let navigate = useNavigate()

    fetch('/api/sessions', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify()
    })
        .then(res => res.json())
        .then(res => setIsLogged(false))
        .then(() => navigate("/", { replace: true }))
}

export default LogOut