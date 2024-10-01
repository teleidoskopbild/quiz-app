import { useState } from "react";
import "./App.css";
import QuestionPage from "./components/QuestionPage";
import WelcomePage from "./components/WelcomePage.jsx";

export default function App() {
  const [page, setPage] = useState("welcome");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div>
      {page === "welcome" && (
        <WelcomePage
          setPage={setPage}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}

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
