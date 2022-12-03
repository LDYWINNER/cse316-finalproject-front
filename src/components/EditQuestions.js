import React from 'react';
import axios from 'axios';
import { useState } from 'react';



const EditQuestions = () => {
    return (
        <div>
            <div class="box" style={{margin: "10px"}}>
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

    return (
        <div class="box" style={{margin: "10px"}}>
            <input class="input" type="text" placeholder="Text input"></input>
            <div class="dropdown is-active">
            <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Dropdown button</span>
                <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                <a href="#" class="dropdown-item">
                    Dropdown item
                </a>
                <a class="dropdown-item">
                    Other dropdown item
                </a>
                <a href="#" class="dropdown-item is-active">
                    Active dropdown item
                </a>
                <a href="#" class="dropdown-item">
                    Other dropdown item
                </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default EditQuestions