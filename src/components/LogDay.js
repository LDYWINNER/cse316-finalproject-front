import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import "../css/app.css";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { SettingsInputAntennaTwoTone } from '@mui/icons-material';


const LogDay = () => {
    let date = new Date();
    let select = new Date();
    // let questions = [];
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    let tmp = [];
    

    const [selectedYear, setSelectedYear] = useState(date.getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(date.getMonth() + 1);
    const [selectedDay, setSelectedDay] = useState(date.getDate());

    const [date2, setDate2] = useState({
        year: selectedYear,
        month: selectedMonth,
        day: selectedDay
    });

    const getData = async () => {
        const tempQuestions = await axios.get('http://localhost:8080/questions');
        // const questions = tempQuestions.data;
        let copy = [...questions];
        // copy.push(tempQuestions.data);
        console.log(tempQuestions);
        tmp = tempQuestions.data;

        for(let i = 0; i < tmp.length; i++) {
            tmp[i].multi = JSON.parse(tmp[i].multi);
        }

        setQuestions(tmp);

        console.log(questions);
        console.log(tmp);

    }


    useEffect(()=>{
        getData();
        setQuestions(tmp);
        console.log(questions);
    }, [])

    const saveData = (e) => {
        // e.preventDefault();
        axios.post('http://localhost:8080/answers', {
            month: selectedMonth,
            day: selectedDay,
            year: selectedYear,
            answers: JSON.stringify(answers)
        }).then((response) => {
            console.log(response);
        });
    };
    const handleClick = () => {
        // select.setDate(select.getDate() - 1)
        //Put the algorithm here
        if (selectedDay != 1) {
            let currentDay = selectedDay - 1;
            setSelectedDay(selectedDay - 1);
            setDate2({ ...date2, day: currentDay });
        } else {
            let currentDay;
            let currentMonth;
            let currentYear = selectedYear;
            if (selectedMonth != 1) {
                currentMonth = selectedMonth - 1;
            } else if (selectedMonth == 1) {
                currentMonth = 12
                currentYear = selectedYear - 1;

                setSelectedYear(currentYear);
            }
            setSelectedMonth(currentMonth);
            if (currentMonth == 1 || currentMonth == 3 || currentMonth == 5 || currentMonth == 7 || currentMonth == 8 || currentMonth == 10 || currentMonth == 12) {
                currentDay = 31
            } else if (currentMonth == 2) {
                currentDay = 28
            } else {
                currentDay = 30
            }
            setSelectedDay(currentDay);
            setDate2({ ...date2, month: currentMonth, day: currentDay, year: currentYear });
        }
        console.log(selectedMonth)



    }
    const handleClick2 = () => {
        //Put the algorithm here
        // select.setDate(select.getDate() + 1);

        const thirtyOne = [1, 3, 5, 7, 8, 10, 12]
        if (selectedMonth == 12 && selectedDay == 31) {
            let currentYear = selectedYear + 1;
            let currentMonth = 1;
            let currentDay = 1;
            setSelectedYear(currentYear);
            setSelectedMonth(currentMonth);
            setSelectedDay(currentDay);
            setDate2({ ...date2, day: currentDay, month: currentMonth, year: currentYear });
        } else if (thirtyOne.includes(selectedMonth) && selectedDay == 31) {
            let currentMonth = selectedMonth + 1;
            let currentDay = 1;
            setSelectedMonth(currentMonth);
            setSelectedDay(1);
            setDate2({ ...date2, day: currentDay, month: currentMonth });
        } else if (selectedMonth == 2 && selectedDay == 28) {
            let currentMonth = selectedMonth + 1;
            let currentDay = 1;
            setSelectedMonth(currentMonth);
            setSelectedDay(1);
            setDate2({ ...date2, day: currentDay, month: currentMonth });
        } else if (!thirtyOne.includes(selectedMonth) && selectedDay == 30) {
            let currentMonth = selectedMonth + 1;
            let currentDay = 1;
            setSelectedMonth(currentMonth);
            setSelectedDay(1);
            setDate2({ ...date2, day: currentDay, month: currentMonth });
        } else {
            let currentDay = selectedDay + 1;
            setSelectedDay(currentDay);
            setDate2({ ...date2, day: currentDay });
        }
    }
    const dateCheck = () => {
        let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        let current = new Date(date2.year, date2.month - 1, date2.day);
        return current < today
    }

    useEffect(() => {
        if (date2) {
            setDate2(
                {
                    year: selectedYear,
                    month: selectedMonth,
                    day: selectedDay
                }
            )
        }

    }, [])



    return (
        <div>
            <div style={{ display: 'flex', height: '80px' }}>
                <button style={{ margin: "auto", backgroundColor: "transparent", border: 'transparent' }} onClick={(e) =>
                    handleClick()
                }>
                    <KeyboardArrowLeftOutlinedIcon></KeyboardArrowLeftOutlinedIcon>
                </button>
                <div id="dateBox" style={{ margin: 'auto', fontSize: '24px', fontWeight: '900' }}>
                    {date2 ? date2.month : ""}/
                    {date2 ? date2.day : ""}/
                    {date2 ? date2.year : ""}


                </div>
                <button style={{ margin: "auto", backgroundColor: "transparent", border: 'transparent' }} onClick={(e) => {
                    if (dateCheck()) {
                        handleClick2();
                    }

                }}>
                    <KeyboardArrowRightOutlinedIcon></KeyboardArrowRightOutlinedIcon>
                </button>


            </div>
            {

                questions.map((obj, i) => {

                    return(
                        obj.box_type == 'number'
                        ?
                        <NumberBox key={i} obj={obj} answers={answers} setAnswers={setAnswers} index={i}></NumberBox>
                        :
                        obj.box_type == 'boolean'
                        ?
                        <BooleanBox key={i} obj={obj} answers={answers} setAnswers={setAnswers} index={i}></BooleanBox>
                        :
                        obj.box_type == 'text'
                        ?
                        <TextBox key={i} obj={obj} answers={answers} setAnswers={setAnswers} index={i}></TextBox>
                        :
                        <MultiBox key={i} obj={obj} answers={answers} setAnswers={setAnswers} index={i}></MultiBox>
                    )

                })
            }
            <div>
                <button className="button is-danger" style={{ margin: '10px', width: '100px' }} onClick={(e) => {
                    saveData();
                    console.log(answers);
                }}>Submit</button>
            </div>
        </div>
    )
}


function NumberBox(props) {

    return (
        <div className="box" style={{ margin: "10px" }}>
            <div>{props.obj.text}</div>
            <input className='input' type='text' style={{ width: '200px' }} defaultValue={props.answers[props.index]} onChange={(e)=>{

                let tmp = [...props.answers];
                let tmpText = e.value;
                tmpText = e.target.value;
                tmp[props.index] = tmpText
                props.setAnswers(tmp);

            }}></input>
        </div>
    )
}

function BooleanBox(props) {

    return (
        <div className="box" style={{ margin: "10px" }}>
            <div>{props.obj.text}</div>
            <div style={{ display: 'flex' }}>
                <input type='radio' value='True' name='boolean' style={{ marginRight: '5px' }} onChange={(e) => {
                    let tmp = [...props.answers];
                    tmp[props.index] = 'true';
                    props.setAnswers(tmp);

                }} ></input> True
                <div style={{ marginRight: '50px' }}></div>
                <input type='radio' value='False' name='boolean' style={{ marginRight: '5px' }} onChange={(e) => {
                    let tmp = [...props.answers];
                    tmp[props.index] = 'false';
                    props.setAnswers(tmp);

                }}></input> False
            </div>

        </div>
    )
}

function TextBox(props) {

    return (
        <div className="box" style={{ margin: "10px" }}>
            <div>{props.obj.text}</div>
            <input className='input' type='text' onChange={(e)=>{
                let tmp = [...props.answers];
                let tmpText = e.target.value;
                tmp[props.index] = tmpText
                props.setAnswers(tmp);

            }}></input>
        </div>
    )
}

function MultiBox(props) {

    return (
        <div className="box" style={{ margin: "10px" }}>
            <div>{props.obj.text}</div>
            <div style={{ display: 'flex', margin: '10px' }}>
                <input type='radio' value='?' name='multi' onChange={(e) => {
                    let tmp = [...props.answers];
                    tmp[props.index] = props.obj.multi[0];
                    props.setAnswers(tmp);
                    console.log(props.obj)

                }}></input>
                <div>{props.obj.multi}</div>
            </div>

            <div style={{ display: 'flex', margin: '10px'  }}>
                <input type='radio' value='?' name='multi' onChange={(e) => {
                    let tmp = [...props.answers];
                    tmp[props.index] = props.obj.multi[1];
                    props.setAnswers(tmp);

                }}></input>
                <div>{props.obj.multi[1]}</div>

            </div>

            <div style={{ display: 'flex', margin: '10px'  }}>
                <input type='radio' value='?' name='multi' onChange={(e) => {
                    let tmp = [...props.answers];
                    tmp[props.index] = props.obj.multi[2];
                    props.setAnswers(tmp);

                }}></input>
                <div>{props.obj.multi[2]}</div>


            </div>


        </div>
    )
}

export default LogDay