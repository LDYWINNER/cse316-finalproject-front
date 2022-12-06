import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "../css/app.css";
import { Routes, Route, NavLink, Link, Outlet } from 'react-router-dom'


const Navbar = (props) => {

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
                            <img src={props.image} style={{margin:'auto', width: '45px', borderRadius: '70%'}}></img>   
                        </NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;

