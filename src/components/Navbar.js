import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "../app.css";
import {Routes, Route, NavLink, Link, Outlet} from 'react-router-dom'


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
        <nav className='navigation' style={{backgroundColor: "white"}}>
            <ul data-visible="false" className="primary-navigation" style={{backgroundColor: "white"}}>
                <li className='logo'>
                    <NavLink to='/' style={{color:"black"}}>Day Logger</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard' style={{color:"black"}} activeStyle={{color: '#66bfbf'}}>
                        Log Day
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/editQuestions' style={{color:"black"}} activeStyle={{ color: '#66bfbf' }}>
                        Edit Questions
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard' style={{color:"black"}} activeStyle={{ color: '#66bfbf' }}>
                        View Data
                    </NavLink>
                </li>
                <div className="buttons">
                    <button onClick={Logout} className="button is-light">
                        Log Out
                    </button>
                </div>

            </ul>
        </nav>

        // <nav class="navbar" role="navigation" aria-label="main navigation">
        //     <div class="navbar-brand">
        //         <a class="navbar-item" href="/">
        //             <strong className="logo">Day Logger</strong>
        //         </a>
        //     </div>
        //     <div id="navbarBasicExample" class="navbar-menu">
        //         <div class="navbar-start">
        //             <a class="navbar-item" href="/">
        //                 Log Day
        //             </a>
        //             <a class="navbar-item" href="/editQuestions">
        //                 Edit Questions
        //             </a>
        //             <a class="navbar-item" href="/dashboard">
        //                 View Data
        //             </a>
        //         </div>
        //         <div className="navbar-end">
        //         <div className="navbar-item">
                    // <div className="buttons">
                    //     <button onClick={Logout} className="button is-light">
                    //         Log Out
                    //     </button>
                    // </div>
        //         </div>
        //         </div>
        //     </div>
        // </nav>
    )
}


export default Navbar;

