import React from "react";
import "./sass/style.scss";
import Layout from "./components/layout/Layout";
import LoginPage from "./components/login/LoginPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Layout />
      <Footer />
    </>
  );
}

export default App;

//NB NB NB NB
//her kan eg legge inn <div className="container"></div> istedenfor <> </>
