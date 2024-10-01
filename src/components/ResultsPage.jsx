import { useState } from "react";
import { quizQuestions } from "../data/questions.js";

const ResultPage = ({ correctAnswers }) => {
  return (
    <div className="result-page">
      <h1>Result</h1>
      <p>
        Your score: {correctAnswers} out of {quizQuestions.length}
      </p>
    </div>
  );
};

export default ResultPage;
