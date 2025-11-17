import {
  Mail,
  Phone,
  MapPin,
  HelpCircle,
  Send,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import CalendlyWidget from "./CalendlyWidget";
import { useState } from "react";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Phone number is required" })
    .max(20, { message: "Phone number must be less than 20 characters" }),
  subject: z
    .string()
    .trim()
    .min(1, { message: "Subject is required" })
    .max(150, { message: "Subject must be less than 150 characters" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    form.reset();
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide comprehensive financial and tax solutions including accounting, tax compliance (CT & VAT), KPI analysis, virtual CFO services, audit support, payroll processing, business setup, corporate governance, expense management, and financial due diligence. Our services are tailored for SMEs and growing businesses in the UAE.",
    },
    {
      question: "How can I schedule a consultation?",
      answer:
        "You can schedule a consultation by calling us at +971 50 176 5882, emailing info@deenarconsultants.com, or messaging us on WhatsApp. You can also use the Calendly widget on this page to book a meeting directly. We'll respond within 24 hours to arrange a meeting at your convenience.",
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer:
        "Yes, we work with SMEs and growing businesses across various industries. Our services are tailored to meet the specific needs of each client, whether you're a startup or an established company. We have experience managing entities with turnover exceeding AED 100M.",
    },
    {
      question: "What are your operating hours?",
      answer:
        "We operate Sunday to Thursday, 9:00 AM - 6:00 PM UAE time. For urgent matters, you can reach us via WhatsApp, and we'll respond as soon as possible. We understand that financial issues can't always wait, so we strive to be responsive to our clients' needs.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "While we're based in Umm Al Quwain Free Trade Zone, we serve clients across the entire UAE including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and all other emirates. We can work with clients remotely or arrange in-person meetings as needed.",
    },
    {
      question: "What qualifications does your team have?",
      answer:
        "Our founder and managing partner, Abdul Ghani Bangad, is a Chartered Accountant (India) with a Bachelor of Commerce degree and a Diploma in UAE Corporate Tax. He has extensive Big 4 experience and has managed group accounting and tax operations for entities exceeding AED 100M in turnover.",
    },
    {
      question: "How do you ensure data security and confidentiality?",
      answer:
        "We take data security and confidentiality very seriously. All client information is handled with strict confidentiality protocols. We use secure systems for data storage and transmission, and all our team members are bound by professional confidentiality agreements. Your financial data is safe with us.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is transparent and tailored to each client's specific needs. We offer flexible pricing models including monthly retainer packages, project-based pricing, and hourly rates. During your initial consultation, we'll discuss your requirements and provide a clear, detailed quote with no hidden fees.",
    },
    {
      question: "How quickly can you start working with us?",
      answer:
        "We can typically begin working with new clients within 1-2 weeks after the initial consultation and agreement. For urgent matters, we can expedite the onboarding process. The exact timeline depends on the scope of services and your specific requirements.",
    },
    {
      question: "Do you provide ongoing support or one-time services?",
      answer:
        "We offer both ongoing support and one-time project services. Many clients choose our monthly retainer packages for continuous accounting, tax compliance, and advisory services. We also provide one-time services like business setup, financial due diligence, or specific tax planning projects. We'll work with you to determine the best approach for your needs.",
    },
    {
      question: "What accounting software do you use?",
      answer:
        "We work with all major accounting software platforms including QuickBooks, Xero, Sage, Zoho Books, and others. We can also help you set up and migrate to new accounting systems if needed. Our team is proficient in various accounting software and can recommend the best solution for your business.",
    },
    {
      question: "Can you help with UAE Corporate Tax compliance?",
      answer:
        "Absolutely! Corporate Tax (CT) compliance is one of our core services. We provide CT registration, return preparation and filing, tax planning, compliance reviews, and FTA correspondence support. Our team stays up-to-date with all CT regulations and requirements to ensure your business remains compliant.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
      <div className="  ">
        <div className="relative overflow-hidden bg-[#194074] text-white py-24">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-300">
                  Get in Touch
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Contact Us
              </h1>

              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Ready to transform your financial management? Let's start the
                conversation.
              </p>
            </div>
          </div>

          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-8 max-w-5xl mx-auto mb-12">
          <Card className="p-8 text-center bg-card border-border hover:shadow-lg transition-all">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <Mail className="w-8 h-8 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">
                Email
              </h3>
              <a
                href="mailto:info@deenarconsultants.com"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                info@deenarconsultants.com
              </a>
            </div>
          </Card>

          <Card className="p-8 text-center bg-card border-border hover:shadow-lg transition-all">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <Phone className="w-8 h-8 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">
                Phone
              </h3>
              <a
                href="tel:+971501765882"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                +971 50 176 5882
              </a>
            </div>
          </Card>

          <Card className="p-8 text-center bg-card border-border hover:shadow-lg transition-all">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground">
                Address
              </h3>
              <p className="text-muted-foreground">
                Al Shmookh Business Center
                <br />
                UAQ Free Trade Zone
                <br />
                Umm Al Quwain, UAE
              </p>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="bg-gradient-to-r from-[#194074] to-[#2a5a9e] p-8 text-white text-center">
              <Send className="w-12 h-12 mx-auto mb-4 text-amber-400" />
              <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-white/90">
                Fill out the form below and we'll get back to you within 24
                hours
              </p>
            </div>

            <div className="p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#194074] mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-[#6D6E70]">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#194074] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#194074] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#194074] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#194074] mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#194074] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your business needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:scale-105 inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Calendly Widget */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-2">
              Book a Consultation
            </h3>
            <p className="text-muted-foreground">
              Schedule a meeting with our team at your convenience
            </p>
          </div>
          <Card className="p-4 bg-card border-border">
            <CalendlyWidget />
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-8 h-8 text-accent" />
              <h3 className="text-3xl font-bold text-foreground">
                Frequently Asked Questions
              </h3>
            </div>
            <p className="text-muted-foreground">
              Find answers to common questions about our services
            </p>
          </div>
          <Card className="p-6 bg-card border-border">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
