import {
  CheckCircle,
  Award,
  Users,
  Shield,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const values = [
    {
      icon: HeartHandshake,
      title: "Ethically Aligned",
      description: "Guided by values, built on trust",
    },
    {
      icon: Award,
      title: "Qualified Expertise",
      description: "Chartered Accountants with Big 4 & UAE experience",
    },
    {
      icon: Users,
      title: "Tailored Solutions",
      description: "Designed for SMEs and growing businesses",
    },
    {
      icon: TrendingUp,
      title: "Proven Leadership",
      description: "Managed entities over AED 100M turnover",
    },
    {
      icon: Shield,
      title: "Confidential & Compliant",
      description: "Secure, transparent, and fully compliant",
    },
    {
      icon: CheckCircle,
      title: "Personalized Advisory",
      description: "Direct partner access and responsive support",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#194074]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6D6E70]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-[#194074]/10 rounded-full mb-4">
            <span className="text-[#194074] font-semibold text-sm">
              ABOUT DEENAR CONSULTANTS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#194074] mb-6">
            Built on Trust, Driven by{" "}
            <span className="bg-gradient-to-r from-[#194074] to-[#4a7ba7] bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#6D6E70] leading-relaxed mb-6">
            Deenār Consultants FZE is a UAE-based tax and accounting consultancy
            founded on principles of{" "}
            <span className="text-[#194074] font-semibold">trust</span>,{" "}
            <span className="text-[#194074] font-semibold">transparency</span>,
            and{" "}
            <span className="text-[#194074] font-semibold">
              ethical finance
            </span>
            .
          </p>
          <p className="text-base sm:text-lg text-[#6D6E70] leading-relaxed">
            We offer financial management, tax compliance, and strategic
            advisory services tailored for SMEs and corporates. Based in Umm Al
            Quwain Free Trade Zone, we serve clients across all seven emirates
            with Big 4 experience and deep local market knowledge.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          <Card className="group p-8 bg-white border-2 border-gray-100 hover:border-[#194074]/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#194074] to-[#4a7ba7] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <HeartHandshake
                  className="w-8 h-8 text-white"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-2xl font-bold text-[#194074] mb-4">
                Our Mission
              </h3>
              <p className="text-[#6D6E70] leading-relaxed">
                To empower businesses in the UAE with ethical, transparent, and
                professional financial services that drive growth while ensuring
                full compliance. We believe that financial clarity is the
                foundation of business success, and we're committed to providing
                that clarity through trusted partnerships.
              </p>
            </div>
          </Card>
          <Card className="group p-8 bg-white border-2 border-gray-100 hover:border-[#194074]/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#194074] to-[#4a7ba7] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-[#194074] mb-4">
                Our Vision
              </h3>
              <p className="text-[#6D6E70] leading-relaxed">
                To become the most trusted financial consultancy in the UAE,
                recognized for our ethical approach, technical excellence, and
                unwavering commitment to client success. We envision a business
                landscape where every SME has access to Big 4-quality financial
                guidance tailored to their unique needs.
              </p>
            </div>
          </Card>
        </div>

        {/* Industry Expertise */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#194074] mb-4">
              Industry Expertise
            </h3>
            <p className="text-lg text-[#6D6E70]">
              Extensive experience across diverse industries in the UAE
            </p>
          </div>
          <Card className="p-8 sm:p-10 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Retail & E-commerce",
                "Manufacturing & Trading",
                "Professional Services",
                "Technology & IT Services",
                "Real Estate & Construction",
                "Healthcare & Medical Services",
                "Hospitality & F&B",
                "Import/Export & Logistics",
              ].map((industry, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white transition-colors duration-200"
                >
                  <CheckCircle className="w-5 h-5 text-[#194074] mt-0.5 flex-shrink-0" />
                  <span className="text-[#6D6E70] font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Founder */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#194074] mb-4">
              Meet Our Founder
            </h3>
            <p className="text-lg text-[#6D6E70]">
              Leading with expertise, integrity, and vision
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 sm:p-10 bg-gradient-to-br from-[#194074] to-[#2c5a8f] border-none shadow-2xl">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center ring-4 ring-white/30">
                    <span className="text-3xl font-bold text-white">AG</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-2xl sm:text-3xl font-bold text-white">
                      Abdul Ghani Bangad
                    </h4>
                    <p className="text-white/90 font-medium text-lg mt-1">
                      Founder & Managing Partner
                    </p>
                  </div>
                </div>
                <div className="h-px bg-white/20"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Chartered Accountant (India)",
                    "Bachelor of Commerce",
                    "Diploma in UAE Corporate Tax",
                    "Big 4 Experience",
                    "Managed AED 100M+ turnover operations",
                    "Committed to ethical finance",
                  ].map((credential, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-white/90 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#194074] mb-4">
              Why Choose Us
            </h3>
            <p className="text-lg text-[#6D6E70] max-w-2xl mx-auto">
              Six compelling reasons to partner with Deenar Consultants for your
              financial success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group p-8 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#194074]/30 bg-white hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#194074]/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#194074] group-hover:to-[#4a7ba7] transition-all duration-300 group-hover:scale-110">
                    <value.icon
                      className="w-8 h-8 text-[#194074] group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-[#194074] group-hover:text-[#194074] transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-[#6D6E70] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Additional CSS for animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default About;
