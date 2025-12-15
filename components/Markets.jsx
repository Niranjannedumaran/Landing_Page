import { motion } from "framer-motion";
import Container from "./Container";

const markets = [
  { pair: "BTC / USD", price: "$67,420.15", change: "+2.14%" },
  { pair: "ETH / USD", price: "$3,240.50", change: "+1.02%" },
  { pair: "SOL / USD", price: "$152.80", change: "+3.45%" },
  { pair: "XAUt / USD", price: "$1,925.30", change: "-0.25%" },
  { pair: "USDT / USD", price: "$1.00", change: "+0.01%" },
  { pair: "AVAX / USD", price: "$42.18", change: "+0.86%" },
];

const variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: "easeOut" },
  }),
};

export default function Markets() {
  return (
    <section id="markets" className="bg-background-primary py-20">
      <Container className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold leading-relaxed">Market clarity, at a glance</h2>
          <p className="text-lg leading-relaxed text-text-muted">
            Transparent pricing, tight spreads, and consistent performance across every instrument.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {markets.map((market, index) => (
            <motion.div
              key={market.pair}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              className="flex h-full flex-col gap-6 rounded-2xl border border-white/5 bg-background-secondary px-6 py-6"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-wide text-text-muted">Spot</p>
                  <h3 className="text-xl font-semibold leading-relaxed">{market.pair}</h3>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold leading-relaxed">{market.price}</p>
                  <p
                    className={
                      market.change.startsWith("-")
                        ? "text-sm font-semibold text-red-400"
                        : "text-sm font-semibold text-emerald-400"
                    }
                  >
                    {market.change}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6 text-sm text-text-muted">
                <div className="space-y-1">
                  <p className="uppercase tracking-wide">24h High</p>
                  <p className="text-text-primary">$68,120</p>
                </div>
                <div className="space-y-1">
                  <p className="uppercase tracking-wide">24h Low</p>
                  <p className="text-text-primary">$65,940</p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="uppercase tracking-wide">Volume</p>
                  <p className="text-text-primary">$1.8B</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

