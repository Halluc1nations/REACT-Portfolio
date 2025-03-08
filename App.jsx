import React, { useState } from "react";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contact from "./components/Contact.jsx";
import Resume from "./components/Resume.jsx";
import Footer from "./components/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="container flex-grow-1 py-4">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
