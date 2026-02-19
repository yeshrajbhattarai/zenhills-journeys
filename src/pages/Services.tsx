import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Hotel, Map, Camera, Shield, Headphones, Car} from "lucide-react";
import { Link } from "react-router-dom";
import {ArrowRight} from "lucide-react";
// tripcard
import gangtok from "../assets/Gallery/gangtok.jpeg";
import digha from "../assets/Gallery/digha.jpg";
import jharkhand from "../assets/Gallery/jharkhand.jpg";
import arunachal from "../assets/Gallery/arunachal.jpg";
import nepal from "../assets/Gallery/nepal.jpg";
import rajgar from "../assets/Gallery/rajgar.jpg";
import kaziranga from "../assets/Gallery/kaziranga.jpg";
import nainital from "../assets/Gallery/nainital.jpg";
import darjelling from "../assets/Gallery/darjelling.jpg";
const services = [
  {
    icon: Hotel,
    title: "Hotel Booking",
    desc: "Trusted chain properties and premium stays across all our destinations with comfort and quality assurance.",
  },
  {
    icon: Map,
    title: "Complete Tour Packages",
    desc: "Customised travel packages including hotel, transport, sightseeing and local assistance.",
  },
  {
    icon: Camera,
    title: "All Destination Coverage",
    desc: "Sikkim, Darjeeling, Digha, Nepal, Rajgir, Deoghar, Uttarakhand, Assam & Arunachal tours available.",
  },
  {
    icon: Car,
    title: "Transport & Transfers",
    desc: "Private cars, group transfers and intercity travel arranged safely and comfortably.",
  },
  {
    icon: Shield,
    title: "Corporate Events & Functions",
    desc: "Corporate tours, business trips, destination events, conferences and group bookings.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    desc: "Dedicated assistance before, during and after your journey for complete peace of mind.",
  },
];


const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 bg-zen-light-gradient">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">What We Offer</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From planning to landing and everything in between — we've got every aspect of your journey covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-card rounded-xl p-6 shadow-zen hover:shadow-zen-lg transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-accent"
              >
                <div className="w-12 h-12 rounded-lg bg-zen-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Why Choose ZenHills?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              { num: "01", title: "Expert Planning", desc: "Our seasoned travel consultants design every trip with insider knowledge and attention to detail." },
              { num: "02", title: "Best Value", desc: "We leverage our partnerships to bring you premium experiences at competitive prices." },
              { num: "03", title: "Hassle-Free", desc: "From visa assistance to on-ground support, we handle the logistics so you can enjoy the journey." },
            ].map((item) => (
              <div key={item.num} className="text-center">
                <span className="font-display text-5xl font-bold text-accent/40">{item.num}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-10 bg-zen-gradient text-primary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-zen-lg"
          >
            Contact <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
