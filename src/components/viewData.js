import React, { useCallback, useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Chart from 'react-google-charts';
import "../css/app.css";
import DailyView from './dailyView';

const ViewData = () => {
    const [answers, setAnswers] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [questionsData, setQuestionsData] = useState([]);
    let [chartResultData, setChartResultData] = useState({

    });
    let chartData = {};

    const booleanInitialData = [
        ["Question", "True", "False"],
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

    const practiceData = [
        ["Question", "True", "False"],
        ["2014", 1000, 400],
    ];

    const BarChart = ({ data }) => {
        return (
            <Chart
                chartType="Bar"
                width="80%"
                height="250px"
                data={data}
                options={options}
            />
        )
    };

    const LineChart = ({ data }) => {
        return (
            <Chart
                chartType="Line"
                width="80%"
                height="250px"
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
        //initialization
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
        setChartResultData(chartData);
        //Storing real data
        for (let d = 0; d < answerData.length; d++) {
            for (let k = 0; k < answerData[0].answers.length; k++) {
                if (tempQuestionsData[k].box_type === "boolean") {
                    if (answerData[d].answers[k] === "true") {
                        chartData[tempQuestionsData[k].text][0] += 1;
                        setChartResultData(chartData);
                    } else {
                        chartData[tempQuestionsData[k].text][1] += 1;
                        setChartResultData(chartData);
                    }
                } else if (tempQuestionsData[k].box_type === "text") {
                    chartData[tempQuestionsData[k].text].push(answerData[d].answers[k]);
                    setChartResultData(chartData);
                } else if (tempQuestionsData[k].box_type === "number") {
                    chartData[tempQuestionsData[k].text].push(answerData[d].answers[k]);
                    setChartResultData(chartData);
                } else {
                    chartData[tempQuestionsData[k].text].push(answerData[d].answers[k]);
                    setChartResultData(chartData);
                }
            }
        }
        setChartResultData(chartData);
    };

    useEffect(() => {
        getChartData();
    }, []);

    return (
        <div>
            <DailyView></DailyView>
            <h2>Summary of responses organized by Question</h2>
            {
                questionsData !== {} && chartResultData !== {} && questionsData.map((obj, i) => {
                    if (questionsData[i].box_type === "number") {
                        //line graph
                        return (
                            <LineChart data={practiceData} />
                        );
                    } else if (questionsData[i].box_type === "boolean") {
                        //bar graph
                        return (
                            // <BarChart data={booleanInitialData.push([obj.text, chartData[questionsData[i].text][0], chartData[questionsData[i].text][1]])} />
                            <BarChart data={practiceData} />
                        );
                    } else if (questionsData[i].box_type === "multiple choice") {
                        //bar graph
                        return (
                            <BarChart data={practiceData} />
                        );
                    } else {
                        //text type --> show all the answers
                        return (
                            <>
                                <h2>{questionsData[i].text}</h2>
                                {/* {
                                    chartResultData !== undefined && chartResultData[questionsData[i].text].map((obj, i) => {
                                        return (
                                            <h4>{obj}</h4>
                                        )
                                    })
                                } */}
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