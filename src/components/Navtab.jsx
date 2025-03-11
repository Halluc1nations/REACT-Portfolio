import "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation({ currentPage, setCurrentPage }) {
    const location = useLocation(); // Get current route

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                {/* Navbar Brand */}
                <Navbar.Brand as={Link} to="/" onClick={() => setCurrentPage("About")}>
                    Developer Name
                </Navbar.Brand>

                {/* Hamburger Menu */}
                <Navbar.Toggle aria-controls="navbar-nav" />
                
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        {/* Navigation Links */}
                        {["About", "Portfolio", "Contact", "Resume"].map((title) => (
                            <Nav.Link
                                key={title}
                                as={Link}
                                to={`/${title.toLowerCase()}`}
                                onClick={() => setCurrentPage(title)}
                                className={`text-light mx-3 ${location.pathname === `/${title.toLowerCase()}` ? "fw-bold text-warning" : ""
                                    }`}
                            >
                                {title}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
