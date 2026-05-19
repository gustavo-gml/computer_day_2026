import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <About />
        <Schedule />
        {/* <Sponsors /> */}
      </main>
      <Footer />
    </div>
  );
}
