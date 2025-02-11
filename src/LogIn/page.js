import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./page.css";

function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const logSubmit = async () => {
        console.log("Log in");
        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URI}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data);
                //localStorage.setItem("token", data.token);
                //window.location.href = "/home";
                navigate("/microphone");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="LogIn">
            <header className="LogIn-header">
                <p className="promptTitle">Log In</p>
                <section className="inputFields">
                    <input
                        value={username}
                        type="text"
                        placeholder="Username"
                        className="textPrompt"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        value={password}
                        type="password"
                        placeholder="Password"
                        className="textPrompt"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </section>
                <button className="submitButton" onClick={logSubmit}>Submit</button>
            </header>
        </div>
    );
}

export default LogIn;