import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import QuoteFormPopup from "@/components/QuoteFormPopup";
import { useState } from "react";

const Index = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen font-['Inter']">
      <Navigation onOpenQuote={() => setIsQuoteOpen(true)} />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <FloatingCallButton />

      {/* Quote Form Popup */}
      <QuoteFormPopup open={isQuoteOpen} onOpenChange={setIsQuoteOpen} />
    </div>
  );
};

export default Index;
