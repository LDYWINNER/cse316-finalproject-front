import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import "../app.css";



const EditQuestions = () => {
    return (
        <div>
            <div style={{margin: "20px", backgroundColor:"transparent", display:"flex"}}>
                <h4>Edit Questions</h4>
                <button></button>
            </div>
            <QuestionBox></QuestionBox>
        </div>
    )
}

function QuestionBox () {
    let [modeList] = ["number", "boolean", "text", "multiple choice"];
    let [mode, setMode] = useState("number");
    let [dropdown, setDropdown] = useState(false);

    return (
        <div class="box" style={{margin: "10px"}}>
            <input class="input" type="text" placeholder="Text input"></input>
            
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={()=>{
                    setDropdown(true);
                }}>
                    <span>Dropdown button</span>
                    <span class="icon is-small">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            {
                dropdown ?  
                <div class="dropdown is-active">
                <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                    <a href="#" class="dropdown-item">
                        number
                    </a>
                    <a href="#" class="dropdown-item">
                        boolean
                    </a>
                    <a href="#" class="dropdown-item">
                        text
                    </a>
                    <a href="#" class="dropdown-item">
                        multiple choice
                    </a>
                </div>
                </div>
                </div>
                : 
                <></>
            }

        </div>
    )
}

export default EditQuestions