import React, { useState } from "react";
import "./RegisterForm.css";

function RegisterForm() {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstNameChange = (e) => {
    setUserFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setUserLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmission = (e) => {
    alert(`I am ${userFirstName} ${userLastName} & my Email is ${email}.`);
  };
  return (
    <form onSubmit={handleFormSubmission} className="outer-Container">
      <div className="form-container">
        <input
          type="text"
          placeholder="First name"
          onChange={handleFirstNameChange}
          value={userFirstName}
        ></input>
        <input
          type="text"
          placeholder="Last name"
          onChange={handleLastNameChange}
          value={userLastName}
        ></input>
        <input
          type="email"
          placeholder="email"
          onChange={handleEmailChange}
          value={email}
        ></input>
      </div>
      <button className="submitButton">Register</button>
    </form>
  );
}

export default RegisterForm;
