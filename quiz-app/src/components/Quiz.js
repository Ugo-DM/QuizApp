import React, {useState} from "react";
import axios from 'axios';
import Question from "./Questions";

function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);

    const getQuestions = async () => {
        const response = await axios.get('/api/questions');
        setQuestions(response.data);
    }

    const submitAnswers = async() => {
        const response = await axios.post('/api/submit', {answers});
        setScore(response.data.score)
    }

    const handleAnswerChange = (questionIndex, answerIndex) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = answerIndex;
        setAnswers(newAnswers);
    }

    return (
        <div>
            <h1>Quiz App</h1>
            <button onClick={getQuestions}>Start Quiz !</button>
            {questions.length > 0 && (
                <div>
                    {questions.map((question, index) => (
                        <Question
                        key={index}
                        question={question}
                        onAnswerChange={(answerIndex) =>
                        handleAnswerChange(index, answerIndex)
                        }
                        />
                    ))}
                    <button onClick={submitAnswers}>Submit Answers</button>
                    {score > 0 && <p>Your score is {score}</p>}
                </div>
            )}
        </div>
    )

}

export default Quiz;