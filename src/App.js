import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import MainPage from "./Components/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        {localStorage.getItem("login") ? <Redirect to="/mainpage" /> : null}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/mainpage" component={MainPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
