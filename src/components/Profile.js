import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "../css/app.css";
import { useCallback, useRef, ChangeEvent } from 'react';

const Profile = (props) => {
    // const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
    // let [user, setUser] = {
    //     name: "",
    //     email: "",
    //     address1: "",
    //     address2: ""
    // }
    let tmpUser = {
        name: "",
        email: "",
        address1: "",
        address2: ""
    };
    const uploadImage = () => {
        const data = new FormData()
        data.append("file", props.image)
        data.append("upload_preset", "cse316_profile")
        data.append("cloud_name","dsaacssba")
        fetch("https://api.cloudinary.com/v1_1/dsaacssba/image/upload",{
        method:"post",
        body: data
        })
        .then(resp => resp.json())
        .then(data => {
        props.setImageUrl(data.url)
        })
        .catch(err => console.log(err))
    }
    const fileInput = useRef(null);
    const onChange = (e) => {
        if(e.target.files[0]){
                props.setImage(e.target.files[0])
            }else{
                props.setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
                return
            }
            const reader = new FileReader();
            reader.onload = () => {
                if(reader.readyState === 2){
                    props.setImage(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }
        const isEmail = (email) => {
            const emailRegex =
              /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        
            return emailRegex.test(email);
          };
    
        const history = useHistory();

        const Logout = async () => {
            try {
                await axios.delete('http://localhost:8080/logout');
                history.push("/");
            } catch (error) {
                console.log(error);
            }
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
                    <img src={props.image} style={{margin:'auto', width: '70px', borderRadius: '70%'}}></img>
                    <input type="file" ref={fileInput} accept="image/*" style={{display: 'none'}} onChange={onChange}/>
                    <button className="button is-primary" style={{margin: "auto", borderRadius: '12px', color:'black'}} onClick={(e)=>{fileInput.current.click()}}>Choose new image</button>
                    <button className='removeBtn' style={{margin: "auto"}} onClick={(e)=>{
                        props.setImage("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
                    }}>Remove image</button>
                </div>
            </div>
            <div className="box" style={{margin: "10px"}}>
                <strong>Name</strong>
                <input style={{marginTop: "10px"}} className="input" type="text" placeholder="Name" onChange={(e)=>{
                    tmpUser.name = e.target.value;
                }}></input>

            </div>
            <div className="box" style={{margin: "10px"}}>
                <strong>Email</strong>
                <input style={{marginTop: "10px"}} className="input" type="text" placeholder="Email" onChange={(e)=>{
                    tmpUser.email = e.target.value;
                }}></input>

            </div>
            <div className="box" style={{margin: "10px"}}>
                <strong>Address</strong>
                <input style={{marginTop: "10px"}} className="input" type="text" placeholder="Address" onChange={(e)=>{
                    tmpUser.address1 = e.target.value;
                }}></input>
                <input style={{marginTop: "10px"}} className="input" type="text" placeholder="Detail Address" onChange={(e)=>{
                    tmpUser.address2 = e.target.value;
                }}></input>
            </div>
            <div style={{display: 'flex'}}>
                <button className="button is-danger" style={{margin: 'auto', width: '100px'}} onClick={(e)=>{
                    if (isEmail(tmpUser.email)){
                        uploadImage();
                        props.setUser(tmpUser);
                        console.log(props.image);
                    }
                }}>Save</button>
                <button className='removeBtn' style={{margin: "auto"}} onClick={Logout}>Logout</button>
            </div>
            <br></br>


            
        </div>
    )
}

export default Profile