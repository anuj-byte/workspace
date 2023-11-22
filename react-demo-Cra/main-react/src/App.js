import React from "react";
import SignUpComponents from "./components/SPA_Components/Signup";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Dashboard from "./components/SPA_Components/Dashboard";
import HomePage from "./components/SPA_Components/ViewMentor";

function App() {
  return (
    <div>
      <BrowserRouter> {/*browser route is used to wrap the routes*/} 
        {/*<Link to="/signup">Signup</Link>Link is used as a hyperlink and change that perticular components in same page 
        <Link to="/Dashboard">Dashboard</Link>*/}
        <Routes>{/*Routes is use to set a group of route in it which is further use to define the path to given components*/} 
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
