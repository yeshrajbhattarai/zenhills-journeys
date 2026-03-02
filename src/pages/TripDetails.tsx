import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Calendar, Star, ArrowRight } from "lucide-react";

// import same images used in trips
import gangtok from "../assets/Gallery/gangtok.jpeg";
import digha from "../assets/Gallery/digha.jpg";
import jharkhand from "../assets/Gallery/jharkhand.jpg";
import arunachal from "../assets/Gallery/arunachal.jpg";
import nepal from "../assets/Gallery/nepal.jpg";
import rajgar from "../assets/Gallery/rajgar.jpg";
import kaziranga from "../assets/Gallery/kaziranga.jpg";
import nainital from "../assets/Gallery/nainital.jpg";
import darjelling from "../assets/Gallery/darjelling.jpg";

import { useState } from "react";

import Swal from "sweetalert2";
import trips from "../data/trips";

const TripDetails = () => {
  const { slug } = useParams();
  const [showForm, setShowForm] = useState(false)
  // const [showForm, setShowForm] = useState({
  //     fullName: "",
  //     email: "",
  //     phone: "",
  //     arrivalDate: "",
  //     adults: 1,
  //     children: 0,
  //     requests: "",
  //     });
  const trip = trips.find((t) => t.slug === slug);
  
  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Trip Not Found</h1>
      </div>
    );
  }
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const fullName = (form.elements.namedItem("fullName") as HTMLInputElement).value;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
  const date = (form.elements.namedItem("arrivalDate") as HTMLInputElement).value;
  const adults = (form.elements.namedItem("adults") as HTMLInputElement).value;
  const children = (form.elements.namedItem("children") as HTMLInputElement).value;
  const requests = (form.elements.namedItem("special_requests") as HTMLTextAreaElement)?.value || "";

  // 🔎 Basic validations
  if (!fullName || !email || !phone || !date || !adults) {
    Swal.fire({
      icon: "error",
      title: "Missing Information",
      text: "Please fill all required fields.",
    });
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    Swal.fire({
      icon: "warning",
      title: "Invalid Email",
      text: "Please enter a valid email address.",
    });
    return;
  }

  if (phone.length < 10) {
    Swal.fire({
      icon: "warning",
      title: "Invalid Phone Number",
      text: "Phone number must be at least 10 digits.",
    });
    return;
  }

  try {
    const response = await fetch(
      "https://yeshraj.pythonanywhere.com/api/bookings/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trip_name: trip.title,
          full_name: fullName,
          email: email,
          phone: phone,
          arrival_date: date,
          adults: Number(adults),
          children: Number(children),
          special_requests: requests,
        }),
      }
    );

    if (response.ok) {
      Swal.fire({
        icon: "success",
        title: "Booking Submitted!",
        text: `We will contact you soon regarding ${trip.title}.`,
        confirmButtonColor: "#0f766e",
      });

      setShowForm(false);
    } else {
      const errorData = await response.json();
      console.log("Backend Error:", errorData);

      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again.",
      });
    }
  } catch (error) {
    console.error("Network Error:", error);

    Swal.fire({
      icon: "error",
      title: "Network Error",
      text: "Could not connect to server.",
    });
  }
};




  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src={trip.image}
          alt={trip.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {trip.title}
          </h1>
          <p className="text-lg opacity-90">{trip.location}</p>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              {trip.duration}
            </div>

            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              {trip.rating}
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8">
            {trip.description}
          </p>
        <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
        <p className="text-muted-foreground mb-8">{trip.overview}</p>

        <h2 className="text-2xl font-bold mb-6">Detailed Itinerary</h2>

<div className="space-y-6">
  {trip.itinerary?.map((item, index) => (
    <div
      key={index}
      className="relative bg-gradient-to-r from-primary/5 to-primary/10 p-5 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-primary"
    >
      <div className="flex items-center gap-3 mb-2">
        <Calendar className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-primary">{item.day}</h3>
      </div>
      <p className="text-muted-foreground">{item.detail}</p>
    </div>
  ))}
</div>
          <div className="bg-card p-6 rounded-xl shadow-zen flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">Starting From</p>
              <p className="text-2xl font-bold text-primary">{trip.price}</p>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="bg-primary text-white px-6 py-3 rounded-lg mt-6"
            >
              Book Now
            </button>
            
          </div>

        </div>
      </section>



      
{showForm && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

    <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl p-8 relative">

      {/* Close Button */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-6 text-center">
        Book {trip.title}
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          name="phone"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />

       <div className="space-y-1">
        <label className="text-sm font-medium text-muted-foreground">
          Arrival Date
        </label>
        <input
          name="arrivalDate"
          type="date"
          min={new Date().toISOString().split("T")[0]}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
        />
      </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="adults"
            placeholder="Adults (12+)"
            min="1"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />

          <input
            type="number"
            name="children"
            placeholder="Children (<12)"
            min="0"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
          />
        </div>

        <textarea
          placeholder="Special Requests"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
          name="special_requests"
        />

        <button
          type="submit"
          className="w-full bg-zen-gradient text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Submit Booking
        </button>

      </form>
    </div>
  </div>
)}
      <Footer />
    </div>
  );
};

export default TripDetails;
