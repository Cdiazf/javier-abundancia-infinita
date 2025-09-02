import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function EbookSection() {
  return (
    <section id="ebook" className="py-5 bg-white">
      <Container>
        <Row className="align-items-center g-4">
          <Col md={7}>
            <h2 className="fw-bold mb-3 text-dark">Ebook</h2>
            <p className="text-muted">
              Incluye tu ebook de apoyo para reforzar el entrenamiento. Sube el
              PDF a tu hosting o Drive y coloca el enlace.
            </p>
            <Button className="btn-accent" href="#descargar-ebook">
              Descargar PDF
            </Button>
          </Col>
          <Col md={5}>
            <Card className="border-0 shadow-sm rounded-4">
              <div
                style={{ aspectRatio: "4/3", background: "#f3f3f3" }}
                className="rounded-4"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
