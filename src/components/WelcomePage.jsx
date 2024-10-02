import LoginPage from "./LoginPage.jsx";
import welcomeImage from "../assets/welcome.jpg";
import loginImage from "../assets/logo-login.jpg";
import RegistrationPage from "./RegistrationPage.jsx";
import { users as initialUsers } from "../data/Users.js";

import { useState } from "react";
import "./WelcomePage.css";

export default function WelcomePage({ setPage }) {
  const [showPage, setShowPage] = useState("welcome");
  const [users, setUsers] = useState(initialUsers);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleLogin = (firstname, lastname) => {
    setFirstname(firstname);
    setLastname(lastname);
  };
  const handleRegister = (firstname, lastname) => {
    setFirstname(firstname);
    setLastname(lastname);
  };
  return (
    <>
      {showPage === "login" && (
        <div className="login">
          <div className="login-text">
            <h2>Let&#39;s play quiz!</h2>
            <img id="theme-image" src={loginImage} alt="Quiz App" />

            <p>Enter your information below</p>
          </div>
          <LoginPage
            onLogin={handleLogin}
            setPage={setPage}
            showPage={showPage}
            setShowPage={setShowPage}
            users={users}
          />
        </div>
      )}
      {showPage === "register" && (
        <RegistrationPage
          onLogin={handleRegister}
          setPage={setPage}
          showPage={showPage}
          setShowPage={setShowPage}
          users={users}
          setUsers={setUsers}
        />
      )}

      {showPage === "welcome" && (
        <div className="welcome-container">
          <h2>
            Welcome to Quiz App <span>{`${firstname}  ${lastname}!`}</span>!
          </h2>
          <img src={welcomeImage} alt="Quiz App" className="welcome-image" />

          <p>Test your knowledge and enjoy the quiz!</p>
          {/* <button
            onClick={() => {
              setPage("quiz");
            }}
          >
            Quiz starten
          </button> */}
          <button
            onClick={() => {
              setShowPage("login");
            }}
          >
            Login
          </button>
        </div>
      )}
    </>
  );
}
