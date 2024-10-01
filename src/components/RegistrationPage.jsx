import { useState } from "react";
// import { users } from "./Users.js";

function RegistrationForm() {
  //   const [inputValue, setInputValue] = useState({
  //     firstname: "",
  //     lastname: "",
  //     username: "",
  //     email: "",
  //     password: "",
  //   });
  //const [users, setUsers] = useState(initialUsers);

  //   const [errors, setErrors] = useState({});

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //  if (event.value.trim() !== "") {
  // setUsers([...users, event]);
  //   setUsers("");
  //  }
  //}
  //   };
  //   const validate = () => {
  //     const newErrors = {};
  //     if (!inputValue.name.trim()) newErrors.name = "Name darf nicht leer sein!";
  //     if (!inputValue.email.includes("@"))
  //       newErrors.email = "Email ist nicht rightig";
  //     if (inputValue.password.length < 6)
  //       newErrors.password = "Password muss mehr als 6 ...";
  //     return newErrors;
  //   };

  return (
    <div>
      <h2>Register</h2>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>Firstname:</label>
          <input
            type="text"
            name="firstname"
            value={inputValue.username}
            onChange={(e) =>
              setInputValue({ ...inputValue, username: e.target.value })
            }
          />
        </div>
        <div>
          <label>Lastname:</label>
          <input
            type="text"
            name="lastname"
            onChange={(e) =>
              setInputValue({ ...inputValue, username: e.target.value })
            }
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={(e) =>
              setInputValue({ ...inputValue, username: e.target.value })
            }
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={(e) =>
              setInputValue({ ...inputValue, username: e.target.value })
            }
          />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>

        <button type="submit">Register</button>
      </form> */}
    </div>
  );
}

export default RegistrationForm;
