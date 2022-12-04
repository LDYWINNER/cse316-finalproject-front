import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import "../css/app.css";
import { useCallback, useRef, ChangeEvent } from 'react';

const Profile = () => {



    return(
        <div>
            <div style={{margin: "20px", backgroundColor:"transparent", display:"flex"}}>
                <strong style={{fontWeight:'850'}}>Edit Profile</strong>
            </div>
            <div className="box" style={{margin: "10px"}}>
                <strong>Profile Photo</strong>
                <br></br>
                <div style={{display: 'flex'}}>
                    <div style={{margin: "auto"}}>img</div>
                    {/* <input type="file" accept="image/*" style={{display: 'none'}} /> */}
                    <button class="button is-primary" style={{margin: "auto"}}>Choose new image</button>
                    <button style={{margin: "auto"}}>Remove image</button>
                </div>
            </div>
            <div className="box" style={{margin: "10px"}}>
                <strong>Name</strong>
                <input style={{marginTop: "10px"}} className="input" type="text" placeholder="Name"></input>

            </div>
            <div className="box" style={{margin: "10px"}}>
                <strong>Email</strong>
                <input style={{marginTop: "10px"}} className="input" type="text" placeholder="Email"></input>

            </div>
            <div className="box" style={{margin: "10px"}}>
                <strong>Address</strong>
                <input style={{marginTop: "10px"}} className="input" type="text" placeholder="Address"></input>
                <input style={{marginTop: "10px"}} className="input" type="text" placeholder="Detail Address"></input>
            </div>
            <br></br>



        </div>
    )
}

export default Profile