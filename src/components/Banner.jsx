import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './Banner.css';
import { Link } from 'react-router-dom';
import ban1 from "../assets/banner1.jpg"
import ban2 from "../assets/banner2.jpg"
import ban3 from "../assets/banner3.jpg"

function BannerCarousel() {
    return (
        <Carousel interval={3000} fade pause="hover">
            {/* Slide 1 */}
            <Carousel.Item>
                <img className="d-block w-100 banner-image" src={ban1}alt="Café 1"/>
                <Carousel.Caption>
                    <h1>Bienvenido a Luna & Granos Café</h1>
                    <p>Disfruta del mejor café artesanal</p>
                    <Button as={Link} to="/Carta" variant="light">
                        Ver Nuestra Carta
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-image"
                    src={ban2}
                    alt="Café 2"
                />
                <Carousel.Caption>
                    <h1>Delicias Recién Hechas</h1>
                    <p>Pastelería y snacks frescos todos los días</p>
                    <Button variant="light">Explorar</Button>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
                <img
                    className="d-block w-100 banner-image"
                    src={ban3}
                    alt="Café 3"
                />
                <Carousel.Caption>
                    <h1>Un Lugar Para Relajarte</h1>
                    <p>Disfruta de tu momento acompañado de un buen café</p>
                    <Button as={Link} to="/Contacto" variant="light">
                        Contáctanos
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default BannerCarousel;
