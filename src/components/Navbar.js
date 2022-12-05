import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "../css/app.css";
import { Routes, Route, NavLink, Link, Outlet } from 'react-router-dom'


const Navbar = () => {

    return (
        <nav className='navigation' style={{ backgroundColor: "white" }}>
            <ul data-visible="false" className="primary-navigation" style={{ backgroundColor: "white" }}>
                <li className='logo'>
                    <NavLink to='/' style={{ color: "black" }}>Day Logger</NavLink>
                </li>
                <div style={{ display: 'flex' }}>
                    <li style={{ margin: '10px' }}>
                        <NavLink to='/logDay' style={{ color: "black" }} activeStyle={{ color: '#66bfbf' }}>
                            Log Day
                        </NavLink>
                    </li>
                    <li style={{ margin: '10px' }}>
                        <NavLink to='/editQuestions' style={{ color: "black" }} activeStyle={{ color: '#66bfbf' }}>
                            Edit Questions
                        </NavLink>
                    </li>
                    <li style={{ margin: '10px' }}>
                        <NavLink to='/dashboard' style={{ color: "black" }} activeStyle={{ color: '#66bfbf' }}>
                            View Data
                        </NavLink>
                    </li>
                </div>
                <li style={{margin: '10px'}}>
                        <NavLink to='/profile' style={{color:"black"}} activeStyle={{ color: '#66bfbf' }}>
                            profile
                        </NavLink>
                </li>
                {/* <div className="buttons">
                    <button onClick={Logout} className="button is-light">
                        Log Out
                    </button>
                </div> */}

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

