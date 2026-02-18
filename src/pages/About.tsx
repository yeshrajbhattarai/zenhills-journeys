import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart, Target, Eye, Users } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion",
    desc: "We live and breathe travel. Every trip we plan is infused with our genuine love for exploration and discovery.",
  },
  {
    icon: Target,
    title: "Precision",
    desc: "Every detail matters. From flights to hotels to hidden gems — we ensure a seamless, stress-free experience.",
  },
  {
    icon: Eye,
    title: "Vision",
    desc: "We look beyond the obvious to find destinations and experiences that truly transform your perspective.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Our travellers become family. We build lasting relationships and a community of passionate explorers.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 bg-zen-light-gradient">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            The Story Behind ZenHills
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
           Inspired by the serenity of Sikkim’s mountains and monasteries, ZenHills was founded to offer authentic Himalayan experiences. We believe travel here should feel slow, soulful, and connected to nature.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 px-4">
  <div className="container mx-auto max-w-6xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* <div className="rounded-2xl overflow-hidden shadow-zen-lg">
        <img
          src={aboutTeam}
          alt="ZenHills Sikkim landscape"
          className="w-full h-[400px] object-cover"
        />
      </div> */}

      <div className="space-y-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Rooted in the Calm of the Himalayas 🌿
        </h2>

        <p className="font-body text-muted-foreground leading-relaxed">
          ZenHills was born in the peaceful valleys of Sikkim - where
          prayer flags flutter in the wind and the mountains stand
          timeless and silent. 🏔✨
        </p>

        <p className="font-body text-muted-foreground leading-relaxed">
          We don’t believe in rushed itineraries or crowded experiences.
          We believe in slow mornings, quiet monastery visits,
          mist-covered landscapes, and journeys that let you truly breathe. 🌫️🌄
        </p>

        <p className="font-body text-muted-foreground leading-relaxed">
          As locals who deeply understand this land, we design experiences
          that connect you with Sikkim’s culture, nature, and spiritual calm -
          thoughtfully, personally, and gently. 🤍
        </p>
      </div>

    </div>
  </div>
</section>


      {/* Values */}
      <section className="py-16 md:py-24 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Our Values</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-6 text-center shadow-zen hover:shadow-zen-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-zen-wash flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
