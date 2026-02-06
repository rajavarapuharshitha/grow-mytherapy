import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Office from "@/components/Office";
import Footer from "@/components/Footer"; // 1. Import it

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <FAQ />
        <Office />
      </main>
      <Footer /> {/* 2. Place it here */}
    </>
  );
}