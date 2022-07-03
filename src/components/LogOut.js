function LogOut() {
    fetch("/api/sessions", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(),
    }).then((req, res) => {
        const logout = '';
        setLogin(logout)
        const isLoggedIn = false
        setIsLogged(isLoggedIn)
    })

    return (
        <div>

        </div>
    )
}





export default LogOut