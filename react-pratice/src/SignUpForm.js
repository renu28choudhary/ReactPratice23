// 2.Create a form with 3 input field Name,phone number ,email id and
//a submit button, and onclick of it ,the entered data should be shown in an alert message .

import React, { useState } from "react";
import './SignUpForm.css'

function SignUpForm() {
  const [name, setName] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhonenumChange = (e) => {
    setPhonenum(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    alert(`${name} ${phonenum} ${email}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>SignUpForm</div>
        <div>
          <div className="center">
            <input
              type="text"
              placeholder="enter your Name"
              value={name}
              onChange={handleNameChange}
            ></input>
          </div>
          <div className="center">
            <input
              type="tel"
              placeholder="enter your phone number"
              value={phonenum}
              onChange={handlePhonenumChange}
            ></input>
          </div>
          <div className="center">
            <input
              type="email"
              placeholder="enter your email id"
              value={email}
              onChange={handleEmailChange}
            ></input>
          </div>
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default SignUpForm;
