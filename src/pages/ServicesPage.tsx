import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { useState } from "react";
import QuoteFormPopup from "@/components/QuoteFormPopup";

const ServicesPage = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen font-['Inter']">
      <Navigation onOpenQuote={() => setIsQuoteOpen(true)} />

      <div className="pt-20">
        <Services />
      </div>
      <Footer />
      <FloatingCallButton />
      <QuoteFormPopup open={isQuoteOpen} onOpenChange={setIsQuoteOpen} />
    </div>
  );
};

export default ServicesPage;
