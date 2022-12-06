import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import "../css/app.css";
import SvgIcon from "@mui/material/SvgIcon";
import { SvgIconComponent } from "@mui/icons-material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const EditQuestions = () => {
    let [boxList, setBoxList] = useState([]);
    let deleteBox = (index) => {
        let copy = [...boxList];
        copy.splice(index, 1);
        setBoxList(copy);
    }
    let changeType = (index, type) => {
        let copy = [...boxList];
        copy[index].boxType = type.toString();
        setBoxList(copy);
    }
    let changeText = (index, text) => {
        let copy = [...boxList];
        copy[index].text = text.toString();
        setBoxList(copy);
    }
    let changeMulti = (index, multi) => {
        let copy = [...boxList];
        copy[index].multi = multi;
        setBoxList(copy);
    }

    return (
        <div>
            <div style={{margin: "20px", backgroundColor:"transparent", display:"flex"}}>
                <strong>Edit Questions</strong>
                <button style={{marginLeft:"auto", backgroundColor: "transparent", border: 'transparent'}} onClick={async () => {
                    let tmp = [...boxList];
                    let box = {boxType: "number", text: "", multi: []}
                    tmp.splice(0, 0, box);
                    setBoxList(tmp);
                    console.log(boxList);
                }}>
                    
                <AddCircleOutlineIcon sx={{ color: "black" }}></AddCircleOutlineIcon>
                </button>
            </div>
            {
                boxList.map(function(a, i){
                    console.log(a)
                    return(
                        <div key={i}><QuestionBox boxList={boxList} changeType={changeType} changeText={changeText} deleteBox={deleteBox} changeMulti={changeMulti} box={a} index={i}></QuestionBox></div>
                            
                    )
                })
            }
            <button className="button is-danger" style={{margin: '20px', width: '100px'}} onClick={(e)=>{
                // 123
            }}>Save</button>
            <br></br>
        </div>
    )
}



function QuestionBox (props) {
    // let [modeList] = ["number", "boolean", "text", "multiple choice"];
    let [mode, setMode] = useState(props.box.boxType);
    let [dropdown, setDropdown] = useState(false);
    let multi = ['', '', ''];

    return (
        <div className="box" style={{margin: "10px"}}>
            <input className="input" type="text" placeholder="Text input" onChange={(e)=>{
                props.changeText(props.index, e.target.value);
            }}></input>

            <div className="dropdown-trigger" style={{marginTop: '10px', display: 'flex'}}>
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={()=>{
                    setDropdown(true);
                }}>
                    <span style={{display: 'flex'}}>{mode}<KeyboardArrowDownIcon style={{marginLeft:'10px'}}/></span>
                </button>
                <button style={{marginLeft:"auto", backgroundColor: "transparent", border: 'transparent'}} onClick={()=>{
                    props.deleteBox(props.index);
                    console.log(props.boxList);
                }}>
                <DeleteOutlineIcon></DeleteOutlineIcon>
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
                        props.changeType(props.index, mode);
                        console.log(props.boxList);
                    }}>
                        number
                    </a>
                    <a href="#" className="dropdown-item" onClick={(e)=>{
                        setMode("boolean");
                        setDropdown(false);
                        props.changeType(props.index, mode);

                        console.log(props.boxList);
                    }}>
                        boolean
                    </a>
                    <a href="#" className="dropdown-item" onClick={(e)=>{
                        setMode("text");
                        setDropdown(false);
                        props.changeType(props.index, mode);

                        console.log(props.boxList);
                    }}>
                        text
                    </a>
                    <a href="#" className="dropdown-item" onClick={(e)=>{
                        setMode("multiple choice");
                        setDropdown(false);  
                        props.changeType(props.index, mode);

                        console.log(props.boxList);
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
                <div className="control" style={{marginTop:'10px'}}>
                    <input type="radio" name="display" disabled/>
                    <input className="multiChoice" type='text' name='multi' onChange={(e)=>{
                        multi[0] = e.target.value
                        props.changeMulti(props.index, multi);
                        // multi.splice(0, 1, e.target.value);
                    }
                    }></input>
                    <div></div>
                    <input type="radio" name="display" disabled/>
                    <input className="multiChoice" type='text' name='multi' onChange={(e)=>{
                        multi[1] = e.target.value
                        props.changeMulti(props.index, multi);

                        // multi.splice(1, 1, e.target.value);
                    }}></input>
                    <div></div>
                    <input type="radio" name="display" disabled/>
                    <input className="multiChoice" type='text' name='multi' onChange={(e)=>{
                        multi[2] = e.target.value
                        props.changeMulti(props.index, multi);

                        // multi.splice(2, 1, e.target.value);
                    }}></input>
                </div>
                :
                <></>
            }
        </div>
    )
}



export default EditQuestions