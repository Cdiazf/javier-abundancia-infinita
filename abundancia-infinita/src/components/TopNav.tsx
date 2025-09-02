import { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

export default function TopNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className="bg-darkglass shadow-sm"
        style={{ backdropFilter: "saturate(120%) blur(6px)" }}
      >
        <Container>
          <Navbar.Brand href="#principal" className="fw-bold text-white">
            <span className="me-2" style={{ color: "var(--jh-accent)" }}>
              JH
            </span>
            Abundancia Infinita
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="nav"
            onClick={() => setOpen(true)}
            className="border-0"
          />
          <Navbar.Collapse id="nav" className="d-none d-lg-flex">
            <Nav className="ms-auto gap-3">
              <Nav.Link className="text-white-50" href="#principal">
                Inicio
              </Nav.Link>
              <Nav.Link className="text-white-50" href="#masterclass">
                MasterClass
              </Nav.Link>
              <Nav.Link className="text-white-50" href="#meditaciones">
                Meditaciones
              </Nav.Link>
              <Nav.Link className="text-white-50" href="#ebook">
                Ebook
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas placement="end" show={open} onHide={() => setOpen(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-2">
            <Nav.Link href="#principal" onClick={() => setOpen(false)}>
              Inicio
            </Nav.Link>
            <Nav.Link href="#masterclass" onClick={() => setOpen(false)}>
              MasterClass
            </Nav.Link>
            <Nav.Link href="#meditaciones" onClick={() => setOpen(false)}>
              Meditaciones
            </Nav.Link>
            <Nav.Link href="#ebook" onClick={() => setOpen(false)}>
              Ebook
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
