import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import CalendlyWidget from "@/components/CalendlyWidget";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import {
  BookOpen,
  Calculator,
  TrendingUp,
  Briefcase,
  HeartHandshake,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen font-['Inter']">
      <Navigation />
      <Hero />

      {/* Statistics Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <AnimatedCounter value="100M+" />
              <p className="text-sm md:text-base text-muted-foreground">
                AED Turnover Managed
              </p>
            </div>
            <div className="text-center">
              <AnimatedCounter value="Big 4" />
              <p className="text-sm md:text-base text-muted-foreground">
                Experience Background
              </p>
            </div>
            <div className="text-center">
              <AnimatedCounter value="24/7" />
              <p className="text-sm md:text-base text-muted-foreground">
                Client Support
              </p>
            </div>
            <div className="text-center">
              <AnimatedCounter value="100%" />
              <p className="text-sm md:text-base text-muted-foreground">
                Compliance Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Deenār Consultants FZE is a UAE-based tax and accounting
              consultancy founded on principles of trust, transparency, and
              ethical finance. We offer financial management, tax compliance,
              and strategic advisory services tailored for SMEs and corporates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            <Card className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <HeartHandshake
                    className="w-7 h-7 text-primary group-hover:text-accent transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <h4 className="text-lg font-semibold text-card-foreground">
                  Ethically Aligned
                </h4>
                <p className="text-sm text-muted-foreground">
                  Guided by values, built on trust
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Award
                    className="w-7 h-7 text-primary group-hover:text-accent transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <h4 className="text-lg font-semibold text-card-foreground">
                  Qualified Expertise
                </h4>
                <p className="text-sm text-muted-foreground">
                  Chartered Accountants with Big 4 experience
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Award
                    className="w-7 h-7 text-primary group-hover:text-accent transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <h4 className="text-lg font-semibold text-card-foreground">
                  Proven Leadership
                </h4>
                <p className="text-sm text-muted-foreground">
                  Managed entities over AED 100M turnover
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/about">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive financial and tax solutions tailored for SMEs and
              growing businesses in the UAE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border bg-card group">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <BookOpen
                    className="w-8 h-8 text-primary group-hover:text-accent transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-bold text-card-foreground">
                  Accounting & Financial Reporting
                </h3>
                <p className="text-sm text-muted-foreground">
                  Professional financial management you can trust
                </p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border bg-card group">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Calculator
                    className="w-8 h-8 text-primary group-hover:text-accent transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-bold text-card-foreground">
                  Tax Compliance & Advisory
                </h3>
                <p className="text-sm text-muted-foreground">
                  Reliable and stress-free tax services
                </p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border bg-card group">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <TrendingUp
                    className="w-8 h-8 text-primary group-hover:text-accent transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-bold text-card-foreground">
                  KPI Analysis & Insights
                </h3>
                <p className="text-sm text-muted-foreground">
                  Data-driven strategic insights
                </p>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border bg-card group">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Briefcase
                    className="w-8 h-8 text-primary group-hover:text-accent transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-bold text-card-foreground">
                  Virtual CFO
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your outsourced finance partner
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Preview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions or need a consultation? We're here to help.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link to="/contact">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3">
                    Contact Us
                  </Button>
                </Link>
                <a
                  href="https://wa.me/971507775774"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-border hover:bg-muted px-8 py-3"
                  >
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground text-center mb-6">
                Book a Consultation
              </h3>
              <Card className="p-4 bg-card border-border">
                <CalendlyWidget />
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Home;
