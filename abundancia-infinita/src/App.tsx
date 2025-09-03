import { Container, Row, Col } from "react-bootstrap";
import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
import QuickLinksPanel, { type QuickLink } from "./components/QuickLinksPanel";
import MeditationsSection from "./components/sections/MeditationsSection";
import EbookSection from "./components/sections/EbookSection";
import StatsSection from "./components/StatsSection";
import SiteFooter from "./components/SiteFooter";
import MasterClassSection from "./components/sections/MasterClassSection";

const LINKS: QuickLink[] = [
  { label: "MasterClass", href: "#masterclass" },
  { label: "Meditación 1", href: "#meditacion-1" },
  { label: "Meditación 2", href: "#meditacion-2" },
  { label: "Ebook", href: "#ebook" },
  {
    label: "Diapositiva",
    href: "https://www.canva.com/design/DAGx2KCd4_w/PwTINnmzxsM3X_QidoDYWw/view?utm_content=DAGx2KCd4_w&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h67bcfb8725",
  },
];

export default function App() {
  return (
    <div
      className="text-dark"
      style={{ minHeight: "100vh", background: "var(--jh-bg)" }}
    >
      <TopNav />

      {/* Hero + Quick links side by side */}
      <section className="position-relative" style={{ paddingTop: 72 }}>
        <Hero />
        <div
          className="position-absolute top-50 end-0 w-100"
          style={{ transform: "translateY(-50%)" }}
        >
          <Container>
            <Row className="justify-content-end">
              <Col lg={5}>
                <QuickLinksPanel links={LINKS} />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <StatsSection />

      <MasterClassSection />

      <MeditationsSection />
      <EbookSection />
      <SiteFooter />
    </div>
  );
}
