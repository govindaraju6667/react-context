import React, { useContext, useState } from "react";
import { AppContext } from "../App";

export const LoginPage = () => {
  const {
    name,
    password,
    setName,
    setPassword,
    setStore,
    store,
    setPage,
    page,
  } = useContext(AppContext);
  //   console.log(name);
  //   console.log(password);

  const [userNew, setUser] = useState([]);
  const [verify, setVerify] = useState("");

  console.log(userNew);

  function handleClick() {
    const userData = store.find(
      (user) => user.name === userNew && user.pass === verify
    );

    if (userData) {
      console.log(userData);
      alert("success");
      setUser("");
      setVerify("");
    } else {
      alert("failed");
    }
  }

  return (
    <div>
      <h1>Login page</h1>
      <label>
        Enter Name
        <input
          type="text"
          value={userNew}
          onChange={(e) => setUser(e.target.value)}
        ></input>
      </label>
      <br />
      <label>
        Enter password
        <input
          type="text"
          value={verify}
          onChange={(e) => setVerify(e.target.value)}
        ></input>
      </label>
      <br />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};
