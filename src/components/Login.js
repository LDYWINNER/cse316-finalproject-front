import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "../css/app.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const login = () => {
        axios.post('http://localhost:8080/login', {
            email: email,
            password: password
        }).then((response) => {
            if (response.data.message) {
                setMsg(response.data.messsage);
            } else {
                setMsg(response.data[0].username);
            }
        });
        history.push("/dashboard");
    };

    useEffect(() => {
        axios.get("http://localhost:8080").then((response) => {
            if (response.data.loggedIn === true) {
                setMsg(response.data.user[0].username);
            }
        })
    }, []);

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form className="box">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth" onClick={login}>Login</button>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth" onClick={() => history.push("/register")}>Go Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;