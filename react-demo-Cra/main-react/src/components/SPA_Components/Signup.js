import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpComponents = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleChange = (e, value) => {
    if (value === "uname") {
      setUsername(e.target.value);
      console.log(username);
    }
    if (value === "email") {
      setEmail(e.target.value);
      console.log(email);
    }
    if (value === "pass") {
      setPassword(e.target.value);
      console.log(password);
    }
    if (value === "mob") {
      setPhone(e.target.value);
      console.log(phone);
    }
  };
  const handleSubmit = () => {
    navigate(`/Dashboard/${username}`);
  };
  return (
    <div>
      Username:
      <input type="text" onChange={(e) => handleChange(e, "uname")} />
      <br />
      Email:
      <input type="email" onChange={(e) => handleChange(e, "email")} />
      <br />
      Password:
      <input type="password" onChange={(e) => handleChange(e, "pass")} />
      <br />
      Phone:
      <input type="mobile" onChange={(e) => handleChange(e, "mob")} />
      <br />
      <button onClick={handleSubmit}>Submit </button>
    </div>
  );
};
export default SignUpComponents;
