import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Log in - Ecommerce app"}>
      <div className="form-container">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              value={email}
              type="email"
              className="form-control"
              required
              onChange={(e) => setEmail(e.target.value)}
              id="InputEmail"
              placeholder="Your Email Address"
            />
          </div>

          <div className="mb-3">
            <input
              value={password}
              type="password"
              className="form-control"
              required
              onChange={(e) => setPassword(e.target.value)}
              id="InputPassword1"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>

          <button type="submit" className="btn btn-primary" onClick={()=>{navigate('/forgotPassword')}}>
            Forgot your password?
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default LogIn;
