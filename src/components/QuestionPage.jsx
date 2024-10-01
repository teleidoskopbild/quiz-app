import { useState } from "react";
import "./QuestionsPage.css";
import { quizQuestions } from "../data/questions";

const shuffleArray = (array) => array.toSorted(() => Math.random() - 0.5);

function QuestionPage({ setPage, /*correctAnswers,*/ setCorrectAnswers }) {
  // const questions = quizQuestions;
  // const [questions] = useState(shuffleArray([...quizQuestions]));  // <------- needs to be a state otherwise shuffles on every re-render
  const [questions] = useState(
    shuffleArray(
      // shuffles the questions for quizQuestiions
      quizQuestions.map((question) => ({
        // maps over every question in quiz questions
        ...question, // creates new object using the spread operator which copies all properties from current question into new object with a new options property
        options: shuffleArray([...question.options]), // shuffles the options for the current question and its options property,
      }))
    )
  );

  console.log(questions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  // const [correctAnswers, setCorrectAnswers] = useState(0); <--------------------- in App.jsx now
  const [answerStatus, setAnswerStatus] = useState("");
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
  };

  // handle the next question

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      setAnswerStatus(selectedAnswer.isCorrect ? "correct" : "wrong");
      setButtonsDisabled(true);
    }
    setTimeout(() => {
      if (selectedAnswer.isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
      }

      if (currentIndex < questions.length - 1) {
        setSelectedAnswer(null);
        setAnswerStatus("");
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setPage("ads");
      }
      setButtonsDisabled(false);
    }, 1000);
  };

  const question = questions[currentIndex];

  return (
    <div className={`quiz-container ${buttonsDisabled ? "disabled" : ""}`}>
      <h1 className="quiz-title">Quiz Page</h1>
      <h2 className="quiz-question">{question.question}</h2>
      <div className="options-container">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleAnswerClick(option)}
            className={selectedAnswer === option ? answerStatus : ""}
          >
            {option.text}
          </button>
        ))}
      </div>
      <button
        className="next-button"
        onClick={handleNextQuestion}
        disabled={selectedAnswer === null}
      >
        {currentIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
      </button>
      {/* <div className="score">
        Score: {correctAnswers} / {questions.length}
      </div> */}
    </div>
  );
}

export default QuestionPage;
