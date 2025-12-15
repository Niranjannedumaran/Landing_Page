import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Features from "@/components/Features";
import Markets from "@/components/Markets";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>LuxExchange | Luxury Crypto Exchange</title>
        <meta
          name="description"
          content="Trade digital assets with luxury-grade precision, institutional security, and balanced design."
        />
      </Head>
      <div className="min-h-screen bg-background-primary">
        <Navbar />
        <main className="space-y-0">
          <Hero />
          <Trust />
          <Features />
          <Markets />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}

