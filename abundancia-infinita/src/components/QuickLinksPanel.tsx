import { Card, Button } from "react-bootstrap";

export type QuickLink = { label: string; href: string };

export default function QuickLinksPanel({ links }: { links: QuickLink[] }) {
  return (
    <Card className="border-0 shadow-lg rounded-4 card-ghost">
      <Card.Body className="p-4 p-lg-5">
        <h5 className="text-uppercase text-dark mb-3">Accesos rápidos</h5>
        <div className="d-grid gap-3">
          {links.map((item) => (
            <Button
              key={item.label}
              size="lg"
              variant="outline-dark"
              className="py-3 rounded-3 fw-semibold"
              href={item.href}
            >
              {item.label}
            </Button>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button
            variant="link"
            href="#menu-principal"
            className="text-decoration-none text-dark"
          >
            Menú principal
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
