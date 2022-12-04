import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import "../app.css";
import SvgIcon from "@mui/material/SvgIcon";
import { SvgIconComponent } from "@mui/icons-material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const EditQuestions = () => {
    let [boxNum, setBoxNum] = useState([]);


    return (
        <div>
            <div style={{margin: "20px", backgroundColor:"transparent", display:"flex"}}>
                <strong>Edit Questions</strong>
                <button style={{marginLeft:"auto", backgroundColor: "transparent", border: 'transparent'}} onClick={() => {
                    let tmp = [...boxNum];
                    tmp.unshift(0)
                    setBoxNum(tmp);
                }}>
                <AddCircleOutlineIcon sx={{ color: "black" }}></AddCircleOutlineIcon>

                </button>
            </div>
            <QuestionBox/>
            {
                boxNum.map(function(a, i){
                    return(
                        <QuestionBox></QuestionBox>
                    )
                })
            }
            
        </div>
    )
}




function QuestionBox () {
    let [modeList] = ["number", "boolean", "text", "multiple choice"];
    let [mode, setMode] = useState("number");
    let [dropdown, setDropdown] = useState(false);

    return (
        <div className="box" style={{margin: "10px"}}>
            <input className="input" type="text" placeholder="Text input"></input>

            <div className="dropdown-trigger" style={{marginTop: '10px'}}>
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={()=>{
                    setDropdown(true);
                }}>
                    <span>{mode}</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            {
                dropdown ?  
                <div className="dropdown is-active">
                <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">
                    <a href="#" className="dropdown-item" onClick={(e)=>{
                        setMode("number");
                        setDropdown(false);
                    }}>
                        number
                    </a>
                    <a href="#" className="dropdown-item" onClick={(e)=>{
                        setMode("boolean");
                        setDropdown(false);
                    }}>
                        boolean
                    </a>
                    <a href="#" className="dropdown-item" onClick={(e)=>{
                        setMode("text");
                        setDropdown(false);
                    }}>
                        text
                    </a>
                    <a href="#" className="dropdown-item" onClick={(e)=>{
                        setMode("multiple choice");
                        setDropdown(false);                        
                    }}>
                        multiple choice
                    </a>
                </div>
                </div>
                </div>
                : 
                <></>
            }
            {
                mode == "multiple choice"
                ?
                <div className="control">
                    <label className="radio">
                        <input type="radio" name="answer"/>
                        Yes
                    </label>
                    <div></div>
                    <label className="radio">
                        <input type="radio" name="answer"/>
                        No
                    </label>
                </div>
                :
                <></>
            }
        </div>
    )
}



export default EditQuestions