import { MapPin, Phone, Mail, User, Building2, MapPinIcon, MessageSquare, Globe, Send, CheckCircle2 } from 'lucide-react';
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";

export const Contact = () => {
  const offices = [
    {
      title: "CORPORATE OFFICE",
      address: [
        "ISI (India) Pvt. Ltd.",
        "No. 9, First Floor, Kamarajar Salai,",
        "Ashok Nagar, Chennai – 600 083"
      ],
      contacts: [
        { type: "mobile", value: "+91 77088 87878 / 77088 86868" },
        { type: "email", value: "info@isisecurity.in" }
      ]
    },
    {
      title: "ADMINISTRATIVE OFFICE",
      address: [
        "ISI (India) Pvt. Ltd.",
        "12-9, Santhosh Raj Plaza,",
        "Gandhi Nagar, Madurai – 625 020."
      ],
      contacts: [
        { type: "mobile", value: "+91 98949 99955 / 95009 59004" },
        { type: "email", value: "mdu@isisecurity.in" }
      ]
    },
    {
      title: "DELHI",
      address: [
        "ISI (India) Pvt. Ltd.",
        "Flat no. B-702, Grand Ajnara Heritage,",
        "Sector-74, Noida, New Delhi"
      ],
      contacts: [
        { type: "mobile", value: "+91 96555 99988" }
      ]
    },
    {
      title: "ANDHRA PRADESH",
      address: [
        "ISI (India) Pvt. Ltd.",
        "No 2 Akn Layout, Chennai – Tirupathi Bye Pass Road,",
        "Bharath Petrol Bunk Side, Nagari,",
        "Chittoor, AP – 517590"
      ],
      contacts: [
        { type: "mobile", value: "+91 99444 99988" }
      ]
    },
    {
      title: "KARNATAKA",
      address: [
        "ISI (India) Pvt. Ltd.",
        "No. 36, First Main Road,",
        "Kodichikkanahalli Main Road,",
        "Bangalore – 560 076"
      ],
      contacts: [
        { type: "mobile", value: "+91 99803 41711 / 78929 22511" }
      ]
    },
    {
      title: "TELANGANA",
      address: [
        "ISI (India) Pvt. Ltd.",
        "H.No. B-1228, NGO Colony,",
        "Vanasthalipuram,",
        "Hyderabad – 500 070"
      ],
      contacts: [
        { type: "mobile", value: "+91 77088 87878 / 77088 86868" }
      ]
    },
    {
      title: "KERALA",
      address: [
        "ISI (India) Pvt. Ltd.",
        "No.12/498, K.V. Building,",
        "Kannur post,",
        "Kannur – 670 005"
      ],
      contacts: [
        { type: "mobile", value: "+91 99947 31166" }
      ]
    },
    {
      title: "TAMIL NADU (Thoothukudi)",
      address: [
        "ISI (India) Pvt. Ltd.",
        "No. 16J/3, Third Floor, JP Dhanam Complex",
        "Jeyalani Colony,",
        "Thoothukudi – 628 008"
      ],
      contacts: [
        { type: "mobile", value: "+91 98949 99955 / 98949 99422" }
      ]
    },
    {
      title: "TAMIL NADU (Coimbatore)",
      address: [
        "ISI (India) Pvt. Ltd.",
        "No: 5, Kakkan Nagar,",
        "4th street, Singanallur,",
        "Coimbatore – 641005"
      ],
      contacts: [
        { type: "mobile", value: "+91 98949 99488 / 73388 55544" }
      ]
    },
    {
      title: "PUDUCHERRY",
      address: [
        "ISI (India) Pvt. Ltd.",
        "No. 43, Ambuthital Thirupattinam,",
        "Polagam, Karaikal,",
        "Puducherry – 609606"
      ],
      contacts: [
        { type: "mobile", value: "+91 73587 99937 / 73388 55577" }
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-background relative overflow-hidden pt-12 pb-20">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 to-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 max-w-7xl">

        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-cyan-500">Security Future</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Share your requirements and our security experts will craft a tailored solution for your organization
          </p>
        </div>

        {/* Contact Form - Premium Card */}
        <div className="mb-24 relative">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50" />

          <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl">
            <form className="space-y-8">
              {/* Row 1: Personal & Company Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Corporate Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30"
                    placeholder="Your Company"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="designation" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Designation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="designation"
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30"
                    placeholder="Your Role"
                  />
                </div>
              </div>

              {/* Row 2: Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-primary" />
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none hover:border-primary/30"
                    placeholder="City, State"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Service Interest <span className="text-red-500">*</span>
                  </label>
                  <Select>
                    <SelectTrigger id="service" className="w-full h-12 bg-background/50 border-border/50 rounded-xl hover:border-primary/30 transition-colors">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manned-guarding">Manned Guarding</SelectItem>
                      <SelectItem value="electronic-security">Electronic Security</SelectItem>
                      <SelectItem value="cash-management">Cash Management</SelectItem>
                      <SelectItem value="facility-management">Facility Management</SelectItem>
                      <SelectItem value="drone-services">Drone Services</SelectItem>
                      <SelectItem value="command-centers">Command Centers</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="source" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    How did you find us?
                  </label>
                  <Select>
                    <SelectTrigger id="source" className="w-full h-12 bg-background/50 border-border/50 rounded-xl hover:border-primary/30 transition-colors">
                      <SelectValue placeholder="Select Source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="advertisement">Advertisement</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none hover:border-primary/30"
                  placeholder="Tell us about your security requirements..."
                ></textarea>
              </div>

              {/* Privacy Policy */}
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl border border-border/30">
                <Checkbox id="privacy" className="mt-0.5" />
                <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  I agree to the{" "}
                  <a href="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</a>
                  {" "}and{" "}
                  <a href="/terms-of-service" className="text-primary hover:underline font-medium">Terms & Conditions</a>
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="px-12 h-14 text-base font-semibold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <div className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <Phone className="w-6 h-6 text-primary group-hover:text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Call Us</h3>
            <p className="text-muted-foreground text-sm mb-3">Available 24/7 for emergencies</p>
            <a href="tel:+917708887878" className="text-primary font-semibold hover:underline">+91 77088 87878</a>
          </div>

          <div className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <Mail className="w-6 h-6 text-primary group-hover:text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Email Us</h3>
            <p className="text-muted-foreground text-sm mb-3">We'll respond within 24 hours</p>
            <a href="mailto:info@isisecurity.in" className="text-primary font-semibold hover:underline">info@isisecurity.in</a>
          </div>

          <div className="group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Visit Us</h3>
            <p className="text-muted-foreground text-sm mb-3">Corporate Office, Chennai</p>
            <p className="text-primary font-semibold">Ashok Nagar, Chennai</p>
          </div>
        </div>

        {/* Our Offices Section */}
        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 mb-6">
              <MapPin className="w-4 h-4" />
              Pan-India Presence
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Offices</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              With a strong presence across India, we are always within reach to serve your security needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="group bg-card/40 hover:bg-card/60 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-base">{office.title}</h3>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="text-muted-foreground leading-relaxed">
                    {office.address.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>

                  <div className="border-t border-border/50 pt-4 space-y-2">
                    {office.contacts.map((contact, i) => (
                      <div key={i} className="flex items-center gap-2 text-muted-foreground group/contact">
                        {contact.type === 'mobile' ? (
                          <Phone className="w-4 h-4 text-primary/70 flex-shrink-0" />
                        ) : (
                          <Mail className="w-4 h-4 text-primary/70 flex-shrink-0" />
                        )}
                        <span className="font-medium hover:text-primary transition-colors cursor-pointer text-sm">
                          {contact.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
