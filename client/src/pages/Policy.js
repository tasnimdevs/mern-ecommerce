import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy-policy.svg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <img
            src="/images/privacy-policy-logo.jpeg"
            alt="contactus"
            style={{ width: "60%" }}
          />
          <p>
            A privacy policy is a statement or legal document (in privacy law)
            that discloses some or all of the ways a party gathers, uses,
            discloses, and manages a customer or client's data.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
