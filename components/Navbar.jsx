import Link from "next/link";
import Container from "./Container";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#markets", label: "Markets" },
  { href: "#trust", label: "Security" },
  { href: "#cta", label: "Get Started" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-background-primary/80 backdrop-blur">
      <Container>
        <nav className="flex items-center justify-between py-6">
          <div className="text-lg font-semibold text-text-primary">
            Lux<span className="text-accent-gold">Exchange</span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-text-muted md:flex">
            {navLinks.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-text-primary transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="hidden rounded-full border border-accent-gold px-4 py-2 text-sm font-semibold text-accent-gold transition-colors hover:bg-accent-gold hover:text-background-primary sm:inline-flex"
            >
              Log in
            </Link>
            <Link
              href="#cta"
              className="rounded-full bg-accent-gold px-5 py-2 text-sm font-semibold text-background-primary transition-transform hover:-translate-y-0.5"
            >
              Start Trading
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}

