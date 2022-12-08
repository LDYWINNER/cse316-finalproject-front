import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/app.css";

const Dashboard = () => {
    const [answers, setAnswers] = useState([]);
    const [questions, setQuestions] = useState([]);

    const getAnswers = async () => {
        const answerData = await axios.get('http://localhost:8080/answers');
        console.log(answerData);
        setAnswers(answerData.data);
    };

    const getQuestions = async () => {
        const questionData = await axios.get('http://localhost:8080/questions');
        console.log(questionData);
        const temp = [];
        for (let i = 0; i < questionData.length; i++) {
            temp.push(questionData[i].text);
        }
        setQuestions(temp);
    };

    useEffect(() => {
        getAnswers();
        getQuestions();
    }, []);

    const practiceData = [[8, 12, 2022, [12, "hello", true, "a"]]];

    return (
        <div>
            <h2>Summary of responses organized by Question</h2>
            <h4></h4>
            <Link to="/dailyView" style={{ textDecoration: "none" }}>
                <button>View responses per day</button>
            </Link>
        </div>
    )
}

export default Dashboard;