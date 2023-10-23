import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/signUp", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Sign up - Ecommerce app"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="mb-3">Sign up Form</h4>
          <div className="mb-3">
            <input
              value={name}
              type="text"
              className="form-control"
              required
              onChange={(e) => setName(e.target.value)}
              id="InputName"
              placeholder="Your Name"
            />
          </div>
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
              value={phone}
              type="number"
              className="form-control"
              required
              onChange={(e) => setPhone(e.target.value)}
              id="InputPhone"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="mb-3">
            <input
              value={address}
              type="text"
              className="form-control"
              required
              onChange={(e) => setAddress(e.target.value)}
              id="InputAddress"
              placeholder="Your Address"
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
              placeholder="Create your password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
