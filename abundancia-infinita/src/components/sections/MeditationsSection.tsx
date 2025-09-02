import { Container, Row, Col, Card } from "react-bootstrap";

export default function MeditationsSection() {
  return (
    <section
      id="meditaciones"
      className="py-5"
      style={{ backgroundColor: "#f9fafb" }}
    >
      <Container className="text-center">
        <h2 className="fw-bold mb-4 text-dark">Meditaciones</h2>
        <Row className="justify-content-center g-4">
          <Col md={6}>
            <Card className="h-100 shadow-sm border-0 rounded-4">
              <Card.Body>
                <h5 className="fw-semibold mb-3">
                  Meditación: Sana tu relacion con el dinero{" "}
                </h5>
                <div className="ratio ratio-16x9 rounded-3 overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/ap--P5Org0E"
                    title="Meditación 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm border-0 rounded-4">
              <Card.Body>
                <h5 className="fw-semibold mb-3">
                  Meditación: Mañanas de poder
                </h5>
                <div className="ratio ratio-16x9 rounded-3 overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/yHISTPLyHt4?start=46"
                    title="Meditación 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
