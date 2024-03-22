import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Login.css";
const Login = () => {
  const [loginFormData, SetLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData);
  };

  const handleCh = (e) => {
    const { name, value } = e.target;
    SetLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <h1>Login to your account</h1>
      <form className="login-form" onSubmit={handleSubmit} action="#">
        <input
          type="email"
          onChange={handleCh}
          placeholder="Enter email address"
          name="email"
          value={loginFormData.email}
        />
        <input
          type="password"
          onChange={handleCh}
          placeholder="Enter password"
          name="password"
          value={loginFormData.password}
        />
        <button>Login</button>
      </form>

      <p>don't have an account </p>

      <Link className="createAcc-Btn" to="signup">
        Create account
      </Link>
    </div>
  );
};

export default Login;
