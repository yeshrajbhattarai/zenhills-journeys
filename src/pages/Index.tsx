import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Calendar, Star, ArrowRight, Users, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

import heroBg from "@/assets/hero-bg.jpg";
import tripBeach from "@/assets/trip-beach.jpg";
import tripMountain from "@/assets/trip-mountain.jpg";
import tripTemple from "@/assets/trip-temple.jpg";

import sikkim1 from "../assets/Gallery/sikkim1.jpeg";
import sikkim2 from "../assets/Gallery/sikkim2.jpeg";
import sikkim3 from "../assets/Gallery/Sikkim3.jpeg";
import sikkim4 from "../assets/Gallery/Sikkim4.jpeg";
import sikkim6 from "../assets/Gallery/sikkim6.jpeg";
import sikkim5 from "../assets/Gallery/sikkim5.jpeg";
import sikkim7 from "../assets/Gallery/sikkim7.jpeg";

const galleryImages = [
  sikkim1,
  sikkim2,
  sikkim3,
  sikkim4,
  sikkim6,
  sikkim5,
  sikkim7,
];

const trips = [
  {
    title: "Sikkim Explorer",
    location: "Gangtok & North Sikkim, India",
    duration: "5 Days / 4 Nights",
    price: "Rs. 18,999",
    rating: 4.9,
    image: tripMountain,
  },
  {
    title: "Darjeeling Retreat",
    location: "Darjeeling, West Bengal",
    duration: "4 Days / 3 Nights",
    price: "Rs. 14,999",
    rating: 4.8,
    image: tripTemple,
  },
  {
    title: "Digha Beach Escape",
    location: "Digha, West Bengal",
    duration: "3 Days / 2 Nights",
    price: "Rs. 9,499",
    rating: 4.6,
    image: tripBeach,
  },
  {
    title: "Nepal Heritage Tour",
    location: "Kathmandu & Pokhara, Nepal",
    duration: "6 Days / 5 Nights",
    price: "Rs. 29,999",
    rating: 4.9,
    image: tripBeach,
  },
  {
    title: "Rajgir Spiritual Trip",
    location: "Rajgir, Bihar",
    duration: "2 Days / 1 Night",
    price: "Rs. 6,999",
    rating: 4.5,
    image: tripTemple,
  },
  {
    title: "Deoghar Pilgrimage Tour",
    location: "Deoghar, Jharkhand",
    duration: "3 Days / 2 Nights",
    price: "Rs. 8,499",
    rating: 4.6,
    image: tripTemple,
  },
  {
    title: "Uttarakhand Hills Journey",
    location: "Nainital & Mussoorie, India",
    duration: "6 Days / 5 Nights",
    price: "Rs. 21,999",
    rating: 4.8,
    image: tripMountain,
  },
  {
    title: "Assam Nature & Wildlife",
    location: "Kaziranga & Guwahati",
    duration: "5 Days / 4 Nights",
    price: "Rs. 19,499",
    rating: 4.7,
    image: tripBeach,
  },
  {
    title: "Arunachal Adventure",
    location: "Tawang & Dirang",
    duration: "7 Days / 6 Nights",
    price: "Rs. 27,999",
    rating: 4.9,
    image: tripMountain,
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
              What are you waiting for? we are ready to Welcome you..💕
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
              What are you waiting for?
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
        From the peaceful hills of Gangtok to our operational base in Patna - we are always close to you.
      </p>
    </div>

    <div className="space-y-12">

      {/* Gangtok HQ */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Gangtok HQ - Sikkim </h3>
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
        <h3 className="text-xl font-semibold mb-4">Patna Branch - Bihar</h3>
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
            {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/918409970064?text=Hello%20ZenHills,%20I%20am%20interested%20in%20your%20Sikkim%20tour%20packages."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-200">
          
          {/* Official WhatsApp Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 md:w-8 md:h-8"
            fill="white"
          >
            <path d="M16.002 2.667c-7.364 0-13.333 5.969-13.333 13.333 0 2.353.614 4.66 1.781 6.702L2.667 29.333l6.79-1.742a13.235 13.235 0 006.545 1.742h.005c7.364 0 13.333-5.969 13.333-13.333S23.366 2.667 16.002 2.667zm0 24.013h-.004a10.65 10.65 0 01-5.428-1.493l-.388-.23-4.03 1.034 1.075-3.93-.252-.402a10.66 10.66 0 01-1.635-5.659c.002-5.88 4.79-10.668 10.672-10.668 2.846 0 5.52 1.108 7.533 3.121 2.012 2.013 3.12 4.688 3.119 7.534-.003 5.88-4.79 10.667-10.662 10.667zm5.84-7.987c-.32-.16-1.894-.934-2.188-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.186.213-.373.24-.693.08-.32-.16-1.35-.497-2.571-1.586-.95-.847-1.59-1.893-1.776-2.213-.186-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.623-.525-.54-.72-.55l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.146 3.093 1.306 3.306c.16.213 2.257 3.447 5.472 4.832.765.33 1.36.527 1.825.674.767.243 1.465.208 2.016.126.615-.092 1.894-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/>
          </svg>

        </div>
      </a>
    </div>
  );
};

export default Index;
