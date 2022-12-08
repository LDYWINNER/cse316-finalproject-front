import React, { useCallback, useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Chart from 'react-google-charts';
import "../css/app.css";

const Dashboard = () => {
    const [answers, setAnswers] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [questionsData, setQuestionsData] = useState([]);

    const data = [
        ["Question", "True", "False"],
        ["2014", 1000, 400],
    ];

    const options = (title) => {
        return (
            {
                chart: {
                    title: { title },
                }
            }
        )
    };

    const BarChart = () => {
        return (
            <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        )
    };

    const LineChart = () => {
        return (
            <Chart
                chartType="Line"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        )
    };

    const getAnswers = useCallback(async () => {
        const answerData = await axios.get('http://localhost:8080/answers');
        setAnswers(answerData.data);
    }, []);

    const getQuestions = useCallback(async () => {
        const tempQuestions = await axios.get('http://localhost:8080/questions');
        const tempQuestionsData = tempQuestions.data;
        setQuestionsData(tempQuestionsData);
        const temp = [];
        for (let i = 0; i < tempQuestionsData.length; i++) {
            temp.push(tempQuestionsData[i].text);
        }
        setQuestions(temp);
    }, []);

    useEffect(() => {
        getAnswers();
        getQuestions();
    }, [getQuestions, getAnswers]);

    return (
        <div>
            <h2>Summary of responses organized by Question</h2>
            {
                questionsData.map((obj, i) => {
                    console.log(questionsData[i].box_type);
                    if (questionsData[i].box_type === "number") {
                        //line graph
                        return (
                            <LineChart />
                        );
                    } else if (questionsData[i].box_type === "boolean") {
                        //bar graph
                        return (
                            <BarChart />
                        );
                    } else if (questionsData[i].box_type === "multiple choice") {
                        //bar graph
                        return (
                            <BarChart />
                        );
                    } else {
                        //text type --> show all the answers
                        return (
                            <>
                                <h2>{questionsData[i].text}</h2>
                                {

                                }
                            </>
                        );
                    }
                })
            }

            <Link to="/dailyView" style={{ textDecoration: "none" }}>
                <button>View responses per day</button>
            </Link>
        </div>
    )
}

export default Dashboard;