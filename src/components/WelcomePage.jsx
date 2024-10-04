// import LoginPage from "./LoginPage.jsx";
import welcomeImage from "../assets/welcome.jpg";
// import loginImage from "../assets/logo-login.jpg";
// import RegistrationPage from "./RegistrationPage.jsx";
// import { users as initialUsers } from "../data/Users.js";

// import { useState } from "react";
import "./WelcomePage.css";

export default function WelcomePage({
  setPage,
  page,
  setCurrentUser,
  currentUser,
  users,
  setUsers,
}) {
  return (
    <>
      {/* {page === "login" && (
        <LoginPage
          onLogin={handleLogin}
          setPage={setPage}
          showPage={showPage}
          setShowPage={setShowPage}
          users={users}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )} */}
      {/* {showPage === "register" && (
        <RegistrationPage
          onLogin={handleRegister}
          setPage={setPage}
          showPage={showPage}
          setShowPage={setShowPage}
          users={users}
          setUsers={setUsers}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )} */}

      {/* {showPage === "welcome" && ( */}
      <div className="welcome-container">
        <h2>Welcome to Quiz App !</h2>
        <img src={welcomeImage} alt="Quiz App" className="welcome-image" />

        <p>Test your knowledge and enjoy the quiz!</p>

        <button
          onClick={() => {
            setPage("login");
          }}
        >
          Login
        </button>
      </div>
      {/* )} */}
    </>
  );
}
