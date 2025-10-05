import { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

export default function FormularioContacto() {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        fecha: "",
        hora: "",
        mensaje: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
        setSuccess("");
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.nombre || !form.email || !form.fecha || !form.hora || !form.mensaje) {
            setError("Todos los campos son obligatorios.");
            return;
        }

        if (!validateEmail(form.email)) {
            setError("Ingrese un email válido.");
            return;
        }

        setSuccess("¡Reserva enviada con éxito! Nos pondremos en contacto contigo.");
        setForm({ nombre: "", email: "", fecha: "", hora: "", mensaje: "" });
    };

    return (
        <Container className="my-5 p-4 bg-light rounded shadow" style={{ maxWidth: '600px' }}>
            <h2 className="mb-4 text-center">Contacto / Reservas</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="ejemplo@correo.com"
                    />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="fecha">
                            <Form.Label>Fecha de reserva</Form.Label>
                            <Form.Control type="date" name="fecha" value={form.fecha} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="hora">
                            <Form.Label>Hora de reserva</Form.Label>
                            <Form.Control type="time" name="hora" value={form.hora} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="mensaje">
                    <Form.Label>Mensaje / Detalles</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="mensaje"
                        value={form.mensaje}
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje o detalles de la reserva"
                    />
                </Form.Group>

                <div className="text-center">
                    <Button variant="success" type="submit">
                        Enviar Reserva
                    </Button>
                </div>
            </Form>
        </Container>
    );
}
