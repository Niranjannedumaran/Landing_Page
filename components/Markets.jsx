import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, BarChart3, DollarSign } from "lucide-react";
import Container from "./Container";

const markets = [
  {
    pair: "BTC / USD",
    price: "$56,120.45",
    change: "+3.2%",
    trend: "up",
    icon: DollarSign,
    description: "Deep liquidity and institutional-grade matching.",
  },
  {
    pair: "ETH / USD",
    price: "$3,210.14",
    change: "-0.9%",
    trend: "down",
    icon: BarChart3,
    description: "Layered market data with low latency execution.",
  },
  {
    pair: "SOL / USD",
    price: "$112.85",
    change: "+1.4%",
    trend: "up",
    icon: TrendingUp,
    description: "High throughput markets for active strategies.",
  },
  {
    pair: "ADA / USD",
    price: "$0.64",
    change: "+0.6%",
    trend: "up",
    icon: TrendingUp,
    description: "Tight spreads and robust order books.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.05, ease: "easeOut" },
  }),
};

export default function Markets() {
  return (
    <section id="markets" className="bg-background-primary py-20">
      <Container className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold leading-relaxed">Live markets</h2>
          <p className="text-lg leading-relaxed text-text-muted">
            Real-time prices, tight spreads, and institutional liquidity across major markets.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((m, index) => {
            const Icon = m.icon;
            const up = m.trend === "up";
            return (
              <motion.div
                key={m.pair}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                className="flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-background-secondary px-6 py-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-text-muted">{m.pair}</div>
                    <div className="mt-1 text-xl font-semibold">{m.price}</div>
                    <div className={`mt-1 text-sm ${up ? "text-green-400" : "text-rose-400"}`}>{m.change}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">{m.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
