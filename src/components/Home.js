import React, { useContext } from "react";
import { UserContext } from "./UserContext";
// import { login } from "./Login";

const Home = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <h2>Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};
export default Home;
