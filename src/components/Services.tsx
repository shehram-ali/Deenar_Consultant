import {
  BookOpen,
  Calculator,
  TrendingUp,
  Briefcase,
  Search,
  Users,
  FileText,
  Building2,
  Receipt,
  ClipboardCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Accounting & Financial Reporting",
      description:
        "Clean books, clear reports — professional financial management you can trust",
      details: [
        "Monthly, quarterly, and annual financial statements",
        "General ledger maintenance and reconciliation",
        "Accounts payable and receivable management",
        "Bank reconciliation and cash flow management",
        "Chart of accounts setup and optimization",
        "Financial statement preparation (P&L, Balance Sheet, Cash Flow)",
        "Compliance with UAE accounting standards",
      ],
    },
    {
      icon: Calculator,
      title: "Tax Compliance & Advisory (CT & VAT)",
      description:
        "Reliable and stress-free tax compliance services for UAE businesses",
      details: [
        "Corporate Tax (CT) registration and filing",
        "VAT registration, returns, and compliance",
        "Tax planning and optimization strategies",
        "Tax health checks and risk assessments",
        "FTA correspondence and audit support",
        "Transfer pricing documentation",
        "Tax advisory for business decisions",
      ],
    },
    {
      icon: TrendingUp,
      title: "KPI Analysis & Strategic Insights",
      description:
        "Drive performance and growth with data-driven strategic insights",
      details: [
        "Custom KPI dashboard development",
        "Financial performance analysis",
        "Trend analysis and forecasting",
        "Benchmarking against industry standards",
        "Profitability analysis by product/service",
        "Cost center analysis and optimization",
        "Strategic recommendations based on data",
      ],
    },
    {
      icon: Briefcase,
      title: "Virtual CFO",
      description:
        "Strategic guidance when you need it most — your outsourced finance partner",
      details: [
        "Strategic financial planning and budgeting",
        "Cash flow forecasting and management",
        "Financial modeling and scenario analysis",
        "Investment decision support",
        "Fundraising and investor relations support",
        "M&A advisory and transaction support",
        "Board-level financial reporting",
      ],
    },
    {
      icon: Search,
      title: "Audit Support & Control",
      description:
        "Stronger, safer, and more transparent operations with expert audit support",
      details: [
        "Internal audit preparation and support",
        "External audit coordination",
        "Internal control system design and implementation",
        "Risk assessment and mitigation",
        "Compliance reviews and gap analysis",
        "Audit response and remediation",
        "Process documentation and SOPs",
      ],
    },
    {
      icon: Users,
      title: "Payroll & WPS Processing",
      description:
        "Accurate, compliant, and on-time payroll management services",
      details: [
        "Monthly payroll processing and calculations",
        "WPS (Wage Protection System) compliance",
        "Leave management and accruals",
        "End of service benefits calculation",
        "Payroll tax and social security compliance",
        "Payroll reporting and analytics",
        "Employee expense reimbursement",
      ],
    },
    {
      icon: FileText,
      title: "Business Setup & Formation",
      description:
        "Complete support for company registration, licensing, and business formation in UAE",
      details: [
        "Company registration and trade license application",
        "Free zone vs mainland setup guidance",
        "Visa processing and immigration support",
        "Bank account opening assistance",
        "Initial accounting system setup",
        "Regulatory compliance setup",
        "Post-incorporation support and guidance",
      ],
    },
    {
      icon: Building2,
      title: "Corporate Governance & Compliance",
      description:
        "Ensure your business meets all regulatory requirements and governance standards",
      details: [
        "Corporate governance framework development",
        "Regulatory compliance monitoring",
        "License renewal and maintenance",
        "ESR (Economic Substance Regulations) compliance",
        "AML (Anti-Money Laundering) compliance",
        "Corporate secretarial services",
        "Board meeting support and documentation",
      ],
    },
    {
      icon: Receipt,
      title: "Expense Management & Analysis",
      description:
        "Optimize your spending with detailed expense tracking and cost analysis",
      details: [
        "Expense tracking and categorization",
        "Cost center allocation and analysis",
        "Vendor management and payment processing",
        "Expense policy development",
        "Spend analytics and reporting",
        "Budget vs actual analysis",
        "Cost optimization recommendations",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Financial Due Diligence",
      description:
        "Comprehensive financial assessments for mergers, acquisitions, and investments",
      details: [
        "Financial statement analysis and review",
        "Quality of earnings assessment",
        "Working capital analysis",
        "Debt and liability review",
        "Tax due diligence",
        "Financial modeling and valuation",
        "Due diligence report preparation",
      ],
    },
  ];

  return (
    <section id="services" className="pb-20 bg-background">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-[#194074] text-white py-24">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-300">
                  Professional Services
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Our Services
              </h1>

              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Comprehensive financial and tax solutions tailored for SMEs and
                growing businesses in the UAE
              </p>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border-border bg-card group"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <service.icon
                      className="w-10 h-10 text-primary group-hover:text-accent transition-colors"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                {service.details && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-card-foreground mb-3">
                      What's Included:
                    </p>
                    <ul className="space-y-2">
                      {service.details.slice(0, 4).map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <span className="text-accent mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="relative overflow-hidden bg-[#194074] rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

            <div className="relative z-10 p-12 text-center">
              <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-6" />
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Not Sure Which Service You Need?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your requirements and find the perfect solution
                for your business
              </p>
              <Link
                to="/contact"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-10 py-4 rounded-xl transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center gap-2 text-lg"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Qualified Experts", value: "Big 4 Experience" },
              { label: "Trust & Ethics", value: "100% Compliant" },
              { label: "Client Focused", value: "Personalized Care" },
              { label: "UAE Specialists", value: "CT & VAT Ready" },
            ].map((badge, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-white rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-shadow hover:border-amber-300"
              >
                <div className="text-2xl font-bold text-[#194074] mb-1">
                  {badge.value}
                </div>
                <div className="text-sm text-[#6D6E70]">{badge.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
