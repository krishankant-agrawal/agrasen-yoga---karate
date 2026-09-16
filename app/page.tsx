import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Classes from "./pages/Classes";
import About from "./pages/About";
import Benefits from "./pages/Benefits";
import TrainingVideo from "./pages/TrainingVideo";
import Gallery from "./pages/Gallery";
import CTA from "./pages/CTA";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import WhatsAppButton from "./pages/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Classes />
      <About />
      <Benefits />
      <TrainingVideo />
      <Gallery />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
