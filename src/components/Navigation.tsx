import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import logoWhite from "@/assets/logo-white.png";

interface NavigationProps {
  onOpenQuote?: () => void;
}

const Navigation = ({ onOpenQuote }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleQuoteClick = () => {
    if (onOpenQuote) {
      onOpenQuote();
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center relative">
              <img
                src={isScrolled || !isHomePage ? logo : logoWhite}
                alt="Deenār Consultants"
                className="h-16 w-auto max-w-[48px] object-contain transition-opacity duration-300"
              />
            </div>
            <div className="flex-shrink-0">
              <h1
                className={`text-xl font-bold transition-colors duration-300 leading-tight whitespace-nowrap ${
                  isScrolled || !isHomePage ? "text-[#194074]" : "text-white"
                }`}
              >
                Deenār Consultants
              </h1>
              <p
                className={`text-xs transition-colors duration-300 leading-tight whitespace-nowrap ${
                  isScrolled || !isHomePage ? "text-[#6D6E70]" : "text-white/80"
                }`}
              >
                دينر كونسلتنتس
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors font-medium ${
                isScrolled || !isHomePage
                  ? "text-[#194074] hover:text-[#4a7ba7]"
                  : "text-white hover:text-white/80"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors font-medium ${
                isScrolled || !isHomePage
                  ? "text-[#194074] hover:text-[#4a7ba7]"
                  : "text-white hover:text-white/80"
              }`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`transition-colors font-medium ${
                isScrolled || !isHomePage
                  ? "text-[#194074] hover:text-[#4a7ba7]"
                  : "text-white hover:text-white/80"
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`transition-colors font-medium ${
                isScrolled || !isHomePage
                  ? "text-[#194074] hover:text-[#4a7ba7]"
                  : "text-white hover:text-white/80"
              }`}
            >
              Contact Us
            </Link>
            <Button
              onClick={handleQuoteClick}
              className="bg-gradient-to-r from-[#194074] to-[#2c5a8f] hover:from-[#0f2d52] hover:to-[#194074] text-white font-medium px-6 py-2 transition-all duration-300"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled || !isHomePage ? "text-[#194074]" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white border-t border-gray-200">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-[#194074] hover:bg-gray-100 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-[#194074] hover:bg-gray-100 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-[#194074] hover:bg-gray-100 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-[#194074] hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <div className="px-4">
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleQuoteClick();
                }}
                className="w-full bg-gradient-to-r from-[#194074] to-[#2c5a8f] hover:from-[#0f2d52] hover:to-[#194074] text-white"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
