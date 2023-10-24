import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
  
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/api/v1/auth/forgot-password", {
          email,
          newPassword,
          answer
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
          navigate("/logIn");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
  
  return (
    <Layout title={"Forgot Password - Ecommerce app"}>
      <div className="form-container">
        <h1>Reset Password</h1>
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
              value={answer}
              type="text"
              className="form-control"
              required
              onChange={(e) => setAnswer(e.target.value)}
              id="InputPassword1"
              placeholder="What is your Favorite sports ?"
            />
          </div>

          <div className="mb-3">
            <input
              value={newPassword}
              type="password"
              className="form-control"
              required
              onChange={(e) => setNewPassword(e.target.value)}
              id="InputPassword1"
              placeholder="Create your new password"
            />
          </div>
          
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Save your new password
            </button>
          </div>

          
        </form>
      </div>
    </Layout>
  )
}

export default ForgotPassword