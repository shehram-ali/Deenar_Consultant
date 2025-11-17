import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { useState } from "react";
import QuoteFormPopup from "@/components/QuoteFormPopup";

const AboutUs = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen font-['Inter']">
      <Navigation onOpenQuote={() => setIsQuoteOpen(true)} />

      <div className="pt-20">
        <About />
      </div>
      <Footer />
      <FloatingCallButton />
      <QuoteFormPopup open={isQuoteOpen} onOpenChange={setIsQuoteOpen} />
    </div>
  );
};

export default AboutUs;
