import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "../app.css";

const Navbar = () => {
    const history = useHistory();

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:8080/logout');
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
        <h1>Day Logger</h1>
    </a>

  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/">
        Log Day
      </a>
      <a class="navbar-item" href="/editQuestions">
        Edit Questions
      </a>
      <a class="navbar-item" href="/dashboard">
        View Data
      </a>
    </div>

    <div className="navbar-end">
    <div className="navbar-item">
        <div className="buttons">
            <button onClick={Logout} className="button is-light">
                Log Out
            </button>
        </div>
    </div>
    </div>
  </div>
</nav>
    )
}


export default Navbar;

