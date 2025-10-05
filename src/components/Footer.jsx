import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer bg-dark text-white pt-5">
            <Container>
                <Row className="mb-4 justify-content-between">
                    <Col md={6} sm={12} className="mb-3">
                        <h5>Luna & Granos Café</h5>
                        <p>Un lugar acogedor donde disfrutar del mejor café y pastelería artesanal todos los días.</p>
                    </Col>

                    <Col md={6} sm={12} className="mb-3 text-md-end text-sm-start">
                        <h5>Contacto</h5>
                        <p><FaMapMarkerAlt /> Dirección:Av. Gdor. Vergara 2222 , Hurlingham - Buenos Aires</p>
                        <p><FaPhoneAlt /> Teléfono: 011 2066-1958</p>
                        <p><FaEnvelope /> Email: informatica@unahur.edu.ar</p>
                        <div className="social-icons mt-2">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3 text-white"><FaFacebookF /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3 text-white"><FaInstagram /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white"><FaTwitter /></a>
                        </div>
                    </Col>
                </Row>

                <hr className="bg-white" />

                <Row>
                    <Col className="text-center pb-3">
                        &copy; {new Date().getFullYear()} Luna & Granos Café. Todos los derechos reservados.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
