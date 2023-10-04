import React, { useContext } from "react";
import { AppContext } from "../App";
// import { link, useNavigate } from "react-router-dom";

// const nameReg =
// /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;

// const valid =
// /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;

export const Register = () => {
  const { name, password, setName, setPassword, store, setStore } =
    useContext(AppContext);

  const handleClick = (e) => {
    e.preventDefault();

    // if (valid === password) {
    //   alert("success");
    // } else {
    //   alert("valid failed");
    // }

    const formData = {
      name: name,
      pass: password,
    };

    setStore([...store, formData]);
    console.log(formData);

    setName("");
    setPassword("");
  };

  return (
    <div>
      <h1>Register</h1>
      <label>
        Enter Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </label>
      <br />
      <label>Enter Password</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <label />
      <br />
      <button onClick={handleClick}>Register</button>
    </div>
  );
};
