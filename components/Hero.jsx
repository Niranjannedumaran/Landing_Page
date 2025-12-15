import { motion } from "framer-motion";
import Link from "next/link";
import Container from "./Container";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="hero" className="bg-background-primary py-20">
      <Container className="grid place-items-center text-center">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-8"
        >
          <div className="inline-flex items-center gap-6 rounded-full bg-background-secondary px-6 py-2 text-sm text-text-muted">
            <span className="h-2 w-2 rounded-full bg-accent-gold" />
            Secure. Regulated. Built for institutions.
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-relaxed sm:text-5xl lg:text-6xl">
              Trade digital assets with confidence and timeless precision.
            </h1>
            <p className="text-lg leading-relaxed text-text-muted">
              A luxury-grade exchange experience that pairs institutional security with elegant design. Execute faster, stay informed, and invest with total clarity.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="#cta"
              className="rounded-full bg-accent-gold px-6 py-3 text-base font-semibold text-background-primary transition-transform hover:-translate-y-0.5"
            >
              Open an account
            </Link>
            <Link
              href="#markets"
              className="rounded-full border border-text-muted px-6 py-3 text-base font-semibold text-text-primary transition-colors hover:border-accent-gold hover:text-accent-gold"
            >
              View markets
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

