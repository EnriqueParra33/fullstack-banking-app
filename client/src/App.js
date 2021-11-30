import { Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./pages/Navbar";
import Home from "./pages/Home";
import Createaccount from "./pages/Createaccount";
import Login from "./pages/Login";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";

import UserContext from "./context";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState({
    id: null,
    name: null,
    email: null,
    balance: null,
  });
  return (
    <>
      <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
        <Navigation />
        <HashRouter>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/CreateAccount/" component={Createaccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
        </HashRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
