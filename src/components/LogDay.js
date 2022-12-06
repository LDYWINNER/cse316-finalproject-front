import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import "../css/app.css";
import { height } from '@mui/system';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';


const LogDay = () => {
    let date = new Date();
    let select = new Date();
    let selectedDate = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
    };
    // function refreshDate(){
    //     $("#dateBox").load(window.location.href + " #dateBox");
    // }
    let [selectedYear, setSelectedYear] = useState(date.getFullYear()); 
    let [selectedMonth, setSelectedMonth] = useState(date.getMonth() + 1);
    let [selectedDay, setSelectedDay] = useState(date.getDate());

    return (
        <div>
            <div style={{display: 'flex', height: '80px'}}>
                <button style={{margin:"auto", backgroundColor: "transparent", border: 'transparent'}} onClick={(e)=>{
                    select.setDate(select.getDate() - 1);
                    // refreshDate();
                    selectedDate = {
                        year: select.getFullYear(),
                        month: select.getMonth() + 1,
                        day: select.getDate()
                    };
                    // setSelectedYear(select.getFullYear())
                    // setSelectedMonth(select.getMonth() + 1)
                    // setSelectedDay(select.getDate())
                    console.log(select);
                }}>
                    <KeyboardArrowLeftOutlinedIcon></KeyboardArrowLeftOutlinedIcon>
                </button>
                <div id="dateBox" style={{margin:'auto', fontSize:'24px', fontWeight:'900'}}>
                    {/* {select.getFullYear()}/
                    {select.getMonth() + 1}/
                    {select.getDay()} */}
                    {selectedYear}/{selectedMonth}/{selectedDay}
                    {/* {selectedDate.year}/{selectedDate.month}/{selectedDate.day} */}
                </div>
                <button style={{margin:"auto", backgroundColor: "transparent", border: 'transparent'}} onClick={(e)=>{
                    if (select < date) {
                        select.setDate(select.getDate() + 1);
                        selectedDate = {
                            year: select.getFullYear(),
                            month: select.getMonth() + 1,
                            day: select.getDate()
                        };
                        // refreshDate();
                        // setSelectedYear(select.getFullYear())
                        // setSelectedMonth(select.getMonth() + 1)
                        // setSelectedDay(select.getDate())
                        console.log(select);
                    }

                }}>
                    <KeyboardArrowRightOutlinedIcon></KeyboardArrowRightOutlinedIcon>
                </button>
            </div>

            <div>
                <button className="button is-danger" style={{margin: '10px', width: '100px'}} onClick={(e)=>{
                    // console.log(date);
                    // console.log(today.year);
                    // console.log(today.month);
                    // console.log(today.day);
                }}>Submit</button>
            </div>
        </div>
    )
}

export default LogDay