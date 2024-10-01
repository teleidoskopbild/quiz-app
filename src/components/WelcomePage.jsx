import LoginPage from "./LoginPage.jsx";
import welcomeImage from "../assets/welcome.jpg";
import loginImage from "../assets/logo-login.jpg";

import { useState } from "react";
import "./WelcomePage.css";

export default function WelcomePage({ setPage }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
    console.log(loggedIn);
  };

  return (
    <>
      {!loggedIn ? (
        <div class="login">
          <div class="login-text">
            <h2>Let's play quiz!</h2>
            <img src={loginImage} alt="Quiz App" />

            <p>Enter your information below</p>
          </div>
          <LoginPage onLogin={handleLogin} setPage={setPage} />
        </div>
      ) : (
        <div class="welcome-container">
          <h2>
            Welcome to Quiz App <span id="user"></span>!
          </h2>
          <img src={welcomeImage} alt="Quiz App" className="welcome-image" />

          <p>Test your knowledge and enjoy the quiz!</p>
          <button
            onClick={() => {
              setPage("quiz");
            }}
          >
            Quiz starten
          </button>
        </div>
      )}
    </>
  );
}
