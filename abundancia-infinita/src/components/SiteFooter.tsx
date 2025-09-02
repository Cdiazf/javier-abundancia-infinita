import { Container } from "react-bootstrap";

export default function SiteFooter() {
  return (
    <footer className="py-5 bg-dark text-white">
      <Container className="text-center">
        <p className="mb-2">© {new Date().getFullYear()} Javier Herencia</p>
        <div className="d-flex justify-content-center gap-3">
          <a className="link-light" href="#terminos">
            Términos
          </a>
          <span className="opacity-50">•</span>
          <a className="link-light" href="#privacidad">
            Privacidad
          </a>
        </div>
      </Container>
    </footer>
  );
}
