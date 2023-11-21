import React from "react";
import SignUpComponents from "./components/SPA_Components/Signup";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Dashboard from "./components/SPA_Components/Dashboard";
import HomePage from "./components/SPA_Components/ViewMentor";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/*<Link to="/signup">Signup</Link>
        <Link to="/Dashboard">Dashboard</Link>*/}
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/signup"
            element={<SignUpComponents></SignUpComponents>}
          ></Route>
          <Route
            path="/Dashboard/:username"
            element={<Dashboard></Dashboard>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
