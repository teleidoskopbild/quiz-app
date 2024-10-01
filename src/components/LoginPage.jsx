import { useState } from "react";
import { users } from "./Users.js";
import RegistrationForm from "./RegistrationPage.jsx";

export default function LoginPage({ onLogin }) {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const [showRegistration, setShowRegistration] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  let errors = {
    username: false,
    password: false,
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const validUser = users.find(
      (item) =>
        item.username === inputValue.username &&
        item.password === inputValue.password
    );

    if (validUser) {
      setErrorMessage("");
      onLogin();
    } else {
      // setErrorMessage(errors);
      setErrorMessage("Ungültige Username oder Passwort.");
    }
  };
  if (showRegistration) {
    return <RegistrationForm />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          {errorMessage.username && !inputValue.username ? (
            <p>username darf nicht leer sein</p>
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
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="submit">Login</button>
        <div className="App">
          {/* <button onClick={() => RegistrationForm()}>Registrieren</button> */}
          <button onClick={() => setShowRegistration(true)}>
            Registrieren
          </button>
        </div>
      </form>
    </div>
  );
}
