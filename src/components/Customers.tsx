import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "ISI transformed our security infrastructure with their integrated SOC solution. We've achieved full compliance and real-time visibility across all branches.",
    author: "Chief Security Officer",
    company: "Leading Private Bank",
    sector: "BFSI",
    rating: 5,
  },
  {
    quote: "Their background verification system reduced our hiring risks by 40%. The API integration with our HRIS was seamless.",
    author: "HR Director",
    company: "Fortune 500 IT Company",
    sector: "Technology",
    rating: 5,
  },
  {
    quote: "The drone surveillance for our refinery perimeter is exceptional. Response times have improved dramatically.",
    author: "Operations Head",
    company: "Major Oil & Gas Corporation",
    sector: "Energy",
    rating: 5,
  },
];

// Categorized client data by industry sector
const clientsByIndustry = {
  "Engineering / Manufacturing": [
    { name: "Bosch", image: "/logos/Bosch_Global_Software_Tech._Pvt_Ltd-removebg-preview.png" },
    { name: "Ramco Group", image: "/logos/Ramco_Group-removebg-preview.png" },
    { name: "Ramco Cements Limited", image: "/logos/Ramco_Cements_Limited-removebg-preview.png" },
    { name: "Murugappa Group", image: "/logos/Murugappa Group.png" },
    { name: "Tubes Investment of India Limited", image: "/logos/Tubes_Investment_ot_India_Limited-removebg-preview.png" },
    { name: "Carborundum Universal Limited", image: "/logos/Carborundum_UniversalLimited-removebg-preview.png" },
    { name: "EID Parry (India) Limited", image: "/logos/EID_Parry__India__Limited-removebg-preview.png" },
    { name: "TATA", image: "/logos/TATA.png" },
    { name: "Sanmar Group", image: "/logos/Sanmar_Group-removebg-preview.png" },
    { name: "Sanmar Matrix Metals Limited", image: "/logos/Sanmar_Matrix_Metals_Limited-removebg-preview.png" },
    { name: "XOMOX Sanmar Ltd", image: "/logos/XOMOX_Sanmar_Ltd-removebg-preview.png" },
    { name: "Anderson Greenwood Crosby Sanmar Limited", image: "/logos/Anderson_Green_Wood_Crosby_Sanmar_Limited-removebg-preview.png" },
    { name: "VinFast", image: "/logos/VInfast.png" },
    { name: "BYD India Pvt Ltd", image: "/logos/BYD_INDIA_PVT_LTD-removebg-preview.png" },
    { name: "Britannia Industries Limited", image: "/logos/BRITANNIA_INDUSTRIES_LIMITED-removebg-preview.png" },
    { name: "MTC Group", image: "/logos/MTC_GROUP-removebg-preview.png" },
    { name: "Intersnack Group", image: "/logos/Intersnack Group.png" },
    { name: "TZMO Global", image: "/logos/TZMO-Global-removebg-preview.png" },
    { name: "LGB Group", image: "/logos/LGB___Brothers_Limited-removebg-preview.png" },
    { name: "Marico Limited", image: "/logos/MARICO_LIMITED-removebg-preview.png" },
    { name: "Zamil Steels", image: "/logos/Zamil Steels.png" },
    { name: "Vikram Solar", image: "/logos/Vikram Solar.png" },
    { name: "Milkymist", image: "/logos/Milkymist.png" },
    { name: "Chemplast", image: "/logos/Chemplast.png" },
  ],
};

// Smaller sections grouped for better layout
const smallSectionsRow1 = [
  {
    title: "IT & ITES Services",
    companies: [
      { name: "Zoho", image: "/logos/Zoho_Corporation-removebg-preview.png" },
      { name: "Gofrugal Technologies Private Limited", image: "/logos/Gofrugal_Technologies_Private_Limited-removebg-preview.png" },
      { name: "Aardhraa Technologies", image: "/logos/Aardhraa_Technologies-removebg-preview.png" },
    ],
  },
  {
    title: "Hospitality & Tourism",
    companies: [
      { name: "ITC Limited", image: "/logos/ITC Limited.png" },
      { name: "Taj Group", image: "/logos/Taj_Group-removebg-preview.png" },
      { name: "Marriott Bonvoy", image: "/logos/Marriott Bonvoy.png" },
    ],
  },
];

const smallSectionsRow2 = [
  {
    title: "Healthcare",
    companies: [
      { name: "CMC", image: "/logos/CMC.png" },
      { name: "Velammal", image: "/logos/Velammal_Medical_College_b_Research_Centre-removebg-preview.png" },
      { name: "Aravind Eye Hospital", image: "/logos/Aravind_Eye_Hospital-removebg-preview.png" },
    ],
  },
  {
    title: "BFSI",
    companies: [
      { name: "HDFC", image: "/logos/HDFC.png" },
      { name: "State Bank of India", image: "/logos/SBI-removebg-preview.png" },
      { name: "Canara Bank", image: "/logos/Canara Bank.png" },
      { name: "Indian Bank", image: "/logos/Indian Bank.png" },
    ],
  },
];

