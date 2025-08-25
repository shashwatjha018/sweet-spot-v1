import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Catalogue } from "../components/Catalogue";
import { CustomOrder } from "../components/CustomOrder";
import { CustomCakeOrderForm } from "../components/CustomCakeOrderForm";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";

export default function Index() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />

      <main>
        <Hero />
        <Catalogue />
        <CustomOrder />
        <CustomCakeOrderForm />
        <About />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
