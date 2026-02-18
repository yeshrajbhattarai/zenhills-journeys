import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Calendar, Star, ArrowRight, Users, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

import heroBg from "@/assets/hero-bg.jpg";
import tripBeach from "@/assets/trip-beach.jpg";
import tripMountain from "@/assets/trip-mountain.jpg";
import tripTemple from "@/assets/trip-temple.jpg";
import tripCity from "@/assets/trip-city.jpg";
import tripSafari from "@/assets/trip-safari.jpg";
import tripIsland from "@/assets/trip-island.jpg";

import sikkim1 from "../assets/Gallery/sikkim1.jpg";

import sikkim2 from "../assets/Gallery/sikkim2.jpg";
import sikkim3 from "../assets/Gallery/sikkim3.jpg";
import sikkim4 from "../assets/Gallery/sikkim4.jpg";
import sikkim6 from "../assets/Gallery/sikkim6.jpg";
import sikkim7 from "../assets/Gallery/sikkim7.jpg";

const galleryImages = [
  sikkim1,
  sikkim2,
  sikkim3,
  sikkim4,
  sikkim6,
  sikkim7,
];

const trips = [
  {
    title: "Ek jaga se Dusra jaga",
    location: "Sikkim, India",
    duration: "5 Days / 4 Nights",
    price: "Rs. 18,999",
    rating: 4.8,
    image: tripBeach,
  },
  {
    title: "Himalayan Trek",
    location: "Manali, India",
    duration: "7 Days / 6 Nights",
    price: "Rs. 24,999",
    rating: 4.9,
    image: tripMountain,
  },
  {
    title: "Temple Trail",
    location: "Hampi, India",
    duration: "4 Days / 3 Nights",
    price: "Rs. 14,499",
    rating: 4.7,
    image: tripTemple,
  },

];

// // own_________________________________________
// const galleryPara = [{title: "Himalayan Trek"}]

const stats = [
  { icon: Users, value: "100+", label: "Happy Travellers" },
  { icon: Globe, value: "10+", label: "Destinations" },
  { icon: Award, value: "1+", label: "Years Experience" },
  { icon: Star, value: "4.7", label: "Average Rating" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="ZenHills scenic landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="font-body text-sm md:text-base uppercase tracking-[0.3em] text-primary-foreground/80 mb-4 animate-fade-in">
            Welcome to ZenHills Tours & Travel
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Discover the Mountains with ZenHills
          </h1>
          <p className="font-body text-base md:text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Wander through mist-covered valleys, emerald forests, and snow-kissed peaks. ZenHills crafts journeys inspired by Sikkim’s serene landscapes, ancient monasteries, and untouched natural beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-zen-gradient text-primary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity shadow-zen-lg"
            >
              Explore Trips <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 px-8 py-3.5 rounded-lg font-body font-semibold text-sm tracking-wide hover:bg-primary-foreground/25 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card rounded-2xl shadow-zen-lg p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-display text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="font-body text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trips */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Our Packages
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Popular Trip Packages
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
              Handpicked destinations and curated itineraries designed to give you the trip of a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {trips.map((trip) => (
              <div
                key={trip.title}
                className="group bg-card rounded-xl overflow-hidden shadow-zen hover:shadow-zen-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* <span className="absolute top-3 left-3 bg-zen-gradient text-primary-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                    {trip.tag}
                  </span> */}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{trip.title}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground font-body text-sm mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    {trip.location}
                  </div>
                  <div className="flex items-center justify-between text-sm font-body">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {trip.duration}
                    </div>
                    <div className="flex items-center gap-1 text-accent-foreground">
                      <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                      {trip.rating}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground font-body">Starting from</p>
                      <p className="font-display text-xl font-bold text-primary">{trip.price}</p>
                    </div>
                    <Link
                      to="/contact"
                      className="bg-zen-gradient text-primary-foreground px-4 py-2 rounded-lg font-body text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Gallery */}
      <section className="py-20 md:py-28 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Our Gallery
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Glimpse of Sikkim 💕
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Still don't want to visit??🤧
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl">
              <img
                src={img}
                alt="Sikkim Gallery"
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Still don't want to visit??🤧
            </p> */}
            </div>
          ))}
        </div>

        </div>
      </section>

          {/* Our Locations */}
<section className="py-20 md:py-28 px-4 bg-background">
  <div className="container mx-auto max-w-6xl">

    <div className="text-center mb-12 md:mb-16">
      <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
        Our Locations
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
        Visit Our Headquarters 📍
      </h2>
      <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
        From the peaceful hills of Gangtok to our operational base in Patna — we are always close to you.
      </p>
    </div>

    <div className="space-y-12">

      {/* Gangtok HQ */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Gangtok HQ – Sikkim 🏔</h3>
        <div className="rounded-2xl overflow-hidden shadow-zen-lg">
          <iframe
            src="https://www.google.com/maps?q=Bojoghari,Gangtok,Sikkim&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Patna Branch */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Patna Branch – Bihar 🌿</h3>
        <div className="rounded-2xl overflow-hidden shadow-zen-lg">
          <iframe
            src="https://www.google.com/maps?q=Exhibition%20Road,Patna,Bihar&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

    </div>

  </div>
</section>


 {/* CTA */}
      <section className="bg-zen-gradient py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="font-body text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Let our experts plan the perfect getaway for you. Custom itineraries, best prices, unforgettable memories.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3.5 rounded-lg font-body font-semibold text-sm hover:bg-primary-foreground/90 transition-colors"
          >
            Plan My Trip <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
