import "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {
    const location = useLocation().pathname;

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                {/* Navbar Brand */}
                <Navbar.Brand as={Link} to="/">
                    Blaine Bishop
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
                                className={`text-light mx-3 ${location === `/${title.toLowerCase()}` ? "fw-bold active" : ""
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
