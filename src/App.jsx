import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="container flex-grow-1 py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
