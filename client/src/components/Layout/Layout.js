import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = (props) => {
  const { title, description, keywords, author } = props; // Destructure props to access the values

  return (
    <div
      style={{
        height: "100vh",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <Header />
      <main style={{ flexBasis: "100%" }}>
        <ToastContainer />
        {props.children}
        </main>
      <Footer  />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce App - shop now",
  description: "mern stack project",
  keywords:"mern,react,node,mongodb",
  author:"CodrGens",
}

export default Layout;



