const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);


function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleSubmit() {
        if (email === "" || email == null) {
            alert("Email inválido!");
            return;
        }

        if (email === "satoh@conpec.com.br" && password === "mercado1234") {
            alert("Bem vindo, Victor!");
            return
        }   

        alert("Email ou senha incorretos!");
        return;
    }

    return (
        <div id="card">
            <h1>Login</h1>
            <input type="text" placeholder="Email" onInput={event => setEmail(event.target.value)}/>
            <input type="password" placeholder="Password" onInput={event => setPassword(event.target.value)}/>
            <button className="submit" onClick={handleSubmit}>Login</button>
        </div>
    )
}

root.render(
    <div id="container">
        <Login/>
    </div>
);