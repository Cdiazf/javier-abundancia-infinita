import { Container, Row, Col, Button } from "react-bootstrap";

const HERO_BG = "/banner.png";

export default function Hero() {
  return (
    <section
      id="principal"
      className="position-relative d-flex align-items-center"
      style={{ minHeight: "90vh", paddingTop: 72 }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `linear-gradient(rgba(14,15,18,.55), rgba(14,15,18,.65)), url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Container className="position-relative">
        <Row className="g-4 align-items-center">
          <Col lg={7} className="text-white">
            <div className="mb-3 d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill badge-accent">
              <span className="small fw-semibold text-uppercase">
                Evento gratuito presencial
              </span>
            </div>
            <h1 className="display-4 fw-bold">
              Conecta con tu esencia y logra{" "}
              <span style={{ color: "var(--jh-accent)" }}>abundancia</span>
            </h1>
            <p className="lead opacity-75">
              Pack de bono por tu compromiso y asistencia al evento presencial.
              Descubre herramientas prácticas para elevar tu conciencia y
              resultados financieros.
            </p>
            <div className="d-flex gap-2 flex-wrap">
              <Button size="lg" className="btn-accent" href="#masterclass">
                Ver MasterClass
              </Button>
              <Button size="lg" variant="outline-light" href="#meditaciones">
                Ir a Meditaciones
              </Button>
            </div>
          </Col>
          <Col lg={5}>
            {/* Placeholder to position QuickLinksPanel at right */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
