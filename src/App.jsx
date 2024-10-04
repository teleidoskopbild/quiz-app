import { useState } from "react";
import "./App.css";
import QuestionPage from "./components/QuestionPage";
import WelcomePage from "./components/WelcomePage.jsx";
import AdvertisementPage from "./components/Ads-page.jsx";
import ResultPage from "./components/ResultsPage.jsx";
import RegiserPage from "./components/RegistrationPage.jsx";
import CategoriesPage from "./components/CategoriesPage.jsx";

export default function App() {
  const [page, setPage] = useState("welcome");
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentUser, setCurrentUser] = useState({
    firstname: "Guest",
    lastname: "Guest",
  });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [quizQuestions, setQuizQuestions] = useState([]);

  return (
    <div>
      {page === "welcome" && (
        <WelcomePage
          setPage={setPage}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
      {page === "register" && (
        <RegiserPage
          setPage={setPage}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
      {page === "categories" && (
        <CategoriesPage
          setPage={setPage}
          setSelectedCategory={setSelectedCategory}
          setQuizQuestions={setQuizQuestions}
          currentUser={currentUser}
        />
      )}
      {page === "quiz" && (
        <QuestionPage
          setPage={setPage}
          correctAnswers={correctAnswers}
          setCorrectAnswers={setCorrectAnswers}
          selectedCategory={selectedCategory}
          quizQuestions={quizQuestions}
          currentUser={currentUser}
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
            setCorrectAnswers={setCorrectAnswers}
            quizQuestions={quizQuestions}
          ></ResultPage>
        </div>
      )}
    </div>
  );
}
