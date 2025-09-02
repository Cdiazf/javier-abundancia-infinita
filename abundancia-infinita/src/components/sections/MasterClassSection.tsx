import { Container } from "react-bootstrap";

export default function MasterClassSection() {
  return (
    <section id="masterclass" className="py-5 bg-white">
      <Container>
        <h2 className="fw-bold mb-3 text-dark">MasterClass</h2>
        <p className="text-muted">
          Inserta aquí tu reproductor, iframe o botón a Zoom/YouTube.
        </p>
      </Container>
    </section>
  );
}
