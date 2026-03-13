import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Hotel, Map, Camera, Shield, Headphones, Car, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const services = [
  {
    icon: Hotel,
    title: "Hotel Booking",
    desc: "Trusted chain properties and premium stays across all our destinations with comfort and quality assurance.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    features: ["Hand-picked properties", "All budgets covered", "Comfort guaranteed"],
  },
  {
    icon: Map,
    title: "Complete Tour Packages",
    desc: "Customised travel packages including hotel, transport, sightseeing and local assistance — everything in one.",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&q=80",
    features: ["Custom itineraries", "Local guides included", "Flexible scheduling"],
  },
  {
    icon: Camera,
    title: "All Destination Coverage",
    desc: "Sikkim, Darjeeling, Digha, Nepal, Rajgir, Deoghar, Uttarakhand, Assam & Arunachal tours available.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    features: ["10+ destinations", "Northeast specialists", "Pan-India coverage"],
  },
  {
    icon: Car,
    title: "Transport & Transfers",
    desc: "Private cars, group transfers and intercity travel arranged safely and comfortably across all routes.",
    image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=600&q=80",
    features: ["AC vehicles", "Airport pickups", "Intercity travel"],
  },
  {
    icon: Shield,
    title: "Corporate Events & Functions",
    desc: "Corporate tours, business trips, destination events, conferences and large group bookings managed end-to-end.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    features: ["Group discounts", "Event management", "Custom branding"],
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    desc: "Dedicated assistance before, during and after your journey — we're always one call away.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
    features: ["Always reachable", "WhatsApp support", "On-ground help"],
  },
];

const processSteps = [
  { num: "01", title: "Tell Us Your Plan", desc: "Share your destination, dates and budget with us via call, WhatsApp or our contact form." },
  { num: "02", title: "We Craft Your Trip", desc: "Our team designs a personalised itinerary with the best hotels, transport and sightseeing." },
  { num: "03", title: "Confirm & Relax", desc: "Once you approve, we handle everything. You just show up and enjoy the journey." },
];

const Services = () => {
  useEffect(() => {
  document.title = "Our Services | ZenHills Tours & Travel";
  document.querySelector('meta[name="description"]')
    ?.setAttribute("content", "From hotel booking to complete tour packages, transport and 24/7 support — ZenHills handles every aspect of your Sikkim journey.");
}, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-zen-light-gradient relative overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">What We Offer</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From planning to landing and everything in between — we've got every aspect of your journey covered.
          </p>

          {/* Quick trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {["100+ Happy Travellers", "10+ Destinations", "Always Available"].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5 bg-card px-4 py-2 rounded-full text-sm font-body font-medium text-foreground shadow-zen border border-border">
                <CheckCircle className="w-4 h-4 text-primary" />
                {badge}
              </span>
            ))}
            
          </div>
             <div className="flex justify-center mt-8">
            <Link
              to="/events"
              className="group inline-flex items-center gap-2 bg-zen-gradient text-primary-foreground px-7 py-3.5 rounded-full font-body font-semibold text-sm shadow-zen-lg hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              Explore Special Events
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
        </div>
        
      </section>

      {/* ── SERVICES GRID — Card with image ── */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-card rounded-2xl overflow-hidden shadow-zen hover:shadow-zen-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/20 transition-colors duration-300" />
                  {/* Icon badge on image */}
                  <div className="absolute bottom-3 left-4">
                    <div className="w-10 h-10 rounded-xl bg-zen-gradient flex items-center justify-center shadow-zen">
                      <s.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>

                  {/* Feature chips */}
                  <div className="flex flex-wrap gap-2">
                    {s.features.map((f) => (
                      <span key={f} className="text-xs font-body bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 md:py-24 px-4 bg-muted/40">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Simple Process</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
            <p className="font-body text-muted-foreground mt-3 max-w-lg mx-auto">Booking your dream trip with ZenHills is simple, transparent and completely hassle-free.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-primary/20 z-0" />

            {processSteps.map((step) => (
              <div key={step.num} className="relative text-center bg-card rounded-2xl p-6 shadow-zen z-10">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-zen-gradient text-primary-foreground font-display text-xl font-bold mb-4 shadow-zen">
                  {step.num}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHT BANNER — Full width image with overlay ── */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1600&q=80"
          alt="Himalayan landscape"
          className="w-full h-72 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
          <div className="text-center text-primary-foreground px-4">
            <p className="font-body text-sm uppercase tracking-widest mb-3 opacity-80">The ZenHills Promise</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Every Journey, Crafted with Care
            </h2>
            <p className="font-body text-base opacity-80 max-w-xl mx-auto">
              We don't just book trips — we create experiences that stay with you long after you return home.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Why ZenHills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">Why Choose ZenHills?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Expert Planning", desc: "Our seasoned travel consultants design every trip with insider knowledge and attention to detail." },
              { num: "02", title: "Best Value", desc: "We leverage our partnerships to bring you premium experiences at the most competitive prices." },
              { num: "03", title: "Hassle-Free", desc: "From permits to on-ground support, we handle the logistics so you can enjoy every moment." },
            ].map((item) => (
              <div key={item.num} className="text-center p-4">
                <span className="font-display text-5xl font-bold text-primary/20">{item.num}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-zen-gradient text-primary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-zen-lg"
          >
            Plan My Trip <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
            <a href="https://wa.me/918409970064?text=Hello%20ZenHills,%20I%20am%20interested%20in%20your%20Sikkim%20tour%20packages." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50">
        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 md:w-8 md:h-8" fill="white">
            <path d="M16.002 2.667c-7.364 0-13.333 5.969-13.333 13.333 0 2.353.614 4.66 1.781 6.702L2.667 29.333l6.79-1.742a13.235 13.235 0 006.545 1.742h.005c7.364 0 13.333-5.969 13.333-13.333S23.366 2.667 16.002 2.667zm0 24.013h-.004a10.65 10.65 0 01-5.428-1.493l-.388-.23-4.03 1.034 1.075-3.93-.252-.402a10.66 10.66 0 01-1.635-5.659c.002-5.88 4.79-10.668 10.672-10.668 2.846 0 5.52 1.108 7.533 3.121 2.012 2.013 3.12 4.688 3.119 7.534-.003 5.88-4.79 10.667-10.662 10.667zm5.84-7.987c-.32-.16-1.894-.934-2.188-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.186.213-.373.24-.693.08-.32-.16-1.35-.497-2.571-1.586-.95-.847-1.59-1.893-1.776-2.213-.186-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.623-.525-.54-.72-.55l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.146 3.093 1.306 3.306c.16.213 2.257 3.447 5.472 4.832.765.33 1.36.527 1.825.674.767.243 1.465.208 2.016.126.615-.092 1.894-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/>
          </svg>
        </div>
      </a>
      <a href="tel:+919474090064" aria-label="Call ZenHills" className="fixed bottom-6 left-6 z-50">
  <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-200">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8" fill="white">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
  </div>
</a>
    </div>
  );
};

export default Services;