import Container from "./Container";

const columns = [
  {
    heading: "Platform",
    links: ["Markets", "Pricing", "Status", "API"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    heading: "Security",
    links: ["Audits", "Compliance", "Insurance", "Bug Bounty"],
  },
  {
    heading: "Support",
    links: ["Help Center", "Guides", "FAQs", "Community"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-background-primary py-16">
      <Container className="space-y-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {columns.map((column) => (
            <div key={column.heading} className="space-y-4">
              <h3 className="text-lg font-semibold leading-relaxed">{column.heading}</h3>
              <ul className="space-y-3 text-base leading-relaxed text-text-muted">
                {column.links.map((item) => (
                  <li key={item} className="hover:text-text-primary">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 border-t border-white/5 pt-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="text-text-primary">
            Lux<span className="text-accent-gold">Exchange</span>
          </div>
          <p>Crafted for discerning investors. © {new Date().getFullYear()} LuxExchange.</p>
        </div>
      </Container>
    </footer>
  );
}

