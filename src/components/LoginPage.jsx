import { useState } from "react";
import { users } from "./Users.js";
import RegistrationForm from "./RegistrationPage.jsx";
import "./WelcomePage.css";

export default function LoginPage({ onLogin, setPage }) {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    firstname: "",
  });
  // const [showRegistration, setShowRegistration] = useState(false);

  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};
    let hasError = false;

    const validUser = users.find(
      (item) =>
        item.username === inputValue.username &&
        item.password === inputValue.password
    );
    if (!inputValue.username) {
      errors.username = "Username darf nicht leer sein";
      hasError = true;
    }

    if (!inputValue.password) {
      errors.password = "Password darf nicht leer sein";
      hasError = true;
    }

    if (hasError) {
      setErrorMessage(errors);
      return;
    }
    if (validUser) {
      setInputValue({
        username: "",
        password: "",
      });
      setErrorMessage({
        username: "",
        password: "",
      });
      onLogin(validUser.firstname, validUser.lastname);
    }
    // setSubmitData();
  };
  // if (showRegistration) {
  //   return <RegistrationForm />;
  // }
  <RegistrationForm setPage={setPage} />;

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
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
          {/* {errorMessage.username && <p>{errorMessage.username}</p>} */}
          {errorMessage.username && !inputValue.username ? (
            <p>{errorMessage.username}</p>
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

        {errorMessage.password && !inputValue.password ? (
          <p>{errorMessage.password}</p>
        ) : undefined}
        <div className="button-row">
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
