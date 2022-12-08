/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import "../css/app.css";
import SvgIcon from "@mui/material/SvgIcon";
import { SvgIconComponent } from "@mui/icons-material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const EditQuestions = (props) => {
    const [boxList, setBoxList] = useState([]);
    const [id, setId] = useState(0);

    const updateQuestions = async (e) => {
        // e.stopPropagation();
        await axios.post('http://localhost:8080/editQuestions', {
            boxList: boxList
        }).then((response) => {
            console.log(response);
        });
    };

    const handleClick = () => {
        let tmp = [...boxList];
        let box = { boxType: "number", text: "", multi: ['', '', ''], id: id }
        setId(id => id + 1);
        tmp.unshift(box);
        setBoxList(tmp);
    }


    // useEffect(() => {
    //     updateQuestions();
    //     console.log(boxList)
    // }, [])

    return (
        <div>
            <div style={{ margin: "20px", backgroundColor: "transparent", display: "flex" }}>
                <strong>Edit Questions</strong>
                <button style={{ marginLeft: "auto", backgroundColor: "transparent", border: 'transparent' }} onClick={() => {
                    handleClick()
                }}>

                    <AddCircleOutlineIcon sx={{ color: "black" }}></AddCircleOutlineIcon>
                </button>
            </div>
            {
                boxList.map(function (a, i) {
                    // console.log(a)
                    return (
                        // <div key={i}><QuestionBox boxList={boxList} changeType={changeType} changeText={changeText} deleteBox={deleteBox} changeMulti={changeMulti} box={a} index={i}></QuestionBox></div>
                        <div key={i} className="box" style={{ margin: "10px" }}>
                            <input className="input" type="text" placeholder="Text input" defaultValue='' onChange={(e) => {
                                let tmp = [...boxList];
                                let tmpId = a.id
                                let findIndex = tmp.findIndex(a => a.id === tmpId)
                                tmp[findIndex] = { ...tmp[findIndex], text: e.target.value };
                                setBoxList(tmp);
                            }}>
                            </input>

                            <div style={{ marginTop: '10px', display: 'flex' }}>
                                <div className="dropdown is-hoverable">
                                    <div className="dropdown-trigger">
                                        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                                            <span>{a.boxType}</span>

                                        </button>
                                    </div>
                                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                                        <div className="dropdown-content">
                                            <div className="dropdown-item">
                                                <a href="#" className="dropdown-item" onClick={(e) => {

                                                    let tmp = [...boxList]
                                                    let tmpId = a.id
                                                    let findIndex = tmp.findIndex(a => a.id === tmpId)
                                                    tmp[findIndex] = { ...tmp[findIndex], boxType: "number" };
                                                    setBoxList(tmp);

                                                }}>
                                                    number
                                                </a>
                                                <a href="#" className="dropdown-item" onClick={(e) => {
                                                    let tmp = [...boxList]
                                                    let tmpId = a.id
                                                    let findIndex = tmp.findIndex(a => a.id === tmpId)
                                                    tmp[findIndex] = { ...tmp[findIndex], boxType: "boolean" };
                                                    setBoxList(tmp);

                                                }}>
                                                    boolean
                                                </a>
                                                <a href="#" className="dropdown-item" onClick={(e) => {
                                                    let tmp = [...boxList]
                                                    let tmpId = a.id
                                                    let findIndex = tmp.findIndex(a => a.id === tmpId)
                                                    tmp[findIndex] = { ...tmp[findIndex], boxType: "text" };
                                                    setBoxList(tmp);

                                                }}>
                                                    text
                                                </a>
                                                <a href="#" className="dropdown-item" onClick={(e) => {
                                                    let tmp = [...boxList]
                                                    let tmpId = a.id
                                                    let findIndex = tmp.findIndex(a => a.id === tmpId)
                                                    tmp[findIndex] = { ...tmp[findIndex], boxType: "multiple choice" };
                                                    setBoxList(tmp);

                                                }}>
                                                    multiple choice
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <button style={{ marginLeft: "auto", backgroundColor: "transparent", border: 'transparent' }} onClick={() => {

                                    let tmp = [...boxList];
                                    let tmpId = a.id;
                                    setBoxList(tmp.filter((a) => a.id !== tmpId))
                                }}>
                                    <DeleteOutlineIcon></DeleteOutlineIcon>
                                </button>
                            </div>

                            {
                                a.boxType == "multiple choice"
                                    ?
                                    <div className="control" style={{ marginTop: '10px' }}>
                                        <input type="radio" name="display" disabled />
                                        <input className="multiChoice" type='text' name='multi' onChange={(e) => {
                                            let tmp = [...boxList];
                                            let tmpId = a.id
                                            let tmpMulti = a.multi
                                            tmpMulti[0] = e.target.value;
                                            let findIndex = tmp.findIndex(a => a.id === tmpId)
                                            tmp[findIndex] = { ...tmp[findIndex], multi: tmpMulti };
                                            setBoxList(tmp);
                                        }
                                        }></input>
                                        <div></div>
                                        <input type="radio" name="display" disabled />
                                        <input className="multiChoice" type='text' name='multi' onChange={(e) => {
                                            let tmp = [...boxList];
                                            let tmpId = a.id
                                            let tmpMulti = a.multi
                                            tmpMulti[1] = e.target.value;
                                            let findIndex = tmp.findIndex(a => a.id === tmpId)
                                            tmp[findIndex] = { ...tmp[findIndex], multi: tmpMulti };
                                            setBoxList(tmp);
                                        }}></input>
                                        <div></div>
                                        <input type="radio" name="display" disabled />
                                        <input className="multiChoice" type='text' name='multi' onChange={(e) => {
                                            let tmp = [...boxList];
                                            let tmpId = a.id
                                            let tmpMulti = a.multi
                                            tmpMulti[2] = e.target.value;
                                            let findIndex = tmp.findIndex(a => a.id === tmpId)
                                            tmp[findIndex] = { ...tmp[findIndex], multi: tmpMulti };
                                            setBoxList(tmp);
                                        }}></input>
                                    </div>
                                    :
                                    <></>
                            }

                        </div>
                    )
                })
            }
            <button className="button is-danger" style={{ margin: '20px', width: '100px' }} onClick={async (e) => {
                await updateQuestions(e);
            }}>Save</button>
            <br></br>
        </div>
    )
}



export default EditQuestions