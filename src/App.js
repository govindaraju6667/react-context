import React, { createContext, useState } from "react";

import { LoginPage } from "./components2/LoginPage";
import { Register } from "./components2/Register";
import { Home } from "./components2/Home";

export const AppContext = createContext(null);

function App() {
  const [name, setName] = useState([]);
  const [password, setPassword] = useState([]);
  const [store, setStore] = useState([]);
  const [page, setPage] = useState(false);
  return (
    <div>
      <AppContext.Provider
        value={{
          name,
          password,
          store,
          setName,
          setPassword,
          setStore,
          page,
          setPage,
        }}
      >
        <LoginPage />
        <Register />
        <Home />
      </AppContext.Provider>
    </div>
  );
}

export default App;
