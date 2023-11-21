import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  function handleSignup() {
    navigate("/signup");
  }
  return (
    <div>
      <h1>Welcome to Home page</h1>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};
export default HomePage;
