import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import "../css/app.css";
import { useCallback, useRef, ChangeEvent } from 'react';

const Profile = () => {
    const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
    const fileInput = useRef(null)
    const onChange = (e) => {
        if(e.target.files[0]){
                setImage(e.target.files[0])
            }else{
                setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
                return
            }
            const reader = new FileReader();
            reader.onload = () => {
                if(reader.readyState === 2){
                    setImage(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }

    return(
        <div>
            <div style={{margin: "20px", backgroundColor:"transparent", display:"flex"}}>
                <strong style={{fontWeight:'850'}}>Edit Profile</strong>
            </div>
            <div className="box" style={{margin: "10px"}}>
                <strong>Profile Photo</strong>
                <br></br>
                <div style={{display: 'flex'}}>
                    <img src={image} style={{margin:'auto', width: '70px', borderRadius: '70%'}}></img>
                    <input type="file" ref={fileInput} accept="image/*" style={{display: 'none'}} onChange={onChange}/>
                    <button className="button is-primary" style={{margin: "auto"}} onClick={(e)=>{fileInput.current.click()}}>Choose new image</button>
                    <button className='removeBtn' style={{margin: "auto"}} onClick={(e)=>{
                        setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
                    }}>Remove image</button>
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