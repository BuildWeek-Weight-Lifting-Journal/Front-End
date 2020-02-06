import React, { useState, useEffect } from "react";
import "./interceptor";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Journal from "./components/journals/Journal";
import { UserContext } from "./contexts/UserContext";
import Dashboard from "./components/Dashboard"
import CreateJournal from "./components/CreateJournal"
import Navigation from "./components/Navigation";
import "./App.css";

function App(props) {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (user.id) {
      setLoggedIn(true);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user }}>
      <div className="App">
        {loggedIn && <Navigation user={user} setLoggedIn={setLoggedIn} />}
        <Route
          exact path="/" 
          exact
          render={props => <Login {...props} setUser={setUser} />}
        />
        <Route
          path="/login" 
          exact
          render={props => <Login {...props} setUser={setUser} />}
        />
        <Route
          path="/register"
          exact
          render={props => <Register {...props} setUser={setUser} />}
        />

        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/journal/:id" component={Journal} />
        <PrivateRoute exact path="/journal" component={CreateJournal} />

        <Route
          path="/newjournal/:id"
          render={props => <CreateJournal {...props} user={user} />}
        />
      </div>
    </UserContext.Provider>
  );
}

export default App;