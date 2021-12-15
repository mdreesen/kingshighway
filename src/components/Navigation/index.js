import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing custom CSS
import './nav.css';
import '../../fonts/fonts.css';

// importing navdata
import navData from '../../utils/navdata.json';
const navLink = navData.links;

export default function Navigation() {

    const Links = () => {
        return (
            <Nav className="me-auto">
                {navLink.map((page, index) =>
                    page.sub ? (
                        <NavDropdown title={page.name} id="collasible-nav-dropdown" key={`dropdown-${index}`}>
                            {page.sub.map((sub, i) => <NavDropdown.Item href={sub.link} key={`sub-${i}`}>{sub.name}</NavDropdown.Item>)}
                        </NavDropdown>
                    ) : (
                        <Nav.Link href={page.link} key={`page-${index}`}>{page.name}</Nav.Link>
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