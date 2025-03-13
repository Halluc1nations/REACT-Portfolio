import { useState } from "react";
import { Outlet } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation.jsx";

function App() {


 
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* <Header /> */}
      <Navigation />
      <main className="container flex-grow-1 py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;



