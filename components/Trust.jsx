import { ShieldCheck, LockKeyhole, ServerCog, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import Container from "./Container";

const items = [
  {
    icon: ShieldCheck,
    title: "Regulated Custody",
    description: "Segregated cold storage with institutional-grade governance and 24/7 monitoring.",
  },
  {
    icon: LockKeyhole,
    title: "Zero Trust Security",
    description: "Hardware keys, multi-sig approvals, and enforced withdrawal allowlists.",
  },
  {
    icon: ServerCog,
    title: "Resilient Infrastructure",
    description: "Distributed matching engine with millisecond latencies and built-in failover.",
  },
  {
    icon: BadgeCheck,
    title: "Audited Compliance",
    description: "Independent audits, SOC 2 controls, and real-time proof-of-reserves reporting.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: "easeOut" },
  }),
};

export default function Trust() {
  return (
    <section id="trust" className="bg-background-secondary py-20">
      <Container className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold leading-relaxed">Trusted by discerning investors</h2>
          <p className="text-lg leading-relaxed text-text-muted">
            Built to exceed institutional standards with transparent controls, layered defenses, and relentless monitoring.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                className="flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-background-primary px-6 py-6"
              >
                <div className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold leading-relaxed">{item.title}</h3>
                  <p className="text-base leading-relaxed text-text-muted">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

