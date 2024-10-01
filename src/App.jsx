import { useState } from "react";
import "./App.css";
import QuestionPage from "./components/QuestionPage";
// import { quizQuestions } from "./data/questions";

// const [page, setPage] = useState("quiz");

function App() {
  const [page, setPage] = useState("quiz");
  const [correctAnswers, setCorrectAnswers] = useState(0);

  return (
    <div>
      {page === "quiz" && (
        <QuestionPage
          setPage={setPage}
          correctAnswers={correctAnswers}
          setCorrectAnswers={setCorrectAnswers}
        />
      )}

      {page === "ads" && (
        <div>
          <h1>Ads Page</h1>
          <p>Check out these ads!</p>
        </div>
      )}
    </div>
  );
}

export default App;
