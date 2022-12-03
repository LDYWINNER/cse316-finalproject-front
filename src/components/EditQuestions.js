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
        <div>
            
        </div>
    )
}

export default EditQuestions