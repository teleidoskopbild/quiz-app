import LoginPage from "./LoginPage.jsx";
import welcomeImage from "../assets/welcome.jpg";
import { useState } from "react";

export default function WelcomePage({ setPage }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
    console.log(loggedIn);
  };

  return (
    <>
      {!loggedIn ? (
        <div>
          <LoginPage onLogin={handleLogin} />
        </div>
      ) : (
        <div>
          <p>Sie haben sich erfolgreich angemeldet!</p>
          <img src={welcomeImage} alt="Quiz App" className="welcome-image" />
          <p>Test your knowledge and enjoy the quiz!</p>
          <button
            onClick={() => {
              setPage("Questions");
            }}
          >
            Zur nächsten Seite
          </button>
        </div>
      )}
    </>
  );
}