const smallSectionsRow3 = [
  {
    title: "Education",
    companies: [
      { name: "Chinmaya School", image: "/logos/CHINMAYA_SCHOOL-removebg-preview.png" },
    ],
  },
  {
    title: "Retail & Wholesale",
    companies: [
      { name: "Thangamayil Jewellery", image: "/logos/Thangamayil_Jewellery-removebg-preview.png" },
      { name: "Prince Jewellery", image: "/logos/Prince_Jewellery.png" },
    ],
  },
];

const smallSectionsRow4 = [
  {
    title: "NGO",
    companies: [
      { name: "Amar Seva Sangam", image: "/logos/Amar_Seva_Sangam-removebg-preview.png" },
    ],
  },
  {
    title: "Construction & Infrastructure",
    companies: [
      { name: "Estancia", image: "/logos/Estancia.png" },
    ],
  },
];

const smallSectionsRow5 = [
  {
    title: "Logistics & Transportation",
    companies: [
      { name: "Cipla", image: "/logos/Cipla.png" },
    ],
  },
];

export const Customers = () => {
  return (
    <section id="customers" className="py-28 relative overflow-hidden scroll-mt-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--section-gradient)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 rounded-full mb-4">
            Our Customers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by India's Leading Organizations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From banking giants to industrial leaders, we secure what matters most.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-500">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>

              <div className="pt-6 border-t border-border/50">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground mb-3">{testimonial.company}</div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {testimonial.sector}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos by Industry Sector */}
        <div className="space-y-16">
          {/* Engineering / Manufacturing - Full Width */}
          {Object.entries(clientsByIndustry).map(([sector, companies]) => (
            <div key={sector} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors duration-300">
              {/* Sector Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {sector}
                </h3>
                <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full" />
              </div>

              {/* Company Logos Grid */}
              <div className="flex flex-wrap gap-6 justify-start">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center px-4 py-3 w-[calc(50%-12px)] md:w-[calc(25%-18px)] h-[80px]"
                  >
                    <img
                      src={company.image}
                      alt={company.name}
                      className="max-h-[60px] w-auto max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Row 1: IT & ITES Services + Hospitality & Tourism */}
          <div className="grid md:grid-cols-2 gap-12">
            {smallSectionsRow1.map((section) => (
              <div key={section.title} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {section.title}
                  </h3>
                  <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {section.companies.map((company, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center px-4 py-3 w-[calc(50%-8px)] h-[80px]"
                    >
                      <img
                        src={company.image}
                        alt={company.name}
                        className="max-h-[60px] w-auto max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Healthcare + BFSI */}
          <div className="grid md:grid-cols-2 gap-12">
            {smallSectionsRow2.map((section) => (
              <div key={section.title} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {section.title}
                  </h3>
                  <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {section.companies.map((company, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center px-4 py-3 w-[calc(50%-8px)] h-[80px]"
                    >
                      <img
                        src={company.image}
                        alt={company.name}
                        className="max-h-[60px] w-auto max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: Education + Retail & Wholesale */}
          <div className="grid md:grid-cols-2 gap-12">
            {smallSectionsRow3.map((section) => (
              <div key={section.title} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {section.title}
                  </h3>
                  <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {section.companies.map((company, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center px-4 py-3 w-[calc(50%-8px)] h-[80px]"
                    >
                      <img
                        src={company.image}
                        alt={company.name}
                        className="max-h-[60px] w-auto max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Row 4: NGO + Construction & Infrastructure */}
          <div className="grid md:grid-cols-2 gap-12">
            {smallSectionsRow4.map((section) => (
              <div key={section.title} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {section.title}
                  </h3>
                  <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {section.companies.map((company, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center px-4 py-3 w-[calc(50%-8px)] h-[80px]"
                    >
                      <img
                        src={company.image}
                        alt={company.name}
                        className="max-h-[60px] w-auto max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Row 5: Logistics & Transportation - Centered */}
          <div className="max-w-md mx-auto">
            {smallSectionsRow5.map((section) => (
              <div key={section.title} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {section.title}
                  </h3>
                  <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
                </div>
                <div className="flex justify-center">
                  {section.companies.map((company, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center px-4 py-3 w-[200px] h-[80px]"
                    >
                      <img
                        src={company.image}
                        alt={company.name}
                        className="max-h-[60px] w-auto max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
