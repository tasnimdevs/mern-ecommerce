import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import axios from "axios";
import toast from "react-hot-toast";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/auth/profile", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("profile updated successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Profile"}>
      <div className="container-flui p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <h4 className="mb-3">User Profile</h4>

                <div className="mb-3">
                  <input
                    value={name}
                    type="text"
                    className="form-control"
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
                    onChange={(e) => setEmail(e.target.value)}
                    id="InputEmail"
                    placeholder="Your Email Address"
                    disabled
                  />
                </div>

                <div className="mb-3">
                  <input
                    value={phone}
                    type="number"
                    className="form-control"
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
                    onChange={(e) => setPassword(e.target.value)}
                    id="InputPassword1"
                    placeholder="Create your password"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
