import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/app.css";

const Dashboard = () => {
    const [answers, setAnswers] = useState([]);

    const getAnswers = async () => {
        const temp = await axios.get('http://localhost:8080/answers');
        console.log(temp);
        setAnswers(temp.data);
    };

    useEffect(() => {
        getAnswers();
    }, []);

    const practiceData = [[8, 12, 2022, [12, "hello", true, "a"]]];

    return (
        <div>
            <h2>Responses organized by the day of the response</h2>
            <h4>Same with log data page</h4>
            <Link to="/viewData" style={{ textDecoration: "none" }}>
                <button>View responses per question</button>
            </Link>
        </div>
    )
}

export default Dashboard;