import { MessageCircle } from "lucide-react";
import { WhatsappIcon } from "./icons/WhatsappIcon";

const FloatingCallButton = () => {
  return (
    <a
      href="https://wa.me/971501765882"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group animate-pulse hover:animate-none"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsappIcon
        className="w-9 h-9 group-hover:scale-110 transition-transform"
        // fill="white"
      />
    </a>
  );
};

export default FloatingCallButton;
