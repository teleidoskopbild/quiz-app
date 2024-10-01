import { useState } from "react";
import "./App.css";
import WelcomePage from "./components/Welcome-page.jsx";
// import Questions-page from "./components/Questionspage.jsx";

export default function App() {
  const [page, setPage] = useState("welcome");
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
    </div>
  );
}
