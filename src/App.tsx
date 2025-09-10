import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Jacob Elliott
            </header>
            <h1>Hello World</h1>
            <img
                src="C:\Users\ellio\OneDrive\Desktop\tasks\src\download.jpg"
                alt="A picture of my favorite character"
            />
            <ol>
                <li>Shrek is love</li>
                <li>Shrek is life</li>
                <li>A third thing</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            ></Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "160px",
                                height: "100px",
                                backgroundColor: "black",
                                marginTop: "10px",
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "160px",
                                height: "100px",
                                backgroundColor: "black",
                                marginTop: "10px",
                            }}
                        />
                    </Col>
                    <Col>
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
