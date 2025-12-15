import { motion } from "framer-motion";
import Link from "next/link";
import Container from "./Container";

const variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CTA() {
  return (
    <section id="cta" className="bg-background-secondary py-20">
      <Container className="grid place-items-center">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-3xl space-y-6 rounded-2xl border border-white/5 bg-background-primary px-8 py-10 text-center"
        >
          <h2 className="text-3xl font-semibold leading-relaxed">Trade with timeless confidence</h2>
          <p className="text-lg leading-relaxed text-text-muted">
            Join a platform engineered for precision, protected by rigorous controls, and designed for a luxury-caliber experience.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="#"
              className="rounded-full bg-accent-gold px-6 py-3 text-base font-semibold text-background-primary transition-transform hover:-translate-y-0.5"
            >
              Create account
            </Link>
            <Link
              href="#features"
              className="rounded-full border border-text-muted px-6 py-3 text-base font-semibold text-text-primary transition-colors hover:border-accent-gold hover:text-accent-gold"
            >
              Explore platform
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

