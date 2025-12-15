import { motion } from "framer-motion";
import { BarChart3, Cpu, Sparkles, GlobeLock } from "lucide-react";
import Container from "./Container";

const features = [
  {
    icon: BarChart3,
    title: "Precision Trading",
    description: "Depth-rich order books, smart order routing, and institutional-grade execution quality.",
  },
  {
    icon: Cpu,
    title: "Automated Insights",
    description: "Signal-ready analytics, curated market intel, and actionable alerts in real time.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description: "Luxury-grade UI with consistent spacing, balanced typography, and distraction-free flows.",
  },
  {
    icon: GlobeLock,
    title: "Global Protection",
    description: "Jurisdiction-aware controls, regional compliance layers, and privacy-first data handling.",
  },
];

const variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: "easeOut" },
  }),
};

export default function Features() {
  return (
    <section id="features" className="bg-background-primary py-20">
      <Container className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold leading-relaxed">Designed for flawless execution</h2>
          <p className="text-lg leading-relaxed text-text-muted">
            Every component is tuned for clarity, speed, and confidence—built for traders who expect perfection.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                className="flex h-full flex-col gap-6 rounded-2xl border border-white/5 bg-background-secondary px-6 py-6"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold leading-relaxed">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-text-muted">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

