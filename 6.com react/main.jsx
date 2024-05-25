const app = document.getElementById("app")
const root = ReactDOM.createRoot(app);

function MainPage() {
    const [counter, setCounter] = React.useState(0);

    function add() {
        setCounter(counter + 1);
    }

    function sub() {
        setCounter(counter - 1);
    }

    return (
        <div>
            <div id="counter">{counter}</div>
            <div className="buttonContainer">
                <button id="add" onClick={add}>+</button>
                <button id="remove" onClick={sub}>-</button>
            </div>
        </div>
    );
}

root.render(<MainPage/>);