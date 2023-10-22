import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/signUp`
      );
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Sign up - Ecommerce app"}>
      <div className="signUp">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
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
