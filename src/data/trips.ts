import gangtok from "../assets/Gallery/gangtok.jpeg";
import digha from "../assets/Gallery/digha.jpg";
import jharkhand from "../assets/Gallery/jharkhand.jpg";
import arunachal from "../assets/Gallery/arunachal.jpg";
import nepal from "../assets/Gallery/nepal.jpg";
import rajgar from "../assets/Gallery/rajgar.jpg";
import kaziranga from "../assets/Gallery/kaziranga.jpg";
import nainital from "../assets/Gallery/nainital.jpg";
import darjelling from "../assets/Gallery/darjelling.jpg";

export interface Trip {
  slug: string;
  title: string;
  location: string;
  duration: string;
  price: string;
  rating: number;
  image: string;
  description: string;
  overview: string;
  itinerary: { day: string; detail: string }[];
}

const trips: Trip[] = [

  // ================= SIKKIM 9 DAYS =================
  {
    slug: "sikkim-explorer",
    title: "Sikkim Explorer",
    location: "Gangtok & North Sikkim",
    duration: "9 Days / 8 Nights",
    price: "Rs. 18,999",
    rating: 4.9,
    image: gangtok,

    description:
      "Complete North Sikkim adventure covering Gangtok, Nathula, Lachen, Lachung, Gurudongmar Lake and Yumthang Valley.",

    overview:
      "This 9-day immersive Himalayan journey covers monasteries, high-altitude lakes, waterfalls and breathtaking valleys.",

    itinerary: [
      { day: "Day 1", detail: "Pickup from Bagdogra/NJP → Transfer to Gangtok → Evening MG Marg visit." },
      { day: "Day 2", detail: "Gangtok Local Sightseeing: Ranka Monastery, Ganesh Tok, Hanuman Tok, Tashi View Point, Bakthang Waterfall, Plant Conservatory, Handicraft Centre." },
      { day: "Day 3", detail: "Tsomgo Lake, Nathula Pass & Baba Mandir → Return to Gangtok." },
      { day: "Day 4", detail: "Gangtok to Lachen → Scenic mountain drive (Stay in Lachen)." },
      { day: "Day 5", detail: "Gurudongmar Lake & Zero Point → Return to Lachen." },
      { day: "Day 6", detail: "Transfer to Lachung → Overnight stay." },
      { day: "Day 7", detail: "Yumthang Valley & Zero Point → Return to Lachung." },
      { day: "Day 8", detail: "Return to Gangtok → Leisure evening." },
      { day: "Day 9", detail: "Gangtok to NJP/Bagdogra drop." },
    ],
  },

  // ================= SIKKIM + DARJEELING =================
  {
    slug: "darjeeling-retreat",
    title: "Sikkim & Darjeeling Retreat",
    location: "Gangtok, Lachung & Darjeeling",
    duration: "7 Days / 6 Nights",
    price: "Rs. 14,999",
    rating: 4.8,
    image: darjelling,

    description:
      "A perfect combination tour covering Sikkim highlights and the Queen of Hills - Darjeeling.",

    overview:
      "Explore Gangtok, Nathula, Lachung, Yumthang Valley, Namchi, Ravangla and Darjeeling’s iconic landmarks.",

    itinerary: [
      { day: "Day 1", detail: "NJP/Siliguri to Gangtok → Evening MG Marg visit." },
      { day: "Day 2", detail: "Gangtok Sightseeing: Bakthang Falls, Tashi View Point, Ganesh Tok, Hanuman Tok, Enchey Monastery, Ropeway." },
      { day: "Day 3", detail: "Tsomgo Lake & Nathula Pass → Return to Gangtok." },
      { day: "Day 4", detail: "Gangtok to Lachung → 7 Sisters Waterfall, Chungthang, Bhim Nala Falls." },
      { day: "Day 5", detail: "Yumthang Valley & Zero Point → Return to Gangtok." },
      { day: "Day 6", detail: "Namchi Chardham, Temi Tea Garden, Ravangla Buddha Park → Transfer to Darjeeling." },
      { day: "Day 7", detail: "Darjeeling Sightseeing: Tiger Hill, Ghoom Monastery, Batasia Loop, Tea Garden, Himalayan Zoo → Drop to Siliguri." },
    ],
  },

  // ================= TEMPORARY ITINERARIES =================
  {
    slug: "digha-beach-escape",
    title: "Digha Beach Escape",
    location: "Digha, West Bengal",
    duration: "3 Days / 2 Nights",
    price: "Rs. 9,499",
    rating: 4.6,
    image: digha,
    description: "Relaxing beach getaway with coastal charm.",
    overview: "Enjoy golden beaches, fresh seafood and peaceful sunsets.",
    itinerary: [
      { day: "Day 1", detail: "Arrival & Beach Relaxation." },
      { day: "Day 2", detail: "Marine Aquarium & Sunset Beach." },
      { day: "Day 3", detail: "Local shopping & departure." },
    ],
  },

  {
    slug: "nepal-heritage-tour",
    title: "Nepal Heritage Tour",
    location: "Kathmandu & Pokhara",
    duration: "6 Days / 5 Nights",
    price: "Rs. 29,999",
    rating: 4.9,
    image: nepal,
    description: "Discover Nepal’s temples and Himalayan beauty.",
    overview: "Spiritual and scenic tour across Nepal’s highlights.",
    itinerary: [
      { day: "Day 1", detail: "Arrival in Kathmandu." },
      { day: "Day 2", detail: "Pashupatinath & Swayambhunath Temple." },
      { day: "Day 3", detail: "Drive to Pokhara." },
      { day: "Day 4", detail: "Phewa Lake & Sunrise View." },
      { day: "Day 5", detail: "Local exploration." },
      { day: "Day 6", detail: "Return & Departure." },
    ],
  },

  {
    slug: "rajgir-spiritual-trip",
    title: "Rajgir Spiritual Trip",
    location: "Rajgir, Bihar",
    duration: "2 Days / 1 Night",
    price: "Rs. 6,999",
    rating: 4.5,
    image: rajgar,
    description: "Peaceful spiritual retreat in Rajgir.",
    overview: "Visit sacred Buddhist and Jain sites.",
    itinerary: [
      { day: "Day 1", detail: "Vishwa Shanti Stupa & Ropeway." },
      { day: "Day 2", detail: "Hot Springs & departure." },
    ],
  },

  {
    slug: "deoghar-pilgrimage-tour",
    title: "Deoghar Pilgrimage Tour",
    location: "Deoghar, Jharkhand",
    duration: "3 Days / 2 Nights",
    price: "Rs. 8,499",
    rating: 4.6,
    image: jharkhand,
    description: "Sacred Baidyanath Dham pilgrimage.",
    overview: "Spiritual experience with comfortable stay.",
    itinerary: [
      { day: "Day 1", detail: "Temple Darshan." },
      { day: "Day 2", detail: "Local sightseeing." },
      { day: "Day 3", detail: "Departure." },
    ],
  },

  {
    slug: "uttarakhand-hills-journey",
    title: "Uttarakhand Hills Journey",
    location: "Nainital & Mussoorie",
    duration: "6 Days / 5 Nights",
    price: "Rs. 21,999",
    rating: 4.8,
    image: nainital,
    description: "Explore serene Himalayan lakes and hills.",
    overview: "A refreshing escape into Uttarakhand’s beauty.",
    itinerary: [
      { day: "Day 1", detail: "Arrival & Lake view." },
      { day: "Day 2", detail: "Local sightseeing." },
      { day: "Day 3", detail: "Transfer to Mussoorie." },
      { day: "Day 4", detail: "Kempty Falls." },
      { day: "Day 5", detail: "Mall Road exploration." },
      { day: "Day 6", detail: "Departure." },
    ],
  },

  {
    slug: "assam-nature-wildlife",
    title: "Assam Nature & Wildlife",
    location: "Kaziranga & Guwahati",
    duration: "5 Days / 4 Nights",
    price: "Rs. 19,499",
    rating: 4.7,
    image: kaziranga,
    description: "Wildlife safari & spiritual exploration.",
    overview: "Experience Kaziranga’s wildlife and Kamakhya Temple.",
    itinerary: [
      { day: "Day 1", detail: "Arrival in Guwahati." },
      { day: "Day 2", detail: "Kaziranga Safari." },
      { day: "Day 3", detail: "Elephant Safari." },
      { day: "Day 4", detail: "Kamakhya Temple visit." },
      { day: "Day 5", detail: "Departure." },
    ],
  },

  {
    slug: "arunachal-adventure",
    title: "Arunachal Adventure",
    location: "Tawang & Dirang",
    duration: "7 Days / 6 Nights",
    price: "Rs. 27,999",
    rating: 4.9,
    image: arunachal,
    description: "High altitude monasteries & snow peaks.",
    overview: "A thrilling Himalayan expedition.",
    itinerary: [
      { day: "Day 1", detail: "Arrival & transfer." },
      { day: "Day 2", detail: "Dirang sightseeing." },
      { day: "Day 3", detail: "Transfer to Tawang." },
      { day: "Day 4", detail: "Tawang Monastery." },
      { day: "Day 5", detail: "Sela Pass visit." },
      { day: "Day 6", detail: "Local exploration." },
      { day: "Day 7", detail: "Departure." },
    ],
  },

];

export default trips;