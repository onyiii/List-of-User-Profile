import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import AllUsers from "./components/AllUsers";
import NoMatch from "./components/NoMatch";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user" element={<User />}>
            <Route path="all-users" element={<AllUsers />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
