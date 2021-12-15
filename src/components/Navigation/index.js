import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing custom CSS
import './nav.css';
import '../../fonts/fonts.css';

const pages = [
    {
        "name": "Home",
        "link": "/"
    },
    {
        "name": "About",
        "sub": [
            {
                "name": "Gary",
                "link": "/location/Gary"
            },
            {
                "name": "Michigan",
                "link": "/location/Michigan"
            },
            {
                "name": "Pakistan",
                "link": "/location/Pakistan"
            },
            {
                "name": "Africa",
                "link": "/location/Africa"
            }

        ],
        "link": "/about"
    },
    {
        "name": "Give",
        "link": "/give"
    },
]

export default function Navigation() {

    const Links = () => {
        return (
            <Nav className="me-auto">
                {pages.map((page) =>
                    page.sub ? (
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            {page.sub.map((sub) => <NavDropdown.Item href={sub.link}>{sub.name}</NavDropdown.Item>)}
                        </NavDropdown>
                    ) : (
                        <Nav.Link href={page.link}>{page.name}</Nav.Link>
                    )
                )}
            </Nav>
        );
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">KHDCI</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Links />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}