import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import logo from '../assets/logo1.png';

function NavigationBar() {
    const [navbarOscuro, setNavbarOscuro] = useState(false);

    return (
        <Navbar
            bg={navbarOscuro ? "dark" : "light"}
            variant={navbarOscuro ? "dark" : "light"}
            expand="lg"
        >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        alt="Luna & Granos Café"
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }}
                        className="d-inline-block align-top"
                    />{' '}
                    Luna & Granos Café
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/Carta">Carta</Nav.Link>
                        <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
                        <Nav.Link as={Link} to="/Nosotros">Nosotros</Nav.Link>
                        <Nav.Link as={Link} to="/Carrito">Carrito</Nav.Link>

                        <div
                            onClick={() => setNavbarOscuro(!navbarOscuro)}
                            style={{
                                cursor: 'pointer',
                                marginLeft: '15px',
                                fontSize: '1.2rem',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            {navbarOscuro ? <FaMoon color="#FFD700" /> : <FaSun color="#FFA500" />}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
