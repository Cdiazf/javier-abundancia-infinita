import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end, duration]);
  return <span>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-5 bg-white align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="fw-bold display-6 text-dark mb-3">
              Únete a más de{" "}
              <span style={{ color: "var(--jh-accent)" }}>10,000</span> alumnos
              abundantes
            </h2>
            <p className="text-muted">
              Más de 10,000 personas han transformado sus vidas en nuestra
              escuela. Al elevar su conciencia, han logrado los resultados
              deseados en todas las áreas de su vida.
            </p>
            <Row className="text-center g-4 mt-3">
              <Col xs={6}>
                <h3 className="fw-bold" style={{ color: "var(--jh-accent)" }}>
                  +<Counter end={10000} />
                </h3>
                <p className="text-muted small">alumnos</p>
              </Col>
              <Col xs={6}>
                <h3 className="fw-bold" style={{ color: "var(--jh-accent)" }}>
                  +<Counter end={4} />
                </h3>
                <p className="text-muted small">años de experiencia</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="d-flex gap-3">
              <img
                src="/students1.jpg"
                alt="Alumnos"
                className="rounded-4 shadow-sm w-50"
              />
              <img
                src="/students2.jpg"
                alt="Alumnos"
                className="rounded-4 shadow-sm w-50"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
