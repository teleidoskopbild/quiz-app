import { useState } from "react";
import { users } from "./Users.js";
import RegistrationForm from "./RegistrationPage.jsx";
import "./WelcomePage.css";

export default function LoginPage({ onLogin, setPage }) {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const [showRegistration, setShowRegistration] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  // let errors = {
  //   username: false,
  //   password: false,
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const validUser = users.find(
      (item) =>
        item.username === inputValue.username &&
        item.password === inputValue.password
    );

    if (validUser) {
      setErrorMessage("");
      onLogin();
    } else if (!inputValue.username && !inputValue.password) {
      setErrorMessage("Ungültige Username oder Passwort.");
    } else if (!inputValue.username) {
      // errors.username = true;
      setErrorMessage("Username dar nicht leer sein");
      console.log(errorMessage.username, errorMessage.password);
      // setErrorMessage("Ungültige Username oder Passwort.");
    } else if (!inputValue.password) {
      // errors.password = true;
      setErrorMessage("password dar nicht leer sein");
    }
  };
  // if (showRegistration) {
  //   return <RegistrationForm />;
  // }
  <RegistrationForm setPage={setPage} />;

  return (
    <div class="login-container">
      <form onSubmit={handleSubmit} class="login-form">
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={inputValue.username}
            onChange={(e) =>
              setInputValue({ ...inputValue, username: e.target.value })
            }
          />
          {errorMessage && !inputValue.username ? (
            <p>{errorMessage}</p>
          ) : undefined}
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={inputValue.password}
            onChange={(e) =>
              setInputValue({ ...inputValue, password: e.target.value })
            }
          />
        </div>
        {/* {errorMessage && (
          <p style={{ color: "red" }}>{errorMessage.username}</p>
        )} */}
        {errorMessage && !inputValue.password ? (
          <p>{errorMessage}</p>
        ) : undefined}
        <div class="button-row">
          <button type="submit">Login</button>
          {/* <button onClick={() => RegistrationForm()}>Registrieren</button> */}
          <button
            onClick={() => {
              setPage("register");
            }}
          >
            Registrieren
          </button>
          <button
            onClick={() => {
              setPage("quiz");
            }}
          >
            Quiz Start!
          </button>
        </div>
      </form>
    </div>
  );
}
