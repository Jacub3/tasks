import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello World</h1>
                UD CISC275 with React Hooks and TypeScript - Jacob Elliott
            </header>
            <img
                src="C:\Users\ellio\OneDrive\Desktop\tasks\src\download.jpg"
                alt="A picture of my favorite character"
            />
            <ol>
                <li>Shrek is love</li>
                <li>Shrek is life</li>
                <li>A third thing</li>
            </ol>
            <Button>Log Hello World</Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
