const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);


function Login() {
    return (
        <div id="card">
            <h1>Login</h1>
            <input type="text" placeholder="Email" onInput={event => setEmail(event.target.value)}/>
            <input type="password" placeholder="Password" onInput={event => setPassword(event.target.value)}/>
            <button className="submit" onClick={}>Login</button>
        </div>
    )
}

root.render(
    <div id="container">
        <Login/>
    </div>
);