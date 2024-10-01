import { useState } from "react";
import "./App.css";
import QuestionPage from "./components/QuestionPage";
import WelcomePage from "./components/WelcomePage.jsx";
import AdvertisementPage from "./components/Ads-page.jsx";
import ResultPage from "./components/ResultsPage.jsx";

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
          <AdvertisementPage
            setPage={setPage}
            currentUser={currentUser}
          ></AdvertisementPage>
        </div>
      )}

      {page === "result" && (
        <div>
          <ResultPage
            setPage={setPage}
            correctAnswers={correctAnswers}
          ></ResultPage>
        </div>
      )}
    </div>
  );
}
