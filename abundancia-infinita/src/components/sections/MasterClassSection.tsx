import { Container } from "react-bootstrap";

export default function MasterClassSection() {
  return (
    <section id="masterclass" className="py-5 bg-light">
      <Container>
        <h2 className="fw-bold mb-4 text-dark">MasterClass</h2>
        <div className="ratio ratio-16x9 rounded-4 shadow-sm">
          <iframe
            src="https://www.youtube.com/embed/q9-R_lG3TpA"
            title="MasterClass Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </section>
  );
}
