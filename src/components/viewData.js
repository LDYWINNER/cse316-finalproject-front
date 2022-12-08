import React, { useCallback, useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Chart from 'react-google-charts';
import "../css/app.css";

const ViewData = () => {
    const [answers, setAnswers] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [questionsData, setQuestionsData] = useState([]);
    let [chartResultData, setChartResultData] = useState({});
    let chartData = {};

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

    const getChartData = async () => {
        const tempQuestions = await axios.get('http://localhost:8080/questions');
        const tempQuestionsData = tempQuestions.data;
        setQuestionsData(tempQuestionsData);
        const temp = [];
        for (let i = 0; i < tempQuestionsData.length; i++) {
            temp.push(tempQuestionsData[i].text);
        }
        setQuestions(temp);


        const tempAnswer = await axios.get('http://localhost:8080/answers');
        const answerData = tempAnswer.data;
        setAnswers(answerData);
        //making data for the charts
        //parsing answers array string 
        for (let j = 0; j < answerData.length; j++) {
            answerData[j].answers = JSON.parse(answerData[j].answers);
        }
        console.log(answerData);
        //initialization
        console.log(tempQuestionsData);
        for (let a = 0; a < answerData[0].answers.length; a++) {
            if (tempQuestionsData[a].box_type === "boolean") {
                chartData[tempQuestionsData[a].text] = [0, 0];
            } else if (tempQuestionsData[a].box_type === "text") {
                chartData[tempQuestionsData[a].text] = [];
            } else if (tempQuestionsData[a].box_type === "number") {
                chartData[tempQuestionsData[a].text] = [];
            } else {
                chartData[tempQuestionsData[a].text] = [];
            }
        }
        //Storing real data
        for (let d = 0; d < answerData.length; d++) {
            for (let k = 0; k < answerData[0].answers.length; k++) {
                if (tempQuestionsData[k].box_type === "boolean") {
                    if (answerData[d].answers[k] === "true") {
                        chartData[tempQuestionsData[k].text][0] += 1;
                        console.log(chartData);
                    } else {
                        chartData[tempQuestionsData[k].text][1] += 1;
                        console.log(chartData);
                    }
                } else if (tempQuestionsData[k].box_type === "text") {
                    chartData[tempQuestionsData[k].text].push(answerData[d].answers[k]);
                    console.log(chartData);
                } else if (tempQuestionsData[k].box_type === "number") {
                    chartData[tempQuestionsData[k].text].push(answerData[d].answers[k]);
                    console.log(chartData);
                } else {
                    chartData[tempQuestionsData[k].text].push(answerData[d].answers[k]);
                    console.log(chartData);
                }
            }
        }
        console.log(chartData);
    };

    useEffect(() => {
        getChartData();
        console.log(chartData);
        setChartResultData(chartData);
    }, []);

    return (
        <div>
            <h2>Summary of responses organized by Question</h2>
            {
                questionsData.map((obj, i) => {
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
                                {console.log(chartResultData[questionsData[i].text])}
                                {
                                    chartResultData[questionsData[i].text].map((obj, i) => {
                                        return (
                                            <h4>{obj}</h4>
                                        )
                                    })
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

export default ViewData;