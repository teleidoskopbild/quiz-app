import { quizQuestions } from "../data/questions.js";
import "./ResultsPage.css";

const ResultPage = ({ correctAnswers, setPage, setCorrectAnswers }) => {
  return (
    <div className="result-page">
      <h1>Result</h1>
      <p>
        Your score: {correctAnswers} out of {quizQuestions.length}
      </p>

      {/* Conditional Rendering */}
      {correctAnswers >= quizQuestions.length ? (
        <p>This is great!</p> /* Show "This is great" message */
      ) : (
        <button
          onClick={() => {
            setPage("quiz");
            setCorrectAnswers(0);
          }}
        >
          Try Again
        </button> /* Show "Try Again" button */
      )}
    </div>
  );
};

export default ResultPage;
