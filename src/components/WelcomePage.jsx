import LoginPage from "./LoginPage.jsx";
import welcomeImage from "../assets/welcome.jpg";
import loginImage from "../assets/logo-login.jpg";

import { useState } from "react";
import "./WelcomePage.css";

export default function WelcomePage({ setPage }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleLogin = (firstname, lastname) => {
    setLoggedIn(true);
    setFirstname(firstname);
    setLastname(lastname);
  };

  return (
    <>
      {!loggedIn ? (
        <div className="login">
          <div className="login-text">
            <h2>Let&#39;s play quiz!</h2>
            <img id="theme-image" src={loginImage} alt="Quiz App" />

            <p>Enter your information below</p>
          </div>
          <LoginPage onLogin={handleLogin} setPage={setPage} />
        </div>
      ) : (
        <div className="welcome-container">
          <h2>
            Welcome to Quiz App <span>{`${firstname}  ${lastname}!`}</span>!
          </h2>
          <img src={welcomeImage} alt="Quiz App" className="welcome-image" />

          <p>Test your knowledge and enjoy the quiz!</p>
          <button
            onClick={() => {
              setPage("categories");
            }}
          >
            Quiz starten
          </button>
        </div>
      )}
    </>
  );
}
